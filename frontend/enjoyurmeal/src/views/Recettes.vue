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
          
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto"> </b-navbar-nav>
      </b-collapse>
    </b-navbar>  </div>
</template>

<script>
import axios from 'axios'


// import Dashboard from "../views/Dashboard"
// import SignUp from './SignUp.vue'

export default {
  name: "Recettes",
  components: {
    // SignUp,
  },
  data() {
    return {
      info:null
    };
    
  },
 
  methods: {
    getImg(){
      return require('@/assets/Traveleat.png')
    },
    mounted () {
        axios
      .get('http://localhost:3000/recettes')
    }
  
   
  },
};
</script>