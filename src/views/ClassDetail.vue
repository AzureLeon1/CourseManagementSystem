<template>
  <el-container class="home">
    <el-aside width="260px">
      <user-nav :activeIndex="0"></user-nav>
    </el-aside>
    <el-main>
     <ClassInfo></ClassInfo>
    </el-main>
  </el-container>
</template>

<script>
import UserNav from "../components/UserNav"
import ClassInfo from "../components/ClassInfo"

export default {
  name: 'ClassDetail',
  components: {
    UserNav,
    ClassInfo
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
