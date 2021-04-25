<script lang="ts">
  import PassProps from '../components/PassProps.svelte';

  const profile = {
    name: 'miruo',
    age: 25,
    country: 'Japan',
    skill: 'Svelte',
    website: 'https://github.com/miily8310s',
  };
</script>

<PassProps {...profile} str={'hoge hoge hoge'} />
