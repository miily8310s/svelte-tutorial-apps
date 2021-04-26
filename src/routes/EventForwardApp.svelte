<script lang="ts">
  import EventDispatcher from '../components/EventDispatcher.svelte';
  import DomEvent from '../components/DomEvent.svelte';
  function handleMessage(event) {
    alert(event.detail.text);
  }
  function handleDomClick() {
    alert('Hello Svelte!');
  }
</script>

<EventDispatcher on:message={handleMessage} />
<DomEvent on:click={handleDomClick} />
