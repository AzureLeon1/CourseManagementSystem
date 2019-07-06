<template>
  <el-container class="home">
    <el-aside width="260px">
      <user-nav :activeIndex="0"></user-nav>
    </el-aside>
    <el-main>
      <h1 style="text-align: center">{{ msg }}</h1>
    </el-main>
  </el-container>
</template>

<script>
import UserNav from "../components/UserNav"

export default {
  name: 'Homepage',
  components: {
    UserNav
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
