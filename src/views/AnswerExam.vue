<template>
  <el-container class="home">
    <el-aside width="260px">
      <user-nav :activeIndex="0"></user-nav>
    </el-aside>
    <el-main>
      <question-list></question-list>
    </el-main>
  </el-container>
</template>

<script>
import UserNav from "../components/UserNav"
import QuestionList from "../components/QuestionList"

export default {
  name: 'Homepage',
  components: {
    UserNav,
    QuestionList
  },
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>

</style>
