<template>
  <el-container class="home">
    <el-aside width="260px">
      <class-nav :activeIndex="0"></class-nav>
    </el-aside>
    <el-main>
      <h1 style="text-align: center">ClassHome Page</h1>
    </el-main>
  </el-container>
</template>

<script>
import ClassNav from "../components/ClassNav"

export default {
  name: 'ClassHome',
  components: {
    ClassNav
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
