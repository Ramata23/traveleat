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
        <b-nav-item href="sign_in" class="navitem">CONNEXION</b-nav-item>


            <!-- <router-link to="/sign_up"><b-nav-item class="navitem">INSCRIPTION</b-nav-item></router-link> -->
            <!-- <router-link to="/sign_in" ><b-nav-item class="navitem">CONNEXION</b-nav-item></router-link> -->
        <b-nav-item href="/dashboard" class="navitem">PROFIL</b-nav-item>
        <b-nav-item href="#" class="navitem">RECETTES</b-nav-item>

      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
      

        <b-nav-item-dropdown text="Inscription" right>
              <SignUp/>

        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Connexion" right>
              <SignIn/>

        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
<div class="bg2">
    <h2>Spécialités</h2>
 <ul>
   <li>Riz rouge poisson</li>
 </ul>
        <b-img :src="getImg3()" class="img2"></b-img> 
<br><br>
</div>
<div class="bg">
  <b-img :src="getImg2()" class="img2"></b-img> 
  <h2 class="desc">Pour qui ? <br>
    Débutants ou passionnés de cuisine, souhaitant apprendre ou s’améliorer. <br>Ce site s’adresse à tous globalement et pour toutes les occasions.
    <hr>Pourquoi ? <br> Variez votre cuisine, épatez vos proches, surprenez-les et faites saliver vos amis. <br>Mangez sainement, des produits frais. <br>Découvrir, publier des recettes, prendre des cours de cuisine. <br>Voyager autrement, effectuer une promenade culinaire.</h2>
    
  


</div>

<mdb-footer color="blue" class="font-small pt-4 mt-4">
    <mdb-container class="text-left">
      <mdb-row>
        <mdb-col sm="6">
          <h5 class="title">Suivez-moi !</h5>
        </mdb-col>
        <mdb-col sm="6">
          <ul>
            <li class="list-unstyled"><a href="#!">Mentions légales</a></li>
            <li class="list-unstyled"><a href="#!">Contact</a></li>
            <li class="list-unstyled"><a href="#!">A propos</a></li>
          </ul>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2020 Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
      </mdb-container>
    </div>
  </mdb-footer>
  </div>
</template>

<script>
import SignUp from './SignUp.vue'
import SignIn from './SignIn.vue'
// import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Home',
  components:{
      SignUp,
      SignIn,
    // HelloWorld
  },
  props: {
    msg: String
  },
  methods:{
    getImg(){
      return require('@/assets/Traveleat.png')
    },
    getImg2(){
      return require('@/assets/Monmoodboard.png')
    },
    getImg3(){
      return require('@/assets/thieb rouge.jpg')
    },
    
  
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

.navbar-light .navbar-nav .nav-link {
    color: #0b0805;
    font-weight: bold;
    font-size:18px;
}

.img2{
      width: 450px;
      height:400px;
      display: block;
      margin-left:4rem;
}
.bg{
  background-color: #e9b981;
  min-height: 40rem;
  display: flex;
}

.bg2{
  background-color: #e9b981;
}

.desc{
  text-align: center;
  width: 48%;
}


</style>
