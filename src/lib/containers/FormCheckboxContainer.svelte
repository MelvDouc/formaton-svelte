<div class="form-checkbox-container">
  <slot />
</div>

<style lang="scss">
  .form-checkbox-container {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-end;
    gap: calc(var(--svf-gap) * 2);
  }
</style>
