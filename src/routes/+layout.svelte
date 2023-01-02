<script>
    import DungGeunMo from "$lib/font/DungGeunMo.woff2";
    import "../styles.css";
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
    import { browser } from '$app/environment'
    import { loadFonts } from "$lib/utils";
    import { onMount } from 'svelte';

    let isDarkMode = browser ? Boolean(document.documentElement.classList.contains('dark')) : true;

    onMount(async () => {
        await loadFonts('DungGeunMo', DungGeunMo);
    });

</script>

<Header isDarkMode={isDarkMode}/>

<main>
    <slot/>
</main>

<Footer/>

