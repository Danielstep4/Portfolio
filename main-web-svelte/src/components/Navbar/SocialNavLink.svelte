<script lang="ts">
  import Fa from "svelte-fa";
  import type { IconDefinition } from "@fortawesome/fontawesome-common-types";

  export let link: string;
  export let iconComp: IconDefinition;
</script>

<div class="mr-2.5">
  <a href={link} target="_blank">
    <Fa icon={iconComp} size="1.5x" />
  </a>
</div>
