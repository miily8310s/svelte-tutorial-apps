<script lang="ts">
  import { fade } from 'svelte/transition';
  let visible = true;
</script>

<input type="checkbox" bind:checked={visible} />

{#if visible}
  <p transition:fade>hoge hoge hoge</p>
{/if}
