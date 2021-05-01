<script lang="ts">
  import { fade, fly, slide } from 'svelte/transition';
  let visible = true;
  let status = 'idling';
  let isShowList = true;
  let i = 1;
  let items = ['fly', 'slide', 'fade', 'hoge', 'fuga'];
</script>

<p>Status:{status}</p>
<label
  >transition visible <input type="checkbox" bind:checked={visible} /></label
>

{#if visible}
  <p transition:fade>hoge hoge hoge</p>
  <p
    transition:fly={{ y: 50, duration: 1500 }}
    on:introstart={() => (status = 'intro started')}
    on:introend={() => (status = 'intro end')}
  >
    fly fly fly
  </p>
{/if}

<label class="mt-20"
  >slide visible <input type="checkbox" bind:checked={isShowList} /><br /><input
    type="range"
    bind:value={i}
    max="5"
  /></label
>
{#if isShowList}
  {#each items.slice(0, i) as item}
    <div transition:slide>
      {item}
    </div>
  {/each}
{/if}
