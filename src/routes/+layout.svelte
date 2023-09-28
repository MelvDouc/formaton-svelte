<div class="container">
  <slot />
</div>

<style lang="scss">
  :global(*, ::before, ::after) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 12px;

    @media only screen and (width > 240px) {
      font-size: 14px;
    }

    @media only screen and (width > 600px) {
      font-size: initial;
    }
  }

  :global(body) {
    min-height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial,
      sans-serif;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    flex: 1;
  }
</style>
