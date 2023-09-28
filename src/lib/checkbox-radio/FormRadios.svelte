<script lang="ts">
  import FormRadio from "$lib/checkbox-radio/FormRadio.svelte";
  import FormGroupContainer from "$lib/containers/FormGroupContainer.svelte";
  import FormLabel from "$lib/groups/FormLabel.svelte";

  export let required = false;

  const Radio = FormRadio;
</script>

<FormGroupContainer>
  <FormLabel htmlFor="_" {required}>
    <slot name="label" />
  </FormLabel>
  <div class="radios">
    <slot {Radio} />
  </div>
</FormGroupContainer>

<style lang="scss">
  .radios {
    display: flex;
    flex-flow: column nowrap;
    gap: var(--svf-gap);
  }
</style>
