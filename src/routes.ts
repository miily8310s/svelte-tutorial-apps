import SimpleApp from './routes/SimpleApp.svelte';
import Home from './routes/Home.svelte';

export default {
  '/': Home,
  '/simple': SimpleApp,
};
