<script lang="ts">
  import { tick } from 'svelte';

  import MountUp from '../components/MountUp.svelte';

  let text = 'Lorem ipsum dolor sit amet.';

  async function handleKeydown(e: KeyboardEvent) {
    if (e.key !== 'Tab') return;
    e.preventDefault();

    const { selectionStart, selectionEnd, value } = this;

    const selection: string = value.slice(selectionStart, selectionEnd);

    const replacement: string = /[a-z]/.test(selection)
      ? selection.toUpperCase()
      : selection.toLowerCase();

    text =
      value.slice(0, selectionStart) + replacement + value.slice(selectionEnd);

    await tick();
    this.selectionStart = selectionStart;
    this.selectionEnd = selectionEnd;
  }
</script>

<MountUp />

<h1 class="font-semibold">tick</h1>
<textarea value={text} on:keydown={handleKeydown} />
