<script lang="ts">
  import FormLabel from "$lib/groups/FormLabel.svelte";
  import FormGroupContainer from "$lib/containers/FormGroupContainer.svelte";

  export let id: string;
  export let name: string | null = null;
  export let placeholder: string | null = null;
  export let required: boolean = false;
  export let disabled: boolean = false;
  export let value: any = null;
  export let handleInput: OptionalEventHandler = null;
</script>

<FormGroupContainer fullHeight>
  <FormLabel htmlFor={id} {required}>
    <slot />
  </FormLabel>
  <textarea
    name={name ?? id}
    {id}
    {placeholder}
    on:input={handleInput}
    {required}
    {disabled}
    bind:value
  />
</FormGroupContainer>

<style lang="scss">
  @use "$styles/mixins";

  textarea {
    height: 100%;
    @include mixins.formControl;
    resize: vertical;
  }
</style>
