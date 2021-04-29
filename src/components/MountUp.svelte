<script lang="ts">
  import { onMount } from 'svelte';

  let photos = [];
  onMount(async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_limit=20`,
    );
    photos = await res.json();
  });
</script>

<h1 class="text-center mb-3">Photos</h1>
<div class="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
  {#each photos as photo}
    <img src={photo.thumbnailUrl} alt={photo.title} class="mb-3" />
  {:else}
    <h1>Loading...</h1>
  {/each}
</div>
