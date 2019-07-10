<template>
  <el-container class="examBox">
    <el-aside width="260px">
      <class-nav :activeIndex="3"></class-nav>
    </el-aside>
    <el-main>
      <new-exam-form
        v-if="newFormVisible"
        v-on:submitForm="submitForm"
        ref="newExamForm"></new-exam-form>

      <select-question
        v-else
        v-on:submit="submit"
        ref="questionList"></select-question>
    </el-main>
  </el-container>
</template>

<script>
import ClassNav from "../components/ClassNav"
import NewExamForm from "../components/NewExamForm"
import SelectQuestion from "../components/SelectQuestion"

import api from "../api"

export default {
  name: 'NewExam',

  components: {
    ClassNav,
    NewExamForm,
    SelectQuestion
  },
  
  data() {
    return {
      newFormVisible: true,
      newExamForm: {},
      questions: []
    };
  },

  methods: {
    getData() {
      api.newExam()
    },
    submitForm() {
      this.newFormVisible = false
      this.newExamForm = this.$refs.newExamForm.newExam
    },
    submit() {
      this.questions = this.$refs.questionList.questions
      this.newExamForm.questions = this.questions
      var classInfo = this.$store.state.classinfo.classinfo
      this.newExamForm.course_id = classInfo.course_id
      this.newExamForm.sec_id = classInfo.sec_id
      this.newExamForm.semester = classInfo.semester
      this.newExamForm.year = classInfo.year
      console.log("newexamform", this.newExamForm)
      api.newExam(this.newExamForm)
      .then(res => {
        this.$message.success("创建成功")
        this.$router.push({
          name: "Exam",
          class_id: classInfo.course_id
        })
      })
    }
  },
  
  mounted() {
    this.getData()
  }
}
</script>

<style>

</style>
