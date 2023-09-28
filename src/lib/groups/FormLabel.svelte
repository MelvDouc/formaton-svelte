<script lang="ts">
  export let htmlFor: string;
  export let required = false;
</script>

<label for={htmlFor} class:required>
  <slot />
</label>

<style lang="scss">
  label {
    text-transform: var(--svf-label-text-transform);
    width: fit-content;
  }

  .required {
    position: relative;

    &::after {
      content: "*";
      position: absolute;
      right: -0.5rem;
      color: var(--svf-label-asterisk-clr);
    }
  }
</style>
