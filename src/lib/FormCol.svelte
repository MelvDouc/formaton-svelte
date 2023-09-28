<script lang="ts">
  export let width = 12;
</script>

<article class="form-col col-{width}">
  <slot />
</article>

<style lang="scss">
  .form-col {
    // Prevent overflow on small form
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    gap: var(--svf-gap-rows);

    @for $i from 1 through 12 {
      &.col-#{$i} {
        flex: $i 0 0%;
      }
    }
  }
</style>
