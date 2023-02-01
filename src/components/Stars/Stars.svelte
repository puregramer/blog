<script>
    import { Application, Ticker } from 'svelte-pixi';
    import Star from "./Star.svelte";
    import * as PIXI from "pixi.js";
    let width = window.innerWidth;
    let height = window.innerHeight;
    export let warp;

    $: console.log("watch warp: ", warp);

    const starAmount = 1000;
    let cameraZ = 0;
    const speed = 0.025;
    let warpSpeed = 0;

    let stars = Array(starAmount).fill(null);

    function render(ev) {
        warpSpeed += (warp - warpSpeed) / 20;
        cameraZ += ev.detail * 10 * (speed + warpSpeed);
    }

</script>
<div class="absolute hidden dark:block">
    <Application width={width} height={height} resizeTo={document.getElementById('main-container')} backgroundColor="#111827" antialias>
        <Ticker on:tick={render}>
            {#each stars as star}
                <Star {cameraZ} {warpSpeed}/>
            {/each}
        </Ticker>
    </Application>
</div>


