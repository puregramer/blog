<script>
    import { fade } from 'svelte/transition';
    import { scaleLinear } from 'd3-scale';
    import points from './data.ts';
    import html5Logo from '$lib/images/html5.svg';
    import jsLogo from '$lib/images/js-logo.png';
    import tsLogo from '$lib/images/ts.png';
    import es6Logo from '$lib/images/es6.jpeg';
    import angularLogo from '$lib/images/angular.png';
    import vueLogo from '$lib/images/vue.png';
    import reactLogo from '$lib/images/react.svg';
    import electronLogo from '$lib/images/electron.png';
    import nodejsLogo from '$lib/images/nodejs.png';
    import svelteLogo from '$lib/images/svelte-logo.svg';
    import githubLogo from '$lib/images/github.png';
    import webpackLogo from '$lib/images/webpack.png';
    import rollupLogo from '$lib/images/rollup-logo.svg';

    let visible = true;

    const yTicks = [-10, -5, 0, 5, 10];
    const xTicks = [2007, 2010, 2011, 2012, 2014, 2015, 2019, 2020, 2022];
    const padding = { top: 20, right: 15, bottom: 20, left: 25 };

    let width = 600;
    let height = 300;

    $: xScale = scaleLinear()
        .domain([minX, maxX])
        .range([padding.left, width - padding.right]);

    $: yScale = scaleLinear()
        .domain([Math.min.apply(null, yTicks), Math.max.apply(null, yTicks)])
        .range([height - padding.bottom, padding.top]);

    $: minX = points[0].x;
    $: maxX = points[points.length - 1].x;
    $: path = `M${points.map(p => `${xScale(p.x)},${yScale(p.y)}`).join('L')}`;
    $: area = `${path}L${xScale(maxX)},${yScale(0)}L${xScale(minX)},${yScale(0)}Z`;

    function formatMobile (tick) {
        return "'" + tick.toString().slice(-2);
    }

</script>

{#if visible}
    <section transition:fade>
        <div class="dark:bg-gray-900 py-24 sm:py-32 lg:py-40">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="sm:text-center">
                    <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">인생 그래프</p>
                    <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">게임기획 5년, 프론트엔드 개발 9년.</p>

                    <div class="py-6 sm:px-0">
                        <div class="px-6 py-6 rounded-lg border-4 border-dashed border-gray-200">

                            <div class="chart" bind:clientWidth={width} bind:clientHeight={height}>
                                <svg>
                                    <!-- y axis -->
                                    <g class="axis y-axis" transform="translate(0, {padding.top})">
                                        {#each yTicks as tick}
                                            <g class="tick tick-{tick}" transform="translate(0, {yScale(tick) - padding.bottom})">
                                                <line x2="100%"></line>
                                                <text y="-4">{tick} {tick === 10 ? ' 행복지수' : ''}</text>
                                            </g>
                                        {/each}
                                    </g>

                                    <!-- x axis -->
                                    <g class="axis x-axis">
                                        {#each xTicks as tick}
                                            <g class="tick tick-{ tick }" transform="translate({xScale(tick)},{height})">
                                                <line y1="-{height}" y2="-{padding.bottom}" x1="0" x2="0"></line>
                                                <text y="-2">{width > 380 ? tick : formatMobile(tick)}</text>
                                            </g>
                                        {/each}
                                    </g>

                                    <!-- data -->
                                    <path class="path-area" d={area}></path>
                                    <path class="path-line" d={path}></path>
                                </svg>


                            </div>


                            <ul class="px-2 py-3 text-xs text-gray-900">
                                {#each points as data}
                                    <li>
                                        <div class="ml-3 min-w-0 flex-1 text-gray-500">
                                            <div class="inline-block text-xs rounded-lg bg-gray-500 px-2 text-base text-white shadow-sm ring-1 ring-gray-600">
                                                {data.x}
                                            </div>
                                            {data.text}
                                        </div>
                                    </li>
                                {/each}
                            </ul>

                        </div>
                    </div>

                </div>

                <!--<div class="mt-20 max-w-lg sm:mx-auto md:max-w-none">
                    <div class="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                        <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                                &lt;!&ndash; Heroicon name: outline/globe-alt &ndash;&gt;
                                <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                            </div>
                            <div class="sm:min-w-0 sm:flex-1">
                                <p class="text-lg font-semibold leading-8 text-gray-900 dark:text-white">Competitive exchange rates</p>
                                <p class="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                            </div>
                        </div>

                        <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                                &lt;!&ndash; Heroicon name: outline/scale &ndash;&gt;
                                <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                                </svg>
                            </div>
                            <div class="sm:min-w-0 sm:flex-1">
                                <p class="text-lg font-semibold leading-8 text-gray-900 dark:text-white">No hidden fees</p>
                                <p class="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                            </div>
                        </div>

                        <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                                &lt;!&ndash; Heroicon name: outline/bolt &ndash;&gt;
                                <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                            </div>
                            <div class="sm:min-w-0 sm:flex-1">
                                <p class="text-lg font-semibold leading-8 text-gray-900 dark:text-white">Transfers are instant</p>
                                <p class="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                            </div>
                        </div>

                        <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                                &lt;!&ndash; Heroicon name: outline/device-phone-mobile &ndash;&gt;
                                <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                </svg>
                            </div>
                            <div class="sm:min-w-0 sm:flex-1">
                                <p class="text-lg font-semibold leading-8 text-gray-900 dark:text-white">Mobile notifications</p>
                                <p class="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                            </div>
                        </div>
                    </div>
                </div>-->

            </div>

            <div class="mx-auto max-w-7xl px-6 lg:px-8 py-10">
                <div class="sm:text-center">
                    <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">주요 스펙</p>
                    <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">프로젝트에서 사용한 스킬 위주로 나열합니다.</p>

                    <div class="py-6 sm:px-0">
                        <div class="px-6 py-6 rounded-lg border-4 border-dashed border-gray-200">
                            <div class="flex -space-x-2">
                                <img class="inline-block bg-white h-10 w-10 rounded-full ring-2 ring-white" src={html5Logo} alt="">
                                <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={jsLogo} alt="">
                                <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={es6Logo} alt="">
                                <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={tsLogo} alt="">
                                <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={angularLogo} alt="">
                                <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={reactLogo} alt="">
                                <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={vueLogo} alt="">
                                <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={electronLogo} alt="">
                                <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={nodejsLogo} alt="">
                                <img class="inline-block bg-gray-200 h-10 w-10 rounded-full ring-2 ring-white" src={svelteLogo} alt="">
                                <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={githubLogo} alt="">
                                <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={webpackLogo} alt="">
                                <img class="inline-block bg-gray-200 h-10 w-10 rounded-full ring-2 ring-white" src={rollupLogo} alt="">
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </section>
{/if}

<style lang="postcss">
    .chart, p {
        width: 100%;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }

    svg {
        position: relative;
        width: 100%;
        height: 300px;
        overflow: visible;
    }

    .tick {
        font-size: .725em;
        font-weight: 200;
    }

    .tick line {
        stroke: #aaa;
        stroke-dasharray: 2;
    }

    .tick text {
        fill: #666;
        text-anchor: start;
    }

    .tick.tick-0 line {
        stroke-dasharray: 0;
    }

    .x-axis .tick text {
        text-anchor: middle;
    }

    .path-line {
        fill: none;
        stroke: rgb(0,100,100);
        stroke-linejoin: round;
        stroke-linecap: round;
        stroke-width: 2;
    }

    .path-area {
        fill: rgba(0,100,100,0.2);
    }
</style>

