<script>
    import { onMount } from 'svelte';
    import Stage from "$lib/tetris/Stage";
    import { LEVEL, KEY } from "$lib/tetris/config";

    const title = "puregramer@gmail.com";
    const metaDescription = "use Sveltekit and ...";

    const stage = new Stage();
    let grid = stage.getGrid();

    let animateId = null;
    let time = null;
    const animate = (now = 0) => {
        time.elapsed = now - time.start;
        if (time.elapsed > time.level) {
            time.start = now;
            if (!stage.drop()) {
                gameOver();
                return;
            }
        }
        render();
        animateId = requestAnimationFrame(animate);
    }
    function gameOver() {
    }

    function render() {
        grid = stage.getGrid();
    }

    function processBlock(event) {
        if (stage.moves[event.keyCode]) {
            event.preventDefault();
            // 이동 적용된 블럭 정보 가져옴
            let block = stage.moves[event.keyCode](stage.$block);

            if (event.keyCode === KEY.SPACE) {
                // hard drop 처리
                while(stage.validation(block)) {
                    stage.$block.move(block);
                    block = stage.moves[KEY.DOWN](stage.$block);
                }
                stage.$block.hardDrop();
            } else if (stage.validation(block)) {
                stage.$block.move(block);
            }
            stage.activeBlock();
        }
    }

    onMount(() => {
        time = {
            start: performance.now(),
            elapsed: 0,
            level: LEVEL[stage.level]
        };
        console.log("= time ", time, stage);
        if (animateId) {
            cancelAnimationFrame(animateId);
        }
        stage.init();
        animate();
    });
</script>

<svelte:window on:keydown|preventDefault={processBlock} />
<svelte:head>
    <title>{title}</title>
    <meta name="description" content={metaDescription} />
</svelte:head>

<section>
    <div class="relative px-6 lg:px-8 dark:bg-gray-900">
        <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div class="relative">
                <div class="stage">
                    {#each grid as row}
                        <div class="row">
                            {#each row as cell}
                                <div class="cell cell-{cell}"></div>
                            {/each}
                        </div>
                    {/each}
                </div>
                <div class="absolute inset-x-4 inset-y-12">
                    <h1 class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl dark:text-white">Front-end Web Developer.</h1>
                    <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center">Anim aute id magna aliqua ad ad non
                        deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                        fugiat aliqua.</p>
                    <div class="mt-8 flex gap-x-4 sm:justify-center">
                        <a href="/introduce/"
                           class="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
                            Enter
                            <span class="text-indigo-200" aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>

<style lang="postcss">
    .stage {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 4px;
        overflow: hidden;
        transition: .4s;
        opacity: 0.3;
    }
    .row {
        display: flex;
        gap: 4px;
    }
    .cell {
        flex: 1;
        aspect-ratio: 1/1;
        border-radius: 7%;
        transition: .04s;
        background: var(--color);
        --shadow-color: #0d0d1716;
        --shadow: inset 0 0 0 5px var(--shadow-color), inset -5px -5px var(--shadow-color);
        box-shadow: var(--shadow), 0 0 6px var(--color);
    }
    .cell-9 {
        background: radial-gradient(circle at 5px 4px, rgba(199,197,191,1) 0%, rgba(157,161,164,1) 49%);
        --color: #000;
    }
    .cell-1 { --color: #8fcdee; }
    .cell-2 { --color: #5555ef; }
    .cell-3 { --color: #e58e36; }
    .cell-4 { --color: #ebe648; }
    .cell-5 { --color: #73e852; }
    .cell-6 { --color: #dc60ea; }
    .cell-7 { --color: #ef4a58; }
    .cell-8 { --color: #656e75; }
    .cell-0, .cell-8 {
        --shadow-color: #0d0d171e;
        box-shadow: var(--shadow);
    }
    .cell-0 { --color: #3f3f3f; }
</style>


