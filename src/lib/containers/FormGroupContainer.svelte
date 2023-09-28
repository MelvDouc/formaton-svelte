<script lang="ts">
  export let fullHeight = false;
</script>

<div class="form-group-container" class:fullHeight>
  <slot />
</div>

<style lang="scss">
  .form-group-container {
    display: flex;
    flex-flow: column nowrap;
    gap: var(--svf-gap);
    width: 100%;
  }

  .fullHeight {
    height: 100%;
  }
</style>
