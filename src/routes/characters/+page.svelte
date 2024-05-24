
<script lang="ts">
  export let data;
  $: characters = data?.characters;
</script>

<svelte:head>
  <title>Characters</title>
</svelte:head>

<h1>Welcome to Characters Page </h1>


<ul class="css">
  {#each characters as {name, id , image, occupation}}
  <li>
    <a href={`/characters/${id}`} class="picture">
      <img src={image} alt={name} />
    </a>

    <div>
      <a href={`characters/${id}`}><b>{name}</b></a>
      <p>
        {occupation ? occupation : 'Unkonwn'}
      </p>
    </div>
  </li>
  {/each}
</ul>



<style>
  h1{
    color: red;
  }

  a{
    color: green;
    text-decoration: none;
  }

  .picture {
    display: flex;
    height: 100px;
    width: 100px;
  }

  .picture > img {
    height: 100px;
    width: 100px;
    object-fit: contain;
  }

  
</style>