<script lang="ts">
  import {
    Form,
    FormCheckbox,
    FormCol,
    FormGroup,
    FormOptions,
    FormRow,
    FormSelect,
    FormSubmit,
    FormTextArea,
  } from "$lib/index.js";

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
      <FormGroup id="password" type="password" bind:value={formData.password} required>
        password
      </FormGroup>
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
      <FormOptions let:Radio>
        <span slot="label">gender</span>
        {#each genders as gender}
          <Radio name="gender" id={gender} value={gender} bind:group={formData.gender}>
            {gender}
          </Radio>
        {/each}
      </FormOptions>
    </FormCol>
    <FormCol width={3}>
      <FormOptions let:Checkbox>
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
      </FormOptions>
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
