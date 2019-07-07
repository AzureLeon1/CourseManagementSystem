<template>
  <el-container class="home">
    <el-aside width="260px">
      <user-nav :activeIndex="0"></user-nav>
    </el-aside>
    <el-main>
      <question-list ref="questionList"></question-list>
    </el-main>
  </el-container>
</template>

<script>
import UserNav from "../components/UserNav"
import QuestionList from "../components/QuestionList"

export default {
  name: 'AnswerExam',

  components: {
    UserNav,
    QuestionList
  },

  data () {
    return {
      
    }
  },

  mounted() {
    let _this = this
    window.onbeforeunload = function (e) {
      if (_this.$route.name == "Template") {
        e = e || window.event;
        if (e) {
          e.returnValue = "离开页面试卷将自动提交,是否离开";
        }
        return '离开页面试卷将自动提交,是否离开';
      } else {
        window.onbeforeunload = null
      }
    };
  },

  beforeRouteLeave(to, from, next) {
    this.$confirm('退出此页面将不会保存你的答案,是否退出', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      next()
    }).catch(() => {
      
    })
  }
}
</script>

<style>

</style>
