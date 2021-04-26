<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('message', {
      text: 'Hi Svelte!',
    });
  }
</script>

<button class="bg-gray-100 inline-block" on:click={handleClick}>Click!!!</button
>
