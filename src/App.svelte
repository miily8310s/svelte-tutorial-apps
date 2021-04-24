<script lang="ts">
  export let name: string;

  import Router from 'svelte-spa-router';
  import routes from './routes';
</script>

<main class="min-h-screen bg-gray-300 p-6 flex flex-col sm:py-12">
  <h1 class="text-center font-mono text-xl pb-2">Hello {name}!</h1>
  <Router {routes} />
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
