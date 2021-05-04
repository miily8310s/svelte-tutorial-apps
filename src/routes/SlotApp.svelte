<script lang="ts">
  import BoxSlot from '../components/BoxSlot.svelte';
  import CardSlot from '../components/CardSlot.svelte';
</script>

<BoxSlot>
  <h1>slot game!</h1>
  <h2 class="text-red-600 font-semibold">777!</h2>
</BoxSlot>

<p class="mt-2" />

<BoxSlot />

<p class="mt-2" />

<CardSlot>
  <h2 slot="name" class="font-semibold">John Doe</h2>
  <h2 slot="email">hoge-fuga@gmail.com</h2>
</CardSlot>
