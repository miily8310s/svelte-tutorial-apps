<script lang="ts">
  import { tweened } from 'svelte/motion';
  import { cubicInOut } from 'svelte/easing';

  const progress = tweened(0, {
    duration: 500,
    easing: cubicInOut,
  });
</script>

<progress value={$progress} class="block w-full" />

<button on:click={() => progress.set(0)}>0</button>
<button on:click={() => progress.update((n) => n + 0.25)}>+25%</button>
<button on:click={() => progress.update((n) => n + 0.5)}>+50%</button>
<button on:click={() => progress.update((n) => n + 0.75)}>+75%</button>
<button on:click={() => progress.set(1)}>100</button>
