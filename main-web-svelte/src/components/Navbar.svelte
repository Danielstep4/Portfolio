<script lang="ts">
  import type { Writable } from "svelte/store";
  import { faAt } from "@fortawesome/free-solid-svg-icons/";
  import {
    faFacebook,
    faLinkedinIn,
    faGithub,
    faInstagram,
  } from "@fortawesome/free-brands-svg-icons";
  import { theme } from "../styles/theme";
  import NavLink from "./NavLink.svelte";
  import SocialNavLink from "./SocialNavLink.svelte";

  export let navigationStore: Writable<NavigationStore>;

  let currentPage: SitePages;

  navigationStore.subscribe((val) => (currentPage = val.currentPage));
  const changeNavigation = (page: SitePages) => {
    navigationStore.set({
      currentPage: page,
    });
  };
  const pagesArray: SitePages[] = ["Home", "Projects", "About"];
  const socialLinksArray: SocialLinks[] = [
    {
      iconComp: faAt,
      link: "mailto:danielstepanishin@gmail.com",
    },
    {
      iconComp: faLinkedinIn,
      link: "https://www.linkedin.com/in/daniel-stepanishin",
    },
    { iconComp: faGithub, link: "https://www.github.com/danielstep4" },
    {
      iconComp: faInstagram,
      link: "https://www.instagram.com/stepanishin_",
    },
    {
      iconComp: faFacebook,
      link: "https://www.facebook.com/daniel.stepanishin",
    },
  ];
</script>

<header
  class="px-2"
  style="border-bottom: 1px solid {theme.palette.elements.gray};"
>
  <nav class="flex items-center justify-between">
    <span
      on:click={() => changeNavigation("Home")}
      class="cursor-pointer select-none text-2xl font-title"
      >Daniel Stepanishin</span
    >
    <div class="flex">
      {#each pagesArray as page}
        <NavLink
          isActive={currentPage === page}
          name={page}
          {changeNavigation}
        />
      {/each}
    </div>
    <div class="flex">
      {#each socialLinksArray as socialLink}
        <SocialNavLink {...socialLink} />
      {/each}
    </div>
  </nav>
</header>
