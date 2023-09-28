<script lang="ts">
  import FormCol from "$lib/FormCol.svelte";
  import FormGroup from "$lib/groups/FormGroup.svelte";
  import FormSubmit from "$lib/groups/FormSubmit.svelte";

  export let handleSubmit: OptionalEventHandler = null;

  const F = {
    Col: FormCol,
    Group: FormGroup,
    Submit: FormSubmit,
  };
</script>

<form on:submit={handleSubmit}>
  <slot {F} />
</form>

<style lang="scss">
  form {
    width: var(--svf-width);
    padding: var(--svf-padding);
    gap: calc(var(--svf-gap) * 3);
    border-radius: var(--svf-border-radius);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    font-family: var(--svf-font-family);
    color: var(--svf-text-clr);
    background: var(--svf-bg);
  }
</style>
