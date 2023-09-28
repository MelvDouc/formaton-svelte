<section class="form-submit">
  <button type="submit">
    <slot name="buttonText" />
  </button>
  <slot name="extra" />
</section>

<style lang="scss">
  .form-submit {
    width: min(100%, 400px);
    padding-top: calc(var(--svf-gap) * 4);
    border-top: 2px solid rgb(22, 22, 235);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: calc(var(--svf-gap) * 2);
  }

  button[type="submit"] {
    all: unset;
    padding: calc(var(--svf-gap) * 2);
    border-radius: 5px;
    display: grid;
    place-items: center;
    cursor: pointer;
    user-select: none;
    background: var(--svf-btn-bg);
    color: var(--svf-text-clr);
    transition: all 285ms linear;

    &:active,
    &:focus {
      translate: 0 7.5%;
    }
  }
</style>
