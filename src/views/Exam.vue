<template>
  <el-container class="home">
    <el-aside width="260px">
      <user-nav :activeIndex="0"></user-nav>
    </el-aside>
    <el-main>
      <exam-list></exam-list>
    </el-main>
  </el-container>
</template>

<script>
import UserNav from "../components/UserNav"
import ExamList from "../components/ExamList"

export default {
  name: 'Homepage',
  components: {
    UserNav,
    ExamList
  },
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>

</style>
