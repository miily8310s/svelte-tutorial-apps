<script lang="ts">
  import { tweened, spring } from 'svelte/motion';
  import { cubicInOut } from 'svelte/easing';

  const progress = tweened(0, {
    duration: 500,
    easing: cubicInOut,
  });

  let ball = spring(
    { x: 50, y: 50 },
    {
      stiffness: 0.1,
      damping: 0.1,
    },
  );

  let size = spring(10);
</script>

<progress value={$progress} class="block w-full" />

<button on:click={() => progress.set(0)}>0</button>
<button on:click={() => progress.update((n) => n + 0.25)}>+25%</button>
<button on:click={() => progress.update((n) => n + 0.5)}>+50%</button>
<button on:click={() => progress.update((n) => n + 0.75)}>+75%</button>
<button on:click={() => progress.set(1)}>100</button>

<svg
  on:mousemove={(e) => ball.set({ x: e.clientX, y: e.clientY })}
  on:mousedown={() => size.set(30)}
  on:mouseup={() => size.set(10)}
>
  <circle cx={$ball.x} cy={$ball.y} r={$size} />
</svg>

<style>
  svg {
    width: 100%;
    height: 300px;
  }
  circle {
    fill: #ff3e00;
  }
</style>
