<script lang="ts">
  export let name: string;

  import Router from 'svelte-spa-router';
  import routes from './routes';
</script>

<main class="min-h-screen bg-gray-300 py-4 px-6 flex flex-col sm:py-10">
  <h1 class="text-center font-mono text-xl pb-2">
    <a href="/" class="text-green-400 hover:no-underline">Hello {name}!</a>
  </h1>
  <Router {routes} />
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
