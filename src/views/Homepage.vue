<template>
  <div class="home">
    <Navigation />
    <h1 style="text-align: center">{{ msg }}</h1>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
export default {
  name: 'Homepage',
  components: {
    Navigation
  },
  data () {
    return {
      msg: 'Welcome to CCMS'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
