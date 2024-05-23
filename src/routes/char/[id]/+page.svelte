
<script lang="ts">
  export let data;

  $:character = data?.character;
</script>

<svelte:head>
  <title>{character.name}</title>
</svelte:head>

<h1>{character.name}</h1>
<a href="/">Home</a>
<a href="/about">About</a>
<a href="/char">Char</a>


<style>
  h1{
    color: red;
  }

  a{
    color: green;
  }
</style>