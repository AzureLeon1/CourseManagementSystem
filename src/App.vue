<template>
  <div id="app">
    <Navigation />
    <UserNav></UserNav>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import UserNav from './components/UserNav.vue'
export default {
  name: 'App',
  components: {
    Navigation,
  },
}
</script>

<style>
@font-face {
  font-family: "Sxihei";
  src: url("assets/font/Sxihei.ttf");
}

*{
  margin: 0;
  padding: 0;
  font-family: "Sxihei", "Microsoft YaHei";
}

html{
padding-top: 50px;
height: 100%;
}
</style>
