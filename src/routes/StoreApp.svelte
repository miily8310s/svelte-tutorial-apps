<script lang="ts">
  import { count } from '../store';

  let count_value;

  const countChangeEvent = count.subscribe((value) => {
    count_value = value;
  });
</script>
