<script>
    import pcViewer from '$lib/images/project/pc_viewer.png';
    import kit from '$lib/images/project/kit.png';
    import pdfLib from '$lib/images/project/pdf_lib.png';
    import racingWord from '$lib/images/project/racing_word.png';
    import musicSync from '$lib/images/project/music_sync.png';
    import kalkalkal from '$lib/images/project/kalkalkal.jpeg';
    import zone4 from '$lib/images/project/zone4.jpeg';

    import electronLogo from '$lib/images/electron.png';
    import vueLogo from '$lib/images/vue.png';
    import webpackLogo from '$lib/images/webpack.png';
    import nodejsLogo from '$lib/images/nodejs.png';
    import es6Logo from '$lib/images/es6.jpeg';
    import reactLogo from '$lib/images/react.svg';

</script>

<!--<section>
    <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900">Projects</h1>
        </div>
    </header>
    <main>
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            &lt;!&ndash; Replace with your content &ndash;&gt;

            &lt;!&ndash; /End replace &ndash;&gt;
        </div>
    </main>
</section>-->

<section>
    <div class="dark:bg-gray-900 py-24 sm:py-32 lg:py-40">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="sm:text-center">
                <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">주요 프로젝트</p>
                <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">서비스 런칭 된 프로젝트 위주로 나열합니다.</p>
            </div>

            <div class="py-6 sm:px-0">
                <div class="px-6 py-6 rounded-lg border-4 border-dashed border-gray-200">
                    <p class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">Front-end Web side</p>
                    <div class="mt-10 max-w-lg sm:mx-auto md:max-w-none">
                        <div class="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                            <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                <div class="flex w-full sm:w-80 items-center justify-center ">
                                    <img class=" rounded-xl" src={pcViewer} alt="">
                                </div>
                                <div class="sm:min-w-0 sm:flex-1">
                                    <p class="text-lg font-semibold leading-8 text-gray-900 dark:text-white">PC Viewer (epub, pdf, audioBook)</p>
                                    <p class="mt-2 text-base leading-7 text-gray-600">개발 환경</p>
                                    <div class="mt-3 flex -space-x-2">
                                        <img class="inline-block bg-white h-10 w-10 rounded-full ring-2 ring-white" src={electronLogo} alt="">
                                        <img class="inline-block bg-white h-10 w-10 rounded-full ring-2 ring-white" src={vueLogo} alt="">
                                        <img class="inline-block bg-white h-10 w-10 rounded-full ring-2 ring-white" src={webpackLogo} alt="">
                                        <img class="inline-block bg-white h-10 w-10 rounded-full ring-2 ring-white" src={nodejsLogo} alt="">
                                    </div>
                                </div>
                            </div>

                            <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                <div class="flex w-full sm:w-80 items-center justify-center ">
                                    <img class=" rounded-xl" src={kit} alt="">
                                </div>
                                <div class="sm:min-w-0 sm:flex-1">
                                    <p class="text-lg font-semibold leading-8 text-gray-900 dark:text-white">AudioBook KIT</p>
                                    <p class="mt-2 text-base leading-7 text-gray-600">개발 환경</p>
                                    <div class="mt-3 flex -space-x-2">
                                        <img class="inline-block bg-white h-10 w-10 rounded-full ring-2 ring-white" src={electronLogo} alt="">
                                        <img class="inline-block bg-white h-10 w-10 rounded-full ring-2 ring-white" src={vueLogo} alt="">
                                        <img class="inline-block bg-white h-10 w-10 rounded-full ring-2 ring-white" src={webpackLogo} alt="">
                                        <img class="inline-block bg-white h-10 w-10 rounded-full ring-2 ring-white" src={nodejsLogo} alt="">
                                    </div>
                                </div>
                            </div>

                            <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                <div class="flex w-full sm:w-80 items-center justify-center ">
                                    <img class=" rounded-xl" src={pdfLib} alt="">
                                </div>
                                <div class="sm:min-w-0 sm:flex-1">
                                    <p class="text-lg font-semibold leading-8 text-gray-900 dark:text-white">PDF Viewer Lib</p>
                                    <p class="mt-2 text-base leading-7 text-gray-600">개발 환경</p>
                                    <div class="mt-3 flex -space-x-2">
                                        <img class="inline-block bg-white h-10 w-10 rounded-full ring-2 ring-white" src={es6Logo} alt="">
                                        <img class="inline-block bg-white h-10 w-10 rounded-full ring-2 ring-white" src={webpackLogo} alt="">
                                    </div>
                                </div>
                            </div>

                            <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                <div class="flex w-full sm:w-80 items-center justify-center ">
                                    <img class=" rounded-xl" src={racingWord} alt="">
                                </div>
                                <div class="sm:min-w-0 sm:flex-1">
                                    <p class="text-lg font-semibold leading-8 text-gray-900 dark:text-white">racing Quiz</p>
                                    <p class="mt-2 text-base leading-7 text-gray-600">개발 환경</p>
                                    <div class="mt-3 flex -space-x-2">
                                        <img class="inline-block bg-white h-10 w-10 rounded-full ring-2 ring-white" src={reactLogo} alt="">
                                        <img class="inline-block bg-white h-10 w-10 rounded-full ring-2 ring-white" src={webpackLogo} alt="">
                                    </div>
                                </div>
                            </div>

                            <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                <div class="flex w-full sm:w-80 items-center justify-center ">
                                    <img class=" rounded-xl" src={musicSync} alt="">
                                </div>
                                <div class="sm:min-w-0 sm:flex-1">
                                    <p class="text-lg font-semibold leading-8 text-gray-900 dark:text-white">Music Sync</p>
                                    <p class="mt-2 text-base leading-7 text-gray-600">개발 환경</p>
                                    <div class="mt-3 flex -space-x-2">
                                        <img class="inline-block bg-white h-10 w-10 rounded-full ring-2 ring-white" src={es6Logo} alt="">
                                        <img class="inline-block bg-white h-10 w-10 rounded-full ring-2 ring-white" src={webpackLogo} alt="">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="py-6 sm:px-0">
                <div class="px-6 py-6 rounded-lg border-4 border-dashed border-gray-200">
                    <p class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">GameDesign side</p>
                    <div class="mt-10 max-w-lg sm:mx-auto md:max-w-none">
                        <div class="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                            <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                <div class="flex w-full sm:w-80 items-center justify-center ">
                                    <img class=" rounded-xl" src={kalkalkal} alt="">
                                </div>
                                <div class="sm:min-w-0 sm:flex-1">
                                    <p class="text-lg font-semibold leading-8 text-gray-900 dark:text-white">Samurai Shodown Slash</p>
                                    <p class="mt-2 text-base leading-7 text-gray-600">게임 기획 팀장</p>
                                </div>
                            </div>

                            <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                <div class="flex w-full sm:w-80 items-center justify-center ">
                                    <img class=" rounded-xl" src={zone4} alt="">
                                </div>
                                <div class="sm:min-w-0 sm:flex-1">
                                    <p class="text-lg font-semibold leading-8 text-gray-900 dark:text-white">제4구역 온라인</p>
                                    <p class="mt-2 text-base leading-7 text-gray-600">게임 기획 (밸런스 & 스크립트)</p>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</section>

