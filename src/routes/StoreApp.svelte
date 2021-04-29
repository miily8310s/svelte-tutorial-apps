<script lang="ts">
  import { count } from '../store';
  import StoreButton from '../components/StoreButton.svelte';

  let count_value;

  const countChangeEvent = count.subscribe((value) => {
    count_value = value;
  });
</script>

<div class="flex gap-2">
  <h1 class="bg-gray-100 py-1 px-2">{count_value}</h1>
  <StoreButton />
</div>
