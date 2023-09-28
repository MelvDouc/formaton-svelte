<script lang="ts">
  import Form from "$lib/Form.svelte";
  import FormCol from "$lib/FormCol.svelte";
  import FormRow from "$lib/FormRow.svelte";
  import FormCheckbox from "$lib/checkbox-radio/FormCheckbox.svelte";
  import FormCheckboxes from "$lib/checkbox-radio/FormCheckboxes.svelte";
  import FormRadios from "$lib/checkbox-radio/FormRadios.svelte";
  import FormGroup from "$lib/groups/FormGroup.svelte";
  import FormSelect from "$lib/groups/FormSelect.svelte";
  import FormSubmit from "$lib/groups/FormSubmit.svelte";
  import FormTextArea from "$lib/groups/FormTextArea.svelte";

  const genders = ["male", "female", "other"];
  const animals = ["lion", "tiger", "bear"];

  const countries = ["USA", "UK", "France", "Japan", "China"];
  const countryOptions = countries.map((country) => ({
    text: `${country.slice(0, 2).toUpperCase()} - ${country}`,
    value: country,
    disabled: false,
  }));
  countryOptions.unshift({
    text: "--",
    value: "",
    disabled: true,
  });

  const formData = {
    firstName: "",
    lastName: "",
    age: 18,
    address: "",
    city: "",
    zipCode: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    country: "",
    acceptsTerms: false,
    favoriteAnimals: [] as string[],
  };

  function handleSubmit(e: Event) {
    e.preventDefault();
  }
</script>

<svelte:head>
  <title>Svelte Form - Test</title>
</svelte:head>

<Form {handleSubmit}>
  <FormRow>
    <FormCol width={5}>
      <FormGroup id="firstName" bind:value={formData.firstName} required>first name</FormGroup>
    </FormCol>
    <FormCol width={5}>
      <FormGroup id="lastName" bind:value={formData.lastName} required>last name</FormGroup>
    </FormCol>
    <FormCol width={2}>
      <FormGroup id="age" type="number" bind:value={formData.age} required>age</FormGroup>
    </FormCol>
  </FormRow>
  <FormRow>
    <FormCol width={6}>
      <FormTextArea id="address" bind:value={formData.address} required>address</FormTextArea>
    </FormCol>
    <FormCol width={6}>
      <FormGroup id="city" bind:value={formData.city} required>city</FormGroup>
      <FormGroup id="zipCode" bind:value={formData.zipCode} required>zip code</FormGroup>
    </FormCol>
  </FormRow>
  <FormRow>
    <FormCol>
      <FormGroup id="email" type="email" bind:value={formData.email} required>email</FormGroup>
    </FormCol>
  </FormRow>
  <FormRow>
    <FormCol width={6}>
      <FormGroup id="password" type="password" bind:value={formData.password} required
        >password</FormGroup
      >
    </FormCol>
    <FormCol width={6}>
      <FormGroup id="confirmPassword" type="password" bind:value={formData.confirmPassword} required
        >confirm password</FormGroup
      >
    </FormCol>
  </FormRow>
  <FormRow>
    <FormCol width={6}>
      <FormSelect id="country" options={countryOptions}>country</FormSelect>
    </FormCol>
    <FormCol width={3}>
      <FormRadios let:Radio>
        <span slot="label">gender</span>
        {#each genders as gender}
          <Radio name="gender" id={gender} value={gender} bind:group={formData.gender}>
            {gender}
          </Radio>
        {/each}
      </FormRadios>
    </FormCol>
    <FormCol width={3}>
      <FormCheckboxes let:Checkbox>
        <span slot="label">favorite animals</span>
        {#each animals as animal}
          <Checkbox
            id="animal-{animal}"
            name="animals"
            value={animal}
            bind:group={formData.favoriteAnimals}
          >
            {animal}
          </Checkbox>
        {/each}
      </FormCheckboxes>
    </FormCol>
  </FormRow>
  <FormRow>
    <FormCol>
      <FormCheckbox id="acceptsTerms" bind:checked={formData.acceptsTerms}>
        accept terms and conditions
      </FormCheckbox>
    </FormCol>
  </FormRow>
  <FormSubmit>
    <span slot="buttonText">Sign Up</span>
  </FormSubmit>
</Form>

<style lang="scss">
  $white1: rgb(255, 255, 250);
  $gray1: gray;
  $gray2: #c0c0c0;
  $gray3: lighten($gray2, 5%);
  $blue1: rgb(0, 6, 153);
  $blue2: rgb(0, 8, 255);
  $green1: rgb(0, 155, 10);
  $green2: rgb(0, 205, 10);
  $red1: red;

  :global(:root) {
    // Color Variables
    --svf-clr-primary: #{$blue1};
    --svf-clr-secondary: #{$green1};
    --svf-clr-light: #{$white1};
    --svf-clr-danger: #{$red1};
    --svf-clr-disabled: #{$gray1};
    // Form Colors
    --svf-text-clr: var(--svf-clr-light);
    --svf-bg: radial-gradient(circle, #{$blue2} 15%, #{$blue1} 85%);
    // Sizing
    --svf-width: min(1000px, 100%);
    --svf-gap: 0.25em;
    --svf-gap-rows: calc(var(--svf-gap) * 3);
    --svf-padding: calc(var(--svf-gap) * 4);
    --svf-border-radius: 6px;
    // Fonts
    --svf-font-family: inherit;
    // Buttons
    --svf-btn-bg: radial-gradient(circle, #{$green2}, var(--svf-clr-secondary));
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
    --svf-select-bg: radial-gradient(#{$gray3}, #{$gray2});
  }
</style>
