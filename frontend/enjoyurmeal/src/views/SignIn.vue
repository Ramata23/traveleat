<template>
  <div>
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
export default {
  name: "SignIn",
  // components: {
  //   Dashboard
  // },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
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