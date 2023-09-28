<script lang="ts">
  import FormLabel from "$lib/groups/FormLabel.svelte";
  import FormGroupContainer from "$lib/containers/FormGroupContainer.svelte";

  export let id: string;
  export let type: "text" | "number" | "search" | "email" | "password" = "text";
  export let name: string | null = null;
  export let required: boolean = false;
  export let disabled: boolean = false;
  export let placeholder: string | null = null;
  export let min: number | null = null;
  export let max: number | null = null;
  export let minLength: string | null = null;
  export let maxLength: string | null = null;
  export let step: number | null = null;
  export let pattern: string | null = null;
  export let title: string | null = null;
  export let list: string | null = null;
  export let tabIndex: number | null = null;
  export let autocorrect: string | null = null;
  export let autocomplete: string | null = null;
  export let autocapitalize: "off" | "on" | "words" | "characters" | null = null;
  export let multiple: boolean | null = null;
  export let value: any = null;
  export let handleInput: OptionalEventHandler = null;

  function setup(input: HTMLInputElement) {
    input.type = type;
    if (typeof minLength === "number") input.minLength = minLength;
    if (typeof maxLength === "number") input.maxLength = maxLength;
  }
</script>

<FormGroupContainer>
  <FormLabel htmlFor={id} {required}>
    <slot />
  </FormLabel>
  <input
    use:setup
    name={name ?? id}
    {required}
    {disabled}
    {placeholder}
    {min}
    {max}
    {step}
    {pattern}
    {title}
    {list}
    tabindex={tabIndex}
    {autocapitalize}
    {autocorrect}
    {autocomplete}
    {multiple}
    on:input={handleInput}
    bind:value
  />
</FormGroupContainer>

<style lang="scss">
  @use "$styles/mixins";

  input {
    height: var(--svf-input-height);
    appearance: textfield;
    @include mixins.formControl;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
</style>
