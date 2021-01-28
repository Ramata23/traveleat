<template>
  <div>
    <b-navbar toggleable="lg" class="nav">
      <b-navbar-brand href="">
        <img :src="getImg()" class="img"
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Search"
          ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit"
            >Search</b-button
          >
        </b-nav-form>
        <b-navbar-nav>
          <b-nav-item href="/" class="navitem">HOME</b-nav-item>
          <!-- <b-nav-item href="sign_in" class="navitem">CONNEXION</b-nav-item> -->
          <b-button type="submit" variant="danger" @click="onclick"
            >Sign-Out</b-button
          >
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto"> </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-form @submit.prevent="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-7"
        label="Nom de la recette:"
        label-for="input-7"
      >
        <b-form-input
          id="input-7"
          v-model="$v.nom_recette.$model"
          :state="validateState('nom_recette')"
          type="text"
          placeholder="Enter recipe's name"
        ></b-form-input>
        <b-form-invalid-feedback id="input-7-live-feedback"
          >Veuillez indiquer le nom de votre recette. Minimum 4
          lettres</b-form-invalid-feedback
        >
      </b-form-group>

      <b-form-group id="input-group-8" label="Auteur:" label-for="input-8">
        <b-form-input
          id="input-8"
          v-model="$v.auteur.$model"
          :state="validateState('auteur')"
          type="text"
          placeholder="Enter author's name"
        ></b-form-input>
        <b-form-invalid-feedback id="input-8-live-feedback"
          >Vous devez indiquer le nom de l'auteur ! Minimum 3
          lettres</b-form-invalid-feedback
        >
      </b-form-group>

      <b-form-group id="input-group-9" label="Photo:" label-for="input-9">
        <b-form-input
          id="input-9"
          v-model="$v.photo.$model"
          :state="validateState('photo')"
          type="text"
          placeholder="Enter URL's picture"
        ></b-form-input>
        <b-form-invalid-feedback id="input-9-live-feedback"
          >Vous devez insérer l'URL de votre photo !</b-form-invalid-feedback
        >
      </b-form-group>

      <b-form-group
        id="input-group-10"
        label="Description:"
        label-for="input-10"
      >
        <b-form-input
          id="input-10"
          v-model="$v.description.$model"
          :state="validateState('description')"
          type="text"
          placeholder="Enter some description"
        ></b-form-input>
        <b-form-invalid-feedback id="input-10-live-feedback"
          >Vous devez présenter une description, même courte
          !</b-form-invalid-feedback
        >
      </b-form-group>

      <b-form-group
        id="input-group-11"
        label="Date de publication:"
        label-for="input-11"
      >
        <b-form-input
          id="input-11"
          v-model="$v.date_publication.$model"
          :state="validateState('date_publication')"
          type="date"
          placeholder="Enter publication date"
        ></b-form-input>
        <b-form-invalid-feedback id="input-11-live-feedback"
          >Vous devez entrer une date !</b-form-invalid-feedback
        >
      </b-form-group>

      <b-form-group
        id="input-group-12"
        label="ID utilisateur:"
        label-for="input-12"
      >
        <b-form-input
          id="input-12"
          v-model="$v.id_utilisateur.$model"
          :state="validateState('id_utilisateur')"
          type="number"
          placeholder="Enter your user id"
        ></b-form-input>
        <b-form-invalid-feedback id="input-12-live-feedback"
          >Vous devez indiquer votre id utilisateur !</b-form-invalid-feedback
        >
      </b-form-group>
      <b-button type="submit" variant="success">Je publie ma recette</b-button>
    </b-form>

    <!-- <b-button type="submit" variant="success">J'explore les recettes</b-button>
    <b-button type="submit" variant="success">Je donne mon avis</b-button> -->
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
import { helpers } from "vuelidate/lib/validators";
const alpha = helpers.regex("alpha", /^[a-zA-Z\\s-àâäãçéèêëìîïòôöõùûüñ'-]/);

export default {
  mixins: [validationMixin],
  name: "AddRecipe",
  data() {
    return {
      nom_recette: "",
      auteur: "",
      photo: "",
      description: "",
      date_publication: "",
      id_utilisateur: "",
    };
  },

  validations: {
    nom_recette: {
      required,
      minLength: minLength(4),
      alpha,
    },
    auteur: {
      required,
      minLength: minLength(3),
      alpha,
    },
    photo: {
      required,
    },
    description: {
      required,
      alpha
    },
    date_publication: {
      required,
    },
    id_utilisateur: {
      required,
    },
  },
  methods: {
    getImg() {
      return require("@/assets/Traveleat.png");
    },
    onclick() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
    onSubmit(evt) {
      evt.preventDefault();
      let objectToSend = {
        nom_recette: this.$v.nom_recette.$model,
        auteur: this.$v.auteur.$model,
        photo: this.$v.photo.$model,
        description: this.$v.description.$model,
        date_publication: this.$v.date_publication.$model,
        id_utilisateur: this.$v.id_utilisateur.$model,
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
    validateState(nom_recette) {
      const { $dirty, $error } = this.$v[nom_recette];
      return $dirty ? !$error : null;
    },
    // validateState(auteur) {
    //   const { $dirty, $error } = this.$v[auteur];
    //   return $dirty ? !$error : null;
    // },
    // validateState(photo) {
    //   const { $dirty, $error } = this.$v[photo];
    //   return $dirty ? !$error : null;
    // },
    // validateState(description) {
    //   const { $dirty, $error } = this.$v[description];
    //   return $dirty ? !$error : null;
    // },
    // validateState(date_publication) {
    //   const { $dirty, $error } = this.$v[date_publication];
    //   return $dirty ? !$error : null;
    // },
    // validateState(id_utilisateur) {
    //   const { $dirty, $error } = this.$v[id_utilisateur];
    //   return $dirty ? !$error : null;
    // },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.nom_recette = "";
      this.auteur = "";
      this.photo = "";
      this.description = "";
      this.date_publication = "";
      this.id_utilisateur = "";
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