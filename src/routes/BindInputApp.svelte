<script lang="ts">
  let str = 'Svelte';
  let a = 1;
  let b = 2;
  let checked = false;

  let selectedNumber = 1;
  let selectedMenu = ['pizza'];
  let menu = ['pizza', 'pasta', 'macaroni'];
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

<h1 class="font-semibold">Group Inputs</h1>
<div class="border-red-900 border-2 p-2 mt-2">
  <label>
    <input type="radio" bind:group={selectedNumber} value={1} />
    One scoop
  </label>

  <label>
    <input type="radio" bind:group={selectedNumber} value={2} />
    Two scoops
  </label>

  <label>
    <input type="radio" bind:group={selectedNumber} value={3} />
    Three scoops
  </label>
  {#each menu as flavour}
    <label>
      <input type="checkbox" bind:group={selectedMenu} value={flavour} />
      {flavour}
    </label>
  {/each}
  {#if selectedMenu.length === 0}
    <p>No selected one menu...</p>
  {:else if selectedMenu.length > selectedNumber}
    <p>Can't select more menu</p>
  {:else}
    <p>You ordered {selectedMenu}</p>
  {/if}
</div>
