<script lang="ts">
  import { count } from '../store';
  import StoreButton from '../components/StoreButton.svelte';

  // only use subscribe methods
  // let count_value;
  //
  // const countChangeEvent = count.subscribe((value) => {
  // count_value = value;
  // });
</script>

<h1 class="mb-3">Writable App</h1>
<div class="flex gap-2">
  <!-- only use subscribe methods -->
  <!-- <h1 class="bg-gray-100 py-1 px-2">{count_value}</h1> -->
  <h1 class="bg-gray-100 py-1 px-2">{$count}</h1>
  <StoreButton />
</div>
