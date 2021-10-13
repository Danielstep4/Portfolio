<script lang="ts">
  import { theme } from "../styles/theme";
  export let isActive: boolean;
  export let name: SitePages;
  export let changeNavigation: (page: SitePages) => void;
</script>

<div
  class="cursor-pointer p-4"
  style="{isActive
    ? `border-bottom: 2px solid ${theme.palette.elements.red}`
    : 'none'};"
  on:click={() => changeNavigation(name)}
>
  <span>{name}</span>
</div>
