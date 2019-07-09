<template>
  <div id="app">
    <Navigation></Navigation>
    <transition mode="out-in" name="custom-classes-transition" :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import UserNav from './components/UserNav.vue'
export default {
  name: 'App',
  components: {
    UserNav,
    Navigation
  },
  watch: {
    // 监听 $route 为店内页设置不同的过渡效果
    // $route(to, from) {
    //   this.enterAnimate="animated fadeIn";
    //   this.leaveAnimate="animated fadeOut";
      // const toDepth = to.path.length;
      // const fromDepth = from.path.length;
      // if (toDepth === 2) {
      //   this.$store.commit("setPageName", to.name);
      // }
      // //同一级页面无需设置过渡效果
      // if (toDepth === fromDepth) {
      //   return;
      // }
      // this.enterAnimate =
      //   toDepth > fromDepth ? "animated fadeInRight" : "animated fadeInLeft";
      // this.leaveAnimate =
      //   toDepth > fromDepth ? "animated fadeOutLeft" : "animated fadeOutRight";
    // }
  }
}
</script>

<style>
@font-face {
  font-family: "Sxihei";
  src: url("assets/font/Sxihei.ttf");
}

@font-face{
  font-family:'Neon80s';
  src: url('//thenewcode.com/assets/fonts/neon-webfont.woff') format('woff'), 
  url('/assets/fonts/neon-webfont.ttf') format('truetype');
  font-weight:normal;
  font-style:normal;
}

*{
  margin: 0;
  padding: 0;
  font-family: "Sxihei", "Microsoft YaHei";
}

html{
  padding-top: 50px;
  /* height: 100%; */
}
</style>
