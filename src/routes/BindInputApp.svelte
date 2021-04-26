<script lang="ts">
  let str = 'Svelte';
  let a = 1;
  let b = 2;
  let checked = false;
</script>

<h1 class="font-semibold">Text Inputs</h1>
<div class="border-red-900 border-2 p-2 mt-2">
  <input type="text" bind:value={str} placeholder="enter string" />
  <p>Hello {str === '' ? 'Svelte' : str}</p>
</div>

<h1 class="font-semibold">Numeric Inputs</h1>
<div class="border-red-900 border-2 p-2 mt-2">
  <input type="range" bind:value={a} min="0" max="10" />
  <input type="range" bind:value={b} min="0" max="10" />
  <p>{a} * {b} = {a * b}</p>
</div>

<h1 class="font-semibold">Checkbox Inputs</h1>
<div class="border-red-900 border-2 p-2 mt-2">
  <input type="checkbox" bind:checked />
  {#if checked}
    <p>Checked!!!</p>
  {:else}
    <p>No Check...</p>
  {/if}
</div>
