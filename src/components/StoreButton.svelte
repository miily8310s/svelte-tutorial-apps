<script lang="ts">
  import { count } from '../store';

  function increment() {
    count.update((n) => n + 1);
  }
  function decrement() {
    count.update((n) => n - 1);
  }
  function reset() {
    count.set(0);
  }
</script>

<button on:click={increment} class="bg-gray-100 py-1 px-2"> + </button>
<button on:click={decrement} class="bg-gray-100 py-1 px-2"> - </button>
<button on:click={reset} class="bg-gray-100 py-1 px-2"> reset </button>
