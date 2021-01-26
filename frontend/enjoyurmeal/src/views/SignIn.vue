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
        <b-nav-item href="sign_up" class="navitem">INSCRIPTION</b-nav-item>

      </b-navbar-nav>
<b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown text="Inscription" right>
              <SignUp/>

        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    </b-navbar>

  
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-5" label="Email:" label-for="input-5">
        <b-form-input
          id="input-5" 
          v-model="form.email"
          type="email"
          required
          placeholder="Email :"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-6" label="MDP:" label-for="input-6">
        <b-form-input id="input-6" type="password" v-model="form.password" required placeholder="MDP :"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="success">Sign-in</b-button>
    </b-form>
  </div>
</template>

<script>
import jwt from 'jsonwebtoken'
// import Dashboard from "../views/Dashboard"
// import SignUp from './SignUp.vue'

export default {
  name: "SignIn",
  components: {
    // SignUp,
  },
  data() {
    return {
      form: {
        email: "",
        mdp: "",
      },
    };
  },
  methods: {
    getImg(){
      return require('@/assets/Traveleat.png')
    },
    onSubmit(evt) {
      evt.preventDefault();
      this.axios
        .post("http://localhost:3000/sign_in", this.form)
        .then((response) => {
          this.form = response
          var decoded = jwt.decode(response.data.token) 

          this.$store.dispatch('ajoute' , {token: response.data.token, userdata:decoded})
            
          // alert(JSON.stringify(this.form))
          this.$router.push('/dashboard')
                
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>