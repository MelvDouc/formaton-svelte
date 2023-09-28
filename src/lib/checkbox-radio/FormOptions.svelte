<script lang="ts">
  import FormCheckbox from "$lib/checkbox-radio/FormCheckbox.svelte";
  import FormRadio from "$lib/checkbox-radio/FormRadio.svelte";
  import FormGroupContainer from "$lib/containers/FormGroupContainer.svelte";
  import FormLabel from "$lib/groups/FormLabel.svelte";

  export let required = false;

  const Checkbox = FormCheckbox;
  const Radio = FormRadio;
</script>

<FormGroupContainer>
  <FormLabel htmlFor="_" {required}>
    <slot name="label" />
  </FormLabel>
  <div class="optionList">
    <slot {Checkbox} {Radio} />
  </div>
</FormGroupContainer>

<style lang="scss">
  .optionList {
    display: flex;
    flex-flow: column nowrap;
    gap: var(--svf-gap);
  }
</style>
