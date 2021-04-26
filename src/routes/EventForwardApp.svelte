<script lang="ts">
  import EventDispatcher from '../components/EventDispatcher.svelte';
  function handleMessage(event) {
    alert(event.detail.text);
  }
</script>

<EventDispatcher on:message={handleMessage} />
