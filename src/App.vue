<template>
  <div id="app">
    <Navigation />
    <router-view/>
    <Footer id="footer" />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  },
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
} */
#footer{
    width: 100%;
    position:absolute;
    bottom:0px;
    left:0px;
}
</style>
