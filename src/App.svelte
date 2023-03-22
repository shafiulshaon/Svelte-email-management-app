<script lang="ts">
  import LoginPage from 'components/LoginPage.svelte'
  import DashBoard from 'components/DashBoard.svelte'
  import SampleData from './sample-data'

  export let appName: string
  const emails = SampleData
  let isLoggedIn = false
  let userEmail = ''

  function handleLogin(event) {
    userEmail = event.detail.email
    isLoggedIn = true
  }
</script>

<style lang="scss">
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: $color-primary;
    font-size: 4em;
    font-weight: 100;
    background-color: $background-primary;
  }
</style>

<main>

  {#if isLoggedIn}
    <DashBoard {emails} />
  {:else}
    <LoginPage on:login={handleLogin} />
  {/if}
</main>
