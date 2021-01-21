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
        <b-nav-item href="Home.vue" class="navitem">Home</b-nav-item>
        <b-nav-item href="#" class="navitem">Profil</b-nav-item>
        <b-nav-item href="#" class="navitem">Recettes</b-nav-item>

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

<br><br>
<div>
 <b-img :src="getImg2()" class="img2"></b-img>


</div>
<div>
  <b-card footer="Card Footer">
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
  },
  methods:{
    getImg(){
      return require('@/assets/Traveleat.png')
    },
    getImg2(){
      return require('@/assets/Monmoodboard.png')
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

.img2{
      width: 35%;
      display: flex;
      margin-left:4rem;
}

</style>
