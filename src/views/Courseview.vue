<template>
  <el-container class="home">
    <!-- <el-aside width="260px">
      <user-nav :activeIndex="0"></user-nav>
    </el-aside> -->
    <el-main>
     <CourseTable>

     </CourseTable>
    </el-main>
  </el-container>
</template>

<script>
import UserNav from "../components/UserNav"
import CourseTable from "../components/CourseTable"

export default {
  name: 'courseview',
  components: {
    UserNav,
    CourseTable
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
