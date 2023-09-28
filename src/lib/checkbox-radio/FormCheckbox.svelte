<script lang="ts">
  import FormCheckboxContainer from "$lib/containers/FormCheckboxContainer.svelte";
  import FormLabel from "$lib/groups/FormLabel.svelte";

  export let id: string;
  export let name: string | null = null;
  export let group: any[] | null = null;
  export let value: any = "";
  export let required: boolean = false;
  export let disabled: boolean = false;
  export let checked: boolean = false;
  export let handleChange: OptionalEventHandler = null;

  function setup(element: HTMLInputElement) {
    if (Array.isArray(group))
      element.addEventListener("change", () => {
        group = element.checked ? group!.concat(value) : group!.filter((item) => item !== value);
      });
  }
</script>

<FormCheckboxContainer>
  <input
    use:setup
    type="checkbox"
    {id}
    name={name ?? id}
    {value}
    {required}
    {disabled}
    on:change={handleChange}
    bind:checked
  />
  <label class="toggle" for={id}>
    <span class="slider" />
  </label>
  <FormLabel htmlFor={id} {required}>
    <slot />
  </FormLabel>
</FormCheckboxContainer>

<style lang="scss">
  $toggle-width: calc(var(--svf-toggle-height) * 1.75);
  $toggle-padding: 2px;
  $slider-height: calc(var(--svf-toggle-height) - $toggle-padding * 2);
  $slider-right: calc($toggle-width - $slider-height - $toggle-padding);

  .toggle,
  .slider {
    transition: all 250ms ease-in;
  }

  .toggle {
    display: inline-block;
    width: $toggle-width;
    height: var(--svf-toggle-height);
    border-radius: 99999px;
    position: relative;
    background-color: var(--svf-toggle-clr-inactive);

    .slider {
      position: absolute;
      display: inline-block;
      border-radius: 50%;
      height: $slider-height;
      aspect-ratio: 1;
      background: white;
      top: 50%;
      transform: translate($toggle-padding, -50%);
    }
  }

  input {
    display: none;

    &:checked + .toggle {
      background-color: var(--svf-toggle-clr-active);

      .slider {
        transform: translate($slider-right, -50%);
      }
    }
  }
</style>
