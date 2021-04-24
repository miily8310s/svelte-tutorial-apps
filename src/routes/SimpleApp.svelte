<script lang="ts">
  let price: number = 0;
  let alert: string = '';
  $: taxed = price * 1.1;
  function resetClick() {
    price = 0;
    alert = '';
  }
  $: if (price >= 1000000) {
    price = 90000;
    alert = 'price is high!';
  }
</script>

<div class="flex flex-col text-center items-center">
  <input type="number" class="bg-gray-100 p-2 mb-2" bind:value={price} />
  <div class="my-2 p-4 border-solid border-2 border-indigo-500 bg-gray-100">
    <h1>taxed price = {taxed}</h1>
    <p class="text-red-600">{alert}</p>
  </div>
  <button
    on:click={resetClick}
    class="bg-gray-100 hover:bg-blue-400 hover:text-white py-2 px-6 mb-2"
    >Reset</button
  >
</div>
