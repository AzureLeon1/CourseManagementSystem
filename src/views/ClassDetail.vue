<template>
  <el-container class="home">
    <el-aside width="260px">
      <class-nav :activeIndex="0"></class-nav>
    </el-aside>
    <el-main>
     <ClassInfo></ClassInfo>
    </el-main>
  </el-container>
</template>

<script>
import ClassNav from "../components/ClassNav"
import ClassInfo from "../components/ClassInfo"

export default {
  name: 'ClassDetail',
  components: {
    ClassNav,
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
