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
      
    },
    submitForm() {
      this.newFormVisible = false
      this.newExamForm = this.$refs.newExamForm.newExam
    },
    submit() {
      this.questions = this.$refs.questionList.questions
    }
  },
  
  mounted() {
    this.getData()
  }
}
</script>

<style>

</style>
