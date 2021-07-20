<script lang="ts">
  export let score: number;
</script>

<div
  class="border-4 w-min h-min px-4 py-2 rounded-xl border-gray-100 border-opacity-50 mx-auto"
>
  <div class="flex justify-between text-2xl text-white font-bold">
    <div class="flex flex-col justify-center mr-80">
      <span style="color: hsl(349, 71%, 52%);">ROCK</span>
      <span style="color: hsl(230, 89%, 62%);">PAPER</span>
      <span style="color: hsl(39, 89%, 49%)">SCISSORS</span>
    </div>
    <div
      class="bg-white flex flex-col justify-center items-center p-6 rounded-xl"
    >
      <span class="text-blue-500 tracking-wider font-medium text-lg">SCORE</span
      >
      <span class="text-gray-500 text-4xl">{score}</span>
    </div>
  </div>
</div>
