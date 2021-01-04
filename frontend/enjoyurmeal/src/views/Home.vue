<template>
  <div>
    
   <b-navbar class="nav">
 <b-img src="../assets/Travel'eat.png"></b-img>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="Home.vue" class="navitem">Home</b-nav-item>
        <b-nav-item href="#" class="navitem">Profil</b-nav-item>
        <b-nav-item href="#" class="navitem">Recettes</b-nav-item>


      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Inscription" right>
              <SignUp/>

        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Connexion" right>
              <SignIn/>

        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

Image Overlay
Subtitle
Some quick example text to build on the card and make up the bulk of the card's content.

<div>
  <b-card
    overlay
    img-src="../assets/Monmoodboard.png"
    img-alt="Card Image"
    text-variant="white"
    title="Image Overlay"
    sub-title="Subtitle"
  >
    <b-card-text>
      Some quick example text to build on the card and make up the bulk of the card's content.
    </b-card-text>
  </b-card>
</div>
  </div>
</template>

<script>
import SignUp from './SignUp.vue'
import SignIn from './SignIn.vue'

export default {
  name: 'Home',
  components:{
      SignUp,
      SignIn
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
