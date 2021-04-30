import { writable } from 'svelte/store';
import { readable, derived } from 'svelte/store';

// writable method
export const count = writable(0);

// readble/derived method
export const time = readable(new Date(), function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };
});

const start = new Date();

export const timeProgress = derived(time, ($time) =>
  Math.round(($time - start) / 1000),
);

// custom store
function createNumber() {
  const { subscribe, set, update } = writable(2);
  return {
    subscribe,
    doubled: () => update((n) => n * 2),
    taxed: () => update((n) => n * 1.1),
    initialized: () => set(2),
  };
}

export const num = createNumber();
