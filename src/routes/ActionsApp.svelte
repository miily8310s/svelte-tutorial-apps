<script lang="ts">
  import { longpress } from '../store/longpress';
  let pressed = false;
  let duration = 1000;
</script>

<label>
  <input type="range" bind:value={duration} max={2000} step={100} />
  {duration}ms
</label>

<button
  use:longpress={duration}
  on:longpress={() => (pressed = true)}
  on:mouseenter={() => (pressed = false)}
>
  press
</button>

{#if pressed}
  <p>Conguratulations!!!</p>
{/if}
