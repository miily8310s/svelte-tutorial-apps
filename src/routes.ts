import SimpleApp from './routes/SimpleApp.svelte';
import Home from './routes/Home.svelte';
import PropsApp from './routes/PropsApp.svelte';
import LogicApp from './routes/LogicApp.svelte';
import EventForwardApp from './routes/EventForwardApp.svelte';
import BindInputApp from './routes/BindInputApp.svelte';
import LifeCycleApp from './routes/LifeCycleApp.svelte';
import StoreApp from './routes/StoreApp.svelte';
import MotionApp from './routes/MotionApp.svelte';

export default {
  '/': Home,
  '/simple': SimpleApp,
  '/props': PropsApp,
  '/logic': LogicApp,
  '/eventfor': EventForwardApp,
  '/input': BindInputApp,
  '/lifecycle': LifeCycleApp,
  '/store': StoreApp,
  '/motion': MotionApp,
};
