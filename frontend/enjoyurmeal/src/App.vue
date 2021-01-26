<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
     <div id="nav">

    <router-link to="/"></router-link>
    <router-link to="/dashboard"></router-link>
    <!-- <router-link to="/connectedheader">ConnectedHeader</router-link> -->
</div>
      <router-view/>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'


// export default {
//   name: 'App',
//   components: {
//     // HelloWorld,
    
//   }
// }
</script>

<style>

@font-face {
  font-family: "Kalam Light";
  src: local("Kalam Light"),
   url(./fonts/Kalam/Kalam-Light.ttf) format("truetype");
}

#app {
  font-family: Kalam Light;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0b0805;
  margin-top: 60px;
}
</style>
