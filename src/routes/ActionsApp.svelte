<script lang="ts">
  import { longpress } from '../store/longpress';
  let pressed = false;
  let duration = 1000;

  let current = 'hoge';
  let darked = true;
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

<div class="mt-6">
  <button
    class:selected={current === 'hoge'}
    class="p-2"
    on:click={() => (current = 'hoge')}
  >
    hogehoge
  </button>
  <button
    class:selected={current === 'fuge'}
    class="p-2"
    on:click={() => (current = 'fuge')}
  >
    fuge
  </button>
  <button
    class:selected={current === 'moge'}
    class="p-2"
    on:click={() => (current = 'moge')}
  >
    moge
  </button>
  <p class:darked class="inline-block w-1/5 p-2 text-center">test test test</p>
</div>

<style>
  .selected {
    color: #fff;
    background-color: aqua;
  }
  .darked {
    color: #fff;
    background-color: darkgreen;
  }
</style>
