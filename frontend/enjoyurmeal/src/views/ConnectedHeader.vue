<template>
  <div>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <!-- <b-navbar-brand>Dashboard {{this.$store.getters.isUsername.name}}</b-navbar-brand> -->

      <b-collapse id="nav-collapse" is-nav>
    
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-button type="submit" variant="danger" @click="onclick">Sign-Out</b-button>
        </b-navbar-nav>
      </b-collapse>

  </div>
</template>


  

<script>

export default {
  name: "ConnectedHeader",
  data() {
      return {name}
  },
  methods: {
         onclick(){
            this.$store.dispatch('logout')
            this.$router.push('/')
         }
    },
    mounted() {
      this.name = this.$store.getters.isUsername.name
      this.id = this.$store.getters.isUserid.id
        console.log(this.$store.getters.isUsername.name, this.$store.getters.isUsername.id)
    }
};
</script>

