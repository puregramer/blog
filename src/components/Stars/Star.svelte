<script>
    import * as PIXI from 'pixi.js';
    import { Sprite, Ticker } from 'svelte-pixi';
    import starImg from "$lib/images/star.png";

    let width = window.innerWidth;
    let height = window.innerHeight;
    export let cameraZ;
    export let warpSpeed;
    const texture = PIXI.Texture.from(starImg);
    const anchor = new PIXI.Point(0.5, 0.7);
    let instance = new PIXI.Sprite();

    const fov = 20;
    const starBaseSize = 0.05;
    const deg = Math.random() * Math.PI * 2;
    const distance = Math.random() * 50 + 1;

    let initZ = Math.random() * 2000;
    let initX = Math.cos(deg) * distance;
    let initY = Math.sin(deg) * distance;
    let x = initX;
    let y = initY;
    let scale;
    let rotation;
    let alpha = 0;

    function getScale() {
        const z = initZ - cameraZ;
        const distanceScale = Math.max(0, (2000 - z) / 2000);

        return new PIXI.Point(
            distanceScale * starBaseSize,
            distanceScale * starBaseSize + distanceScale * warpSpeed
        )
    }

    function getRotation() {
        const dxCenter = x - width / 2;
        const dyCenter = y - height / 2;
        return Math.atan2(dyCenter, dxCenter) + Math.PI / 2;
    }

    function updatePosition() {
        if (initZ < cameraZ) {
            const deg = Math.random() * Math.PI * 2;
            const distance = Math.random() * 50 + 1;
            initX = Math.cos(deg) * distance;
            initY = Math.sin(deg) * distance;
            initZ = cameraZ + Math.random() * 1000 + 2000;
            x = initX;
            y = initY;
        } else {
            const z = initZ - cameraZ;
            x = initX * (fov / z) * width +
                width / 2;
            y = initY * (fov / z) * width +
                height / 2;
        }
    }

    function tick() {
        // fade in
        if (alpha < 1) {
            alpha += 0.05;
        }
        updatePosition();
        rotation = getRotation();
        scale = getScale();
    }
    function resizeHandler() {
        width = window.innerWidth;
        height = window.innerHeight;
    }

</script>
<svelte:window on:resize={resizeHandler} />
<Ticker on:tick={tick}>
    <Sprite
        bind:instance
        bind:x
        bind:y
        bind:scale
        bind:rotation
        {alpha}
        {texture}
        {anchor} />
</Ticker>
