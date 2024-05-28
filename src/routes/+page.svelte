<script lang="ts">
  export let date;
  $: movies = date?.movies ?? [];

</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<h1>Movie Log</h1>

<form method="post">
  <label>
    <span>name</span>
    <input type="text" name="name" />
  </label><br>
  <label>
    <span>release</span>
    <input type="text" name="release" />
  </label><br>
  <label for="rating">Rating</label>
    <select name="rating" id="rating">
      <option value="">Select a rating</option>
      <option value="1">1 Stars</option>
      <option value="2">2 Stars</option>
      <option value="3">3 Stars</option>
      <option value="4">4 Stars</option>
      <option value="5">5 Stars</option>
    </select><br>
  <label for="comment">Comment</label><br>
  <textarea name="comment" id="comment" placeholder="What you want"></textarea><br>
  <button>Log The Movie</button>
</form>

<table>
  <thead>
    <tr>
      <th class="name">name</th>
      <th class="release">release</th>
      <th class="rating">rating</th>
      <th class="comment">comment</th>
      <th class="action" />
    </tr>
  </thead>
  <tbody>
    {#each movies as movie}
    <tr>
      <td class="name">{movie.name}</td>
      <td class="name">{movie.release}</td>
      <td class="name">{movie.rating}</td>
      <td class="name">{movie.comment}</td>
      <td class="action">
        <button type="button" name="movieToDelete">Delete</button>
      </td>
    </tr>
    {/each}
  </tbody>
</table>