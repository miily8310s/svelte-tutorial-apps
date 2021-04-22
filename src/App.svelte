<script lang="ts">
  export let name: string;

  import Router from 'svelte-spa-router';
  import routes from './routes';
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
  <p class=""><a href="#/simple">Simple App</a></p>
  <p><a href="/">Top</a></p>
</main>

<Router {routes} />

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
