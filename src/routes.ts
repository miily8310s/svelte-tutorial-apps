import SimpleApp from './routes/SimpleApp.svelte';
import Home from './routes/Home.svelte';
import PropsApp from './routes/PropsApp.svelte';

export default {
  '/': Home,
  '/simple': SimpleApp,
  '/props': PropsApp,
};
