<script lang="ts">
  import FormCheckbox from "$lib/checkbox-radio/FormCheckbox.svelte";
  import FormGroupContainer from "$lib/containers/FormGroupContainer.svelte";
  import FormLabel from "$lib/groups/FormLabel.svelte";

  const Checkbox = FormCheckbox;
</script>

<FormGroupContainer>
  <FormLabel htmlFor="_">
    <slot name="label" />
  </FormLabel>
  <div class="checkboxes">
    <slot {Checkbox} />
  </div>
</FormGroupContainer>

<style lang="scss">
  .checkboxes {
    display: flex;
    flex-flow: column nowrap;
    gap: var(--svf-gap);
  }
</style>
