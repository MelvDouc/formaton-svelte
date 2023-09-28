<section class="form-row">
  <slot />
</section>

<style>
  .form-row {
    display: flex;
    flex-flow: row wrap;
    gap: var(--svf-gap-rows);
    width: 100%;
  }
</style>
