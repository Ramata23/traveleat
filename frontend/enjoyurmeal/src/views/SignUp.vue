<template>
  <div>
    <div class="validators"></div>
    <b-form @submit.prevent="onSubmit" @reset="onReset">
      <b-form-group id="input-group-1" label="Prénom:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="$v.prenom.$model"
          :state="validateState('prenom')"
          type="text"
          placeholder="Prénom :"
        ></b-form-input>
        <b-form-invalid-feedback id="input-1-live-feedback"
          >Veuillez renseigner votre prénom.</b-form-invalid-feedback
        >
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Email:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="$v.email.$model"
          :state="validateState('email')"
          type="email"
          placeholder="Email :"
        ></b-form-input>
        <b-form-invalid-feedback id="input-2-live-feedback"
          >Vous devez fournir un email valide !</b-form-invalid-feedback
        >
      </b-form-group>

      <b-form-group id="input-group-3" label="MDP:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="$v.password.$model"
          :state="validateState('password')"
          type="password" placeholder="MDP :"
        ></b-form-input>
        <b-form-invalid-feedback id="input-3-live-feedback"
          >Votre mdp doit contenir au moins 8
          caractères.</b-form-invalid-feedback
        >
      </b-form-group>

      <b-form-group id="input-group-4" label="Confirme MDP:" label-for="input-4">
                  <b-form-input
            id="input-4"
          v-model="$v.confirmPassword.$model"
          :state="validateState('confirmPassword')"
          type="password" placeholder="Confirme MDP :"
        ></b-form-input>
                <b-form-invalid-feedback id="input-4-live-feedback">Vos mdp ne correspondent pas.</b-form-invalid-feedback>
      </b-form-group>
    

      <b-button type="submit" variant="success">Sign-up</b-button>
    </b-form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  prenom: "SignUp",
  data() {
    return {
      email: "",
      prenom: "",
      password: "",
      confirmPassword: "",
    };
  },
  validations: {
    prenom: {
      required,
      minlength: minLength(3),
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      minlength: minLength(8),
    },
    confirmPassword: { 
        required, 
        sameAsPassword: sameAs('password') 
        },

  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      let objectToSend = {
        prenom: this.$v.prenom.$model,
        email: this.$v.email.$model,
        mdp: this.$v.password.$model,
      };
      this.axios
        .post("http://localhost:3000/sign_up", objectToSend)
        .then((response) => {
          console.log(response);

          // alert(JSON.stringify(this.form))
          console.log("User registered successfully");
        })
        .catch(function (error) {
          console.log(error);
        });
      this.$v.$touch();
      if (this.$v.$anyError) {
        return;
      }
    },
    validateState(prenom) {
      const { $dirty, $error } = this.$v[prenom];
      return $dirty ? !$error : null;
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.email = "";
      this.prenom = "";
      this.password = "";
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
<style>
.error {
  color: red;
  border: 1px solid red;
}
.form {
  display: inline-block;
  text-align: center;
  width: 49%;
}
.validators {
  display: inline-block;
  width: 49%;
  text-align: center;
  vertical-align: top;
}
.input {
  padding: 5px;
}
input:focus {
  outline: none;
}
</style>