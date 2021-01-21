<template>
<div>
    <!-- <b-form @submit.prevent="onSubmit" @reset="onReset">
      <b-form-group id="input-group-1" label="Your Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="$v.name.$model"
          :state="validateState('name')"
          type="text"
          placeholder="Enter name"
        ></b-form-input>
        <b-form-invalid-feedback id="input-1-live-feedback"
          >Veuillez renseigner votre nom.</b-form-invalid-feedback
        >
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Email address:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="$v.email.$model"
          :state="validateState('email')"
          type="email"
          placeholder="Enter email"
        ></b-form-input>
        <b-form-invalid-feedback id="input-2-live-feedback"
          >Vous devez fournir un email valide !</b-form-invalid-feedback
        >
      </b-form-group>
    </b-form> -->
        <b-button type="submit" variant="success">Je publie ma recette</b-button>
            <b-button type="submit" variant="success">J'explore les recettes</b-button>
    <b-button type="submit" variant="success">Je donne mon avis</b-button>
</div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";


export default {
  mixins: [validationMixin],
  name: "AddRecipe",
  data() {
    return {
      email: "",
      name: "",
    };
  },
   
  validations: {
    name: {
      required,
    },
    email: {
      required,
      email,
    },
    
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      let objectToSend = {
        name: this.$v.name.$model,
        email: this.$v.email.$model,
      };
      this.axios
        .post("http://localhost:3000/new_recette", objectToSend)
        .then((response) => {
          console.log(response);

          // alert(JSON.stringify(this.form))
          console.log("Recipe added successfully");
        })
        .catch(function (error) {
          console.log(error);
        });
      this.$v.$touch();
      if (this.$v.$anyError) {
        return;
      }
    },
    validateState(name) {
      const { $dirty, $error } = this.$v[name];
      return $dirty ? !$error : null;
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.email = "";
      this.name = "";
      this.$v.$reset();

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>