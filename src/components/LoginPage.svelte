<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  let email = ''
  let password = ''
  let emailError = ''
  let passwordError = ''

  function handleSubmit() {
    emailError = ''
    passwordError = ''

    if (!email) {
      emailError = 'メールアドレスを入力してください。'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError = '有効なメールアドレスを入力してください。'
    }

    if (!password) {
      passwordError = 'パスワードを入力してください。'
    } else if (!/(?=.*\d)(?=.*[A-Z])(?=.*\W).{8,}/.test(password)) {
      passwordError =
        'パスワードは 8 文字以上で、</br> 少なくとも 1 つの大文字と 1 つの記号を含む必要があります。'
    }

    if (emailError || passwordError) {
      return
    }

    dispatch('login', { email, password })
  }
</script>

<style>
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    text-align: left;
  }

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input {
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 0.25rem;
    border: 1px solid #ccc;
    font-size: 1rem;
    width: 20rem;
  }

  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    background-color: $background-primary;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
  }

  button:hover {
    background-color: rgb(110, 234, 33);
  }

  .error {
    color: #f00;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }
</style>

<div>
  <!-- <h1>Login Page</h1> -->
  <form on:submit|preventDefault={handleSubmit}>
    <div>
      <label for="email">メールアドレス：</label>
      <input type="email" id="email" bind:value={email} />
      {#if emailError}
        <p class="error">{emailError}</p>
      {/if}
    </div>
    <div>
      <label for="password">パスワード：</label>
      <input type="password" id="password" bind:value={password} />
      {#if passwordError}
        <p class="error">
          {@html passwordError}
        </p>
      {/if}
    </div>
    <button type="submit">ログイン</button>
  </form>
</div>
