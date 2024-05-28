<script lang="ts">
  let subjects = "Trainees";
  import hero from '$lib/images/hero.jpg'
  import small from '$lib/images/hero-small.jpg'
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<h1>About Section</h1>

<img src="{hero}" alt="My Hero Avatar" height="100" width="100" />
<img src="{small}" alt="My Hero Avatar" height="100" width="100" />

<div class="hero" />

<style>
  h1 {
    color: rebeccapurple;
    flex: 0 1 0;
  }

  .hero{
    height:100px;
    width: 100px;
    background-image:url('/src/lib/images/hero-small.jpg');
    background-repeat: no-repeat;
    background-size: 100px;
  }
</style>
