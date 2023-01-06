import Block from "$lib/tetris/Block";
import { config, KEY, ROTATION } from "$lib/tetris/config";

export default class Stage {
    level: number;
    grid: number[][];
    activeGrid: number[][] | undefined;
    $block: Block | undefined;
    $blockNext: Block | undefined;
    moves: any;
    constructor() {
        this.level = 0;
        this.grid = this.getEmptyGrid();
        this.activeGrid = this.getEmptyGrid();
        this.moves = {
            [KEY.DOWN]: (block: Block) => ({...block, y: block.y + 1}),
            [KEY.SPACE]: (block: Block) => ({...block, y: block.y + 1}),
            [KEY.LEFT]: (block: Block) => ({...block, x: block.x - 1}),
            [KEY.RIGHT]: (block: Block) => ({...block, x: block.x + 1}),
            [KEY.UP]: (block: Block) => this.rotate(block, ROTATION.RIGHT),
            [KEY.Q]: (block: Block) => this.rotate(block, ROTATION.LEFT),
        };
    }

    init() {
        this.$block = new Block();
        this.$block.setStartPos();
        this.activeBlock();
    }
    getEmptyGrid() {
        return Array.from({length: config.ROWS}, () => Array(config.COLS).fill(0));
    }

    getGrid() {
        return this.mergeGrid();
    }

    mergeGrid() {
        this.grid.forEach((row, y: number) => {
            row.forEach((value: number, x: number) => {
                if (this.activeGrid && value > 0) {
                    this.activeGrid[y][x] = value;
                }
            });
        });
        return this.activeGrid;
    }

    drop() {
        // moves
        const block = this.moves[KEY.DOWN](this.$block);
        // 이동 가능 상태인지 체크
        if (this.validation(block)) {
            this.$block?.move(block);
        } else {
            this.appendBlock();
            this.removeLines();
            if (this.$block?.y === 0) {
                // Game over
                return false;
            }
            this.initNextBlock();
        }
        this.activeBlock();
        return true;
    }
    activeBlock() {
        this.activeGrid = this.getEmptyGrid();
        this.$block?.shape?.forEach((row, y: number) => {
            row.forEach((value: number, x: number) => {
                if (this.activeGrid && value > 0) {
                    if (this.$block) {
                        this.activeGrid[y + this.$block.y][x + this.$block.x] = value;
                    }
                }
            });
        });
    }
    appendBlock() {
        // stage grid에 해당 block append 처리 (stage grid에 block shape value 치환)
        this.$block?.shape?.forEach((row, y: number) => {
            row.forEach((value: number, x: number) => {
                if (this.grid && value > 0) {
                    if (this.$block) {
                        this.grid[y + this.$block.y][x + this.$block.x] = value;
                    }
                }
            });
        });
    }

    validation(block: Block) {
        return block.shape?.every((row, dy) => {
            // console.log("[validation] row", row, dy, block);
            return row.every((value: number, dx: number) => {
                // console.log("[validation] value", value, dx);
                let x = block.x + dx;
                let y = block.y + dy;
                // console.log(x, y);
                return value === 0 || (this.boundingWallCheck(x, y) && this.existBlockCheck(x, y));

            });

        });
    }

    boundingWallCheck(x: number, y: number) {
        // block이 stage 안에 있는지 체크
        return x >= 0 && x < config.COLS && y <= config.ROWS;
    }

    existBlockCheck(x: number, y: number) {
        // block이 해당 그리드에 있는지 체크
        // console.log("[grid] ---> ", this.grid[y], this.grid[y][x]);
        return this.grid[y] && this.grid[y][x] === 0;
    }

    rotate(block: Block, direction: ROTATION) {
        // 불변성을 가진 객체 생성
        let $block = JSON.parse(JSON.stringify(block));

        if (!block.hardDropped) {
            // 블록 위치 이동 처리
            for (let y = 0; y < $block.shape.length; ++y) {
                for (let x = 0; x < y; ++x) {
                    [$block.shape[x][y], $block.shape[y][x]] = [$block.shape[y][x], $block.shape[x][y]];
                }
            }

            // 정렬 reverse 처리
            if (direction === ROTATION.RIGHT) {
                $block.shape.forEach((row: number[]) => row.reverse());
            } else if (direction === ROTATION.LEFT) {
                $block.shape.reverse();
            }
        }
        return $block;
    }

    initNextBlock() {
        this.$blockNext = new Block();
        this.$block = this.$blockNext;
        this.$block.setStartPos();
    }

    removeLines() {
        // 꽉찬 라인 지워주기
        let line = 0;
        this.grid.forEach((row: number[], y:number) => {
            if (row.every((value: number) => value > 0)) {
                line++;
                // 라인 지우기
                this.grid.splice(y, 1);
                // 최상단에 빈 라인 추가
                this.grid.unshift(Array(config.COLS).fill(0));

            }
        });
    }
}