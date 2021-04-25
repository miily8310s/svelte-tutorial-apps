<script lang="ts">
  export let name: string;
  export let age: number;
  export let country: string;
  export let skill: string;
  export let website: string;

  export let str: string;
  export let defaultNumber: number = 111;
</script>

<div class="text-center items-center">
  <h1>{name}</h1>
  <h1>{age}</h1>
  <h1>{country}</h1>
  <h1>{skill}</h1>
  <h1>{website}</h1>

  <h1>{str}</h1>
  <h1>{defaultNumber}</h1>
</div>
