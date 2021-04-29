<script lang="ts">
  import { count, time, timeProgress } from '../store';
  import StoreButton from '../components/StoreButton.svelte';

  // only use subscribe methods
  // let count_value;
  //
  // const countChangeEvent = count.subscribe((value) => {
  // count_value = value;
  // });

  const formatter = new Intl.DateTimeFormat('en', {
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
  });
</script>

<div class="py-2 px-3 border-2 border-red-900 mb-3">
  <h1 class="mb-3">Writable App</h1>
  <div class="flex gap-2">
    <!-- only use subscribe methods -->
    <!-- <h1 class="bg-gray-100 py-1 px-2">{count_value}</h1> -->
    <h1 class="bg-gray-100 py-1 px-2">{$count}</h1>
    <StoreButton />
  </div>
</div>
<div class="py-2 px-3 border-2 border-red-900 mb-3">
  <h1 class="mb-3">Readable App</h1>
  <div class="flex gap-2 flex-col">
    <h1 class="bg-gray-100 py-1 px-2">Now Time is {formatter.format($time)}</h1>
    <p>Open for {$timeProgress} {$timeProgress > 1 ? 'seconds' : 'second'}</p>
  </div>
</div>
