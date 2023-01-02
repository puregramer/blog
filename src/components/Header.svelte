<script>
import logo from '$lib/images/svelte-logo.svg';
import profileImg from '$lib/images/js-logo.png';
let isNavOpen = false;
let isProfile = false;

export let isDarkMode;

function clickHandler() {``
    if (isProfile) isProfile = false;
}
</script>

<svelte:window on:click|preventDefault={clickHandler} />
<nav class="bg-white shadow dark:bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <!-- Mobile menu button-->
                <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"
                    on:click={() => {
                        isNavOpen = !isNavOpen;
                    }}
                >
                    <span class="sr-only">Open main menu</span>
                    <!--
                      Icon when menu is closed.

                      Heroicon name: outline/bars-3

                      Menu open: "hidden", Menu closed: "block"
                    -->
                    <svg class:block={!isNavOpen} class:hidden={isNavOpen} class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <!--
                      Icon when menu is open.

                      Heroicon name: outline/x-mark

                      Menu open: "block", Menu closed: "hidden"
                    -->
                    <svg class:block={isNavOpen} class:hidden={!isNavOpen} class=" h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <a href="/" class="flex flex-shrink-0 items-center">
                    <img class="block h-8 w-auto lg:hidden" src={logo} alt="logo">
                    <img class="hidden h-8 w-auto lg:block" src={logo} alt="logo">
                </a>
                <div class="hidden sm:ml-6 sm:block">
                    <div class="flex space-x-4">
                        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                        <a href="/introduce/" class="dark:bg-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">간단 소개</a>

                        <a href="#" class="dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white text-gray-400 px-3 py-2 rounded-md text-sm font-medium">프로젝트</a>

                        <a href="#" class="dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white text-gray-400 px-3 py-2 rounded-md text-sm font-medium">관심사</a>
                    </div>
                </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button type="button" role="switch" aria-label="Toggle Dark Mode" aria-checked={isDarkMode}
                    class="rounded-full dark:bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    on:click={() => {
                        isDarkMode = !isDarkMode;
                        localStorage.setItem('isDarkMode', isDarkMode.toString());

                        if (isDarkMode) {
                            document.querySelector('html').classList.add('dark')
                        } else {
                            document.querySelector('html').classList.remove('dark')
                        }
                    }}
                >
                    <span class="sr-only">dark mode</span>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 block text-zinc-400 dark:hidden">
                        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 hidden text-zinc-500 dark:block">
                        <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
                    </svg>

                </button>

                <!-- Profile dropdown -->
                <div class="relative ml-3">
                    <div>
                        <button type="button" class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true"
                            on:click|stopPropagation={() => {
                                isProfile = !isProfile;
                            }}
                        >
                            <span class="sr-only">Open user menu</span>
                            <img class="h-8 w-8 rounded-full" src={profileImg} alt="profile image">
                        </button>
                    </div>

                    <!--
                      Dropdown menu, show/hide based on menu state.

                      Entering: "transition ease-out duration-100"
                        From: "transform opacity-0 scale-95"
                        To: "transform opacity-100 scale-100"
                      Leaving: "transition ease-in duration-75"
                        From: "transform opacity-100 scale-100"
                        To: "transform opacity-0 scale-95"
                    -->
                    <div class:visible={isProfile} class:invisible={!isProfile}
                      class:animate-[EnterPopup_0.1s_ease-out]={isProfile} class:animate-[LeavePopup_0.1s_ease-in]={!isProfile}
                      class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                        <!-- Active: "bg-gray-100", Not Active: "" -->
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">github</a>
<!--                        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>-->
<!--                        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>-->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div id="mobile-menu" class:block={isNavOpen} class:hidden={!isNavOpen}>
        <div class="space-y-1 px-2 pt-2 pb-3">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <a href="/introduce/" class="dark:bg-gray-900 dark:text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">간단 소개</a>

            <a href="#" class="dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white text-gray-400 block px-3 py-2 rounded-md text-base font-medium">프로젝트</a>

            <a href="#" class="dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white text-gray-400 block px-3 py-2 rounded-md text-base font-medium">관심사</a>


        </div>
    </div>
</nav>
