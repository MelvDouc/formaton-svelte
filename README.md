# Formation Svelte

A form library for Svelte.

## Customize

The following CSS variables are used. They can be overridden to customize the forms and their elements.

```scss
:root {
  // Color Variables
  --svf-clr-primary: #000699;
  --svf-clr-secondary: #009b0a;
  --svf-clr-light: #fffffa;
  --svf-clr-danger: #ff0000;
  --svf-clr-disabled: #808080;
  // Sizing
  --svf-width: min(1000px, 100%);
  --svf-gap: 0.25em;
  --svf-gap-rows: calc(var(--svf-gap) * 3);
  --svf-padding: calc(var(--svf-gap) * 4);
  --svf-border-radius: 6px;
  // Form Colors
  --svf-text-clr: var(--svf-clr-light);
  --svf-bg: radial-gradient(circle, #0008ff 15%, var(--svf-clr-primary) 85%);
  // Fonts
  --svf-font-family: inherit;
  // Buttons
  --svf-btn-bg: radial-gradient(circle, #00cd0a, var(--svf-clr-secondary));
  // Inputs
  --svf-input-height: 2rem;
  // Labels
  --svf-label-asterisk-clr: var(--svf-clr-danger);
  --svf-label-text-transform: capitalize;
  // Toggles
  --svf-radio-height: 18px;
  --svf-radio-border-radius: 50%;
  --svf-toggle-height: 22px;
  --svf-toggle-clr-inactive: var(--svf-clr-disabled);
  --svf-toggle-clr-active: var(--svf-clr-secondary);
  // Selects
  --svf-select-bg: radial-gradient(lighten(#c0c0c0, 10%), #c0c0c0);
}
```
