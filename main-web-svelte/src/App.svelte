<script lang="ts">
  import { writable } from "svelte/store";
  import About from "./pages/About.svelte";
  import Home from "./pages/Home.svelte";
  import Navbar from "./components/Navbar/Navbar.svelte";
  import Projects from "./pages/Projects.svelte";
  import { theme } from "./styles/theme";
  import { onMount } from "svelte";

  const bgImage = "./assets/background.jpg";
  // Navigation Store - Handles Navbar indicator and what the app displays
  const navigationStore = writable<NavigationStore>({ currentPage: "Home" });
  let currentPage: SitePages;
  $: document.title = "Daniel Stepanishin - " + currentPage;
  navigationStore.subscribe((val) => {
    currentPage = val.currentPage;
  });
  onMount(() => {
    // Deleting main element that is ssr for SEO
    const ssr = document.querySelector("#ssr");
    ssr.innerHTML = "";
    ssr.remove();
    console.log(ssr);
  });
</script>

<!-- App Component will be used as a switch to display components -->
<main
  class="h-screen w-screen bg-cover font-body"
  style="background-image: url('{bgImage}'); color: {theme.palette.fonts
    .white} "
>
  <Navbar {navigationStore} />
  {#if currentPage === "Home"}
    <Home />
  {:else if currentPage === "Projects"}
    <Projects />
  {:else}
    <About />
  {/if}
</main>

<style global lang="postcss">
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
