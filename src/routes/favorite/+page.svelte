<script>
    import sveltekit from '$lib/images/favorite/sveltekit.png';
    import webRtc from '$lib/images/favorite/webRtc.png';
    import js13k from '$lib/images/favorite/js13k.webp';
</script>

<section>
    <div class="dark:bg-gray-900 py-24 sm:py-32 lg:py-40">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="sm:text-center">
                <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">주요 관심사</p>
                <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">최근 관심있는 것들 목록입니다.</p>
            </div>

            <div class="py-6 sm:px-0">
                <div class="px-6 py-6 rounded-lg border-4 border-dashed border-gray-200">

                    <div class="mt-10 max-w-lg sm:mx-auto md:max-w-none">
                        <div class="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                            <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                <div class="flex w-full sm:w-80 items-center justify-center ">
                                    <img class=" rounded-xl" src={sveltekit} alt="">
                                </div>
                                <div class="sm:min-w-0 sm:flex-1">
                                    <p class="text-lg font-semibold leading-8 text-gray-900 dark:text-white">SvelteKit</p>
                                    <p class="mt-2 text-base leading-7 text-gray-600">svelte에도 관심이 있었는데 sveltekit가 나와서 관심있게 보고 있습니다.</p>

                                </div>
                            </div>

                            <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                <div class="flex w-full sm:w-80 items-center justify-center ">
                                    <img class=" rounded-xl" src={webRtc} alt="">
                                </div>
                                <div class="sm:min-w-0 sm:flex-1">
                                    <p class="text-lg font-semibold leading-8 text-gray-900 dark:text-white">WebRTC</p>
                                    <p class="mt-2 text-base leading-7 text-gray-600">PeerConnection을 활용한 멀티플레이 게임 구현에 관심이 있습니다.</p>

                                </div>
                            </div>

                            <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                <div class="flex w-full sm:w-80 items-center justify-center ">
                                    <img class=" rounded-xl" src={js13k} alt="">
                                </div>
                                <div class="sm:min-w-0 sm:flex-1">
                                    <p class="text-lg font-semibold leading-8 text-gray-900 dark:text-white">js13kGames</p>
                                    <p class="mt-2 text-base leading-7 text-gray-600">평소 인디게임에 관심이 많아서 종종 찾아가서 훌륭한 게임들 찾아봅니다.</p>
                                </div>
                            </div>




                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
</section>
