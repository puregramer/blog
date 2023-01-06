import { SHAPES } from "$lib/tetris/config";

export default class Block {
    typeId: number | undefined;
    shape: any[] | undefined;
    x: number;
    y: number;
    hardDropped: boolean;
    constructor() {
        this.x = 0;
        this.y = 0;
        this.hardDropped = false;
        this.spawn();
    }

    spawn() {
        this.typeId = this.randomizeBlockType(SHAPES.length - 1);
        this.shape = SHAPES[this.typeId];
        // this.x = 0;
        // this.y = 0;
        // this.hardDropped = false;
    }
    randomizeBlockType(typeLength:number) {
        return Math.floor(Math.random() * typeLength + 1);
    }
    hardDrop() {
        this.hardDropped = true;
    }
    setStartPos() {
        this.x = this.typeId === 4 ? 4 : 3;
    }
    move(block: Block) {
        if (!this.hardDropped) {
            this.x = block.x;
            this.y = block.y;
        }
        this.shape = block.shape;
    }
}