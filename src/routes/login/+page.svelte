<script lang="ts">
  export let form;
</script>

<h1>Login</h1>

<form method="post">
  <label for="username">Username</label>
  <input type="text" id="username" name="username" value={form?.username?.value ?? ''}  />
  <div class="error">{form?.username?.error ?? ''}</div>

  

  <label for="password">Password</label>
  <input type="password" id="password" name="password" value={form?.password?.value ?? ''}  />
  <div class="error">{form?.password?.error ?? ''}</div>

  <button type="submit">Login</button>

</form>

<style>
  form{
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: auto;
  }
  label{
    margin-top: 1rem;
  }

  input{
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
  }
  button{
    margin-top: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
  }
  button:active{
    background-color: #eee;
  }

  .error{
    color: red;
    min-height: 1em;
  }
</style>