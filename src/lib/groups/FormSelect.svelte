<script lang="ts">
  import FormGroupContainer from "$lib/containers/FormGroupContainer.svelte";
  import FormLabel from "$lib/groups/FormLabel.svelte";

  export let id: string;
  export let name: string | null = null;
  export let required: boolean = false;
  export let disabled: boolean = false;
  export let title: string | null = null;
  export let multiple: boolean | null = null;
  export let tabIndex: number | null = null;
  export let value: any = null;
  export let handleInput: OptionalEventHandler = null;
  export let options: SelectOption[];

  function setup(select: HTMLSelectElement) {
    if (multiple) select.multiple = true;
  }
</script>

<FormGroupContainer>
  <FormLabel htmlFor={id} {required}>
    <slot />
  </FormLabel>
  <div class="select-wrapper">
    <select
      {id}
      name={name ?? id}
      {title}
      tabindex={tabIndex}
      use:setup
      bind:value
      on:input={handleInput}
      {required}
      {disabled}
    >
      {#each options as { text, value, selected, disabled }}
        <option {value} {selected} {disabled}>{text}</option>
      {/each}
    </select>
  </div>
</FormGroupContainer>

<style lang="scss">
  .select-wrapper {
    height: 1.5rem;
    display: inline-block;
    position: relative;
    background: var(--svf-select-bg);

    &::before {
      content: "";
      position: absolute;
      z-index: 1;
      top: 50%;
      right: 0.5em;
      display: none;
      height: min(1rem, 25%);
      aspect-ratio: 1;
      border-right: 1px solid black;
      border-bottom: 1px solid black;
      translate: 0 -75%;
      rotate: 45deg;
      pointer-events: none;
      color: black;

      @media only screen and (width> 240px) {
        display: inline-block;
      }
    }
  }

  select {
    position: inherit;
    width: 100%;
    height: 100%;
    z-index: 2;
    border: 0;
    border-radius: 0;
    padding: calc(var(--svf-gap) / 2) calc(var(--svf-gap) / 2);
    font-size: 0.95rem;
    font-family: inherit;
    appearance: none;
    cursor: pointer;
    color: black;
    background-color: transparent;

    @media only screen and (width> 240px) {
      padding: calc(var(--svf-gap) / 2) 1.5rem calc(var(--svf-gap) / 2) var(--svf-gap);
    }

    &:focus-visible {
      outline: 2px solid #c1c1c1;
    }
  }

  option {
    font-size: inherit;
    height: 1.5rem;

    &:disabled {
      background: lighten(#808080, 30%);
    }
  }
</style>
