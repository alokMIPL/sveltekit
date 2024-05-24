<script lang="ts">
  export let name = '';
  export let image = '';
  export let gender = '';
  export let hairColor = '';
  export let occupation = '';
  export let firstEpisode = '';
  export let voicedBy = '';
</script>

<article>
  <header><i>Bob's Burgers </i>character</header>
  <figure class="image">
    <img alt="name" src="{image}" loading="lazy" width="100px">
  </figure>

  <section>
    <h1>{name}</h1>
    <dl>
      <dt>Gender</dt>
      <dd>{gender ?? ''}</dd>
      <dt>Hair</dt>
      <dd>{hairColor ?? ''}</dd>
      <dt>Occupation</dt>
      <dd>{occupation ?? ''}</dd>
    </dl>
  </section>

  <section>
    <h3>Behind the scenes</h3>
    <dl>
      <dt>First Episode</dt>
      <dd>{firstEpisode ?? ''}</dd>
      <dt>Voiced By</dt>
      <dd>{voicedBy ?? ''}</dd>
    </dl>
  </section>

</article>

<style>
  article {
    width: 800px;
    max-width: 80%;
    border: 2px solid rebeccapurple;
    border-radius: 0.7rem;
    box-shadow: 4px 4px 5px #555;
    margin: 3rem auto;
    padding: 2px;
  }
  section {
    padding-bottom: 2px;
  }
  
  header,
  h1,
  h3 {
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    color: white;
    background:rebeccapurple;
    padding:5px 0;
   


  }
  dl{
    display: grid;
    grid-template-columns:minmax(min-content, 40%) auto;
    margin: 0;
  }
  dt {
    grid-column-start: 1;
    padding: 0.5rem;
    text-align: center;
    font-weight: bold;
    margin: 0;
  }
  dd {
    grid-column-start: 2;
    padding: 0.5rem;
    margin: 0;
  }
</style>