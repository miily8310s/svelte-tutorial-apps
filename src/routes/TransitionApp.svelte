<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  let visible = true;
</script>

<input type="checkbox" bind:checked={visible} />

{#if visible}
  <p transition:fade>hoge hoge hoge</p>
  <p transition:fly={{ y: 50, duration: 1500 }}>fly fly fly</p>
{/if}
