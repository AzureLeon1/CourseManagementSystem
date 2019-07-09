<template>
  <el-container class="checkExamBox">
    <el-aside width="260px">
      <class-nav :activeIndex="3"></class-nav>
    </el-aside>
    <el-main>
      <question-list></question-list>
    </el-main>
  </el-container>
</template>

<script>
import ClassNav from "../components/ClassNav"
import QuestionList from "../components/QuestionList"

export default {
  name: 'CheckExam',

  components: {
    ClassNav,
    QuestionList
  },

  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
