<script lang="ts">
  import Fa from "svelte-fa";
  import type { IconDefinition } from "@fortawesome/fontawesome-common-types";

  export let link: string;
  export let iconComp: IconDefinition;
</script>

<div class="mr-1">
  <a href={link} target="_blank">
    <Fa icon={iconComp} />
  </a>
</div>
