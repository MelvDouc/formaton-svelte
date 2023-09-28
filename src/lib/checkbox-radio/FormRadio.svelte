<script lang="ts">
  import FormCheckboxContainer from "$lib/containers/FormCheckboxContainer.svelte";
  import FormLabel from "../groups/FormLabel.svelte";

  export let id: string;
  export let name: string;
  export let group: any;
  export let disabled: boolean = false;
  export let checked: boolean = false;
  export let value = "";
  export let handleChange: OptionalEventHandler = null;
</script>

<FormCheckboxContainer>
  <input
    type="radio"
    {name}
    {id}
    bind:group
    on:change={handleChange}
    {checked}
    {value}
    {disabled}
  />
  <label for={id} class="radio-label">
    <div class="ball" />
  </label>
  <FormLabel htmlFor={id}>
    <slot />
  </FormLabel>
</FormCheckboxContainer>

<style lang="scss">
  input[type="radio"] {
    display: none;

    &:checked + .radio-label {
      color: var(--svf-toggle-clr-active);

      .ball {
        scale: 1;
      }
    }
  }

  .radio-label,
  .ball {
    transition: all 0.2s linear;
  }

  .radio-label {
    height: var(--svf-radio-height);
    aspect-ratio: 1;
    border-radius: var(--svf-radio-border-radius);
    color: var(--svf-toggle-clr-inactive);
    border: 2px solid currentColor;
    display: grid;
    place-items: center;

    & .ball {
      scale: 0;
      height: 85%;
      aspect-ratio: 1;
      background: currentColor;
      border-radius: var(--svf-radio-border-radius);
    }
  }
</style>
