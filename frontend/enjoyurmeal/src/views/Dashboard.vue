<template>
<div>
    
    <header><ConnectedHeader/></header>
    <h1>This is Dashboard page</h1>
    <h3>Welcome to your connected user !</h3>
    <b-card no-body>
    <b-tabs card>  
      <!-- <b-tab title="List-contacts" active><ContactList/></b-tab> -->
      <b-tab title="Add-recipe"><AddRecipe/></b-tab>
    </b-tabs>
  </b-card>
    <!-- <b-button type="submit" variant="danger" @click= "onclick">Sign-Out</b-button> -->
</div>
</template>

<script>
import ConnectedHeader from '../views/ConnectedHeader.vue'
import AddRecipe from './AddRecipe.vue'
// import ContactList from './ContactList.vue'
export default {
    name: 'Dashboard',
       components:{
       ConnectedHeader,
       AddRecipe,
    //    ContactList
}
    //  methods: {
    //      onclick(){
    //         this.$store.dispatch('logout')
    //         this.$router.push('/')
    //      }
    // }
}
</script>