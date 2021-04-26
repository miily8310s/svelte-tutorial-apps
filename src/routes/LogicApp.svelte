<script lang="ts">
  let isLoggedIn: boolean = false;
  function handleClick() {
    isLoggedIn = !isLoggedIn;
  }
  let memes = [
    { id: 'dQw4w9WgXcQ', name: 'Never Gonna Give You Up' },
    { id: 'j9V78UbdzWI', name: 'Coffin Dance' },
    { id: 'ZZ5LpwO-An4&t=53s', name: 'HEYYEYAAEYAAAEYAEYAA' },
    { id: 'QH2-TGUlwu4', name: 'Nyan Cat' },
    { id: 'XfR9iY5y94s', name: 'Down Under' },
  ];

  async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/');
    const text = await res.json();

    if (res.ok) {
      return text;
    } else {
      throw new Error(text);
    }
  }

  let promise = getUsers();

  function usersClick() {
    promise = getUsers();
  }
</script>

<div class="items-center text-center">
  {#if isLoggedIn}
    <button class="bg-gray-100 inline-block p-2" on:click={handleClick}
      >Log out</button
    >
  {:else}
    <button class="bg-gray-100 inline-block p-2" on:click={handleClick}
      >Log in</button
    >
  {/if}
  <div class="mt-6">
    <h1 class="mb-3">Famous Meme Videos of YouTube</h1>
    <ul>
      {#each memes as { id, name }, i}
        <li>
          <a target="_blank" href="https://www.youtube.com/watch?v={id}">
            {i + 1}: {name}</a
          >
        </li>
      {/each}
    </ul>
  </div>
  <div class="mt-6">
    <button class="mb-3" on:click={usersClick}
      >GET Users from JSON Placeholder</button
    >
    {#await promise}
      <p>...waiting</p>
    {:then users}
      <ul>
        {#each users as user}
          <li>{user.id} {user.name}</li>
        {/each}
      </ul>
      <!-- <p>The number is {number.id}</p> -->
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}
  </div>
</div>
