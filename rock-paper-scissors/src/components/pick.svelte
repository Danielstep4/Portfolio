<script>
  import PaperBadge from "./Badges/PaperBadge.svelte";
  import RockBadge from "./Badges/RockBadge.svelte";
  import ScissorsBadge from "./Badges/ScissorsBadge.svelte";
  import BgTriangle from "./svg/bg-triangle.svelte";
  export let pickOne;
</script>

<div class="absolute left-0 right-0 mx-auto w-min my-16">
  <BgTriangle />
  <ScissorsBadge {pickOne} />
  <RockBadge {pickOne} />
  <PaperBadge {pickOne} />
</div>
