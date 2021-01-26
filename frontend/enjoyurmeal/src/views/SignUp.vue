<template>
  <div>
<b-navbar toggleable="lg" class="nav">
     <b-navbar-brand href="">
          <img :src="getImg()" class="img"></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                  
        </b-nav-form>
         <b-navbar-nav>
        <b-nav-item href="/" class="navitem">HOME</b-nav-item>
        <b-nav-item href="sign_in" class="navitem">CONNEXION</b-nav-item>

      </b-navbar-nav>
<b-navbar-nav class="ml-auto">
      

        <b-nav-item-dropdown text="Connexion" right>
              <SignIn/>

        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

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
import SignIn from './SignIn.vue'

export default {
  name: "SignUp",

  mixins: [validationMixin],
  components: {
      SignIn,
  },
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
    getImg(){
      return require('@/assets/Traveleat.png')
    },
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

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.nav{
    background-color: #c4b981;
}
.navitem{
    background-color: #B47C54;
}
#__BVID__16{
        background-color: #B47C54;
}
.navbar{
    margin-top: -60px;
}

.navbar-light .navbar-nav .nav-link {
    color: #0b0805;
    font-weight: bold;
    font-size:18px;
}
</style>