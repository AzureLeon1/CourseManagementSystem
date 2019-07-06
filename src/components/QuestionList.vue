<template>
  <div class="questionListBox">
    <question-card 
      v-for="question in questionList"
      :key="question.question_id"
      :questionInfo="question"></question-card>
    
    <div class="submitBtn">
      <el-button 
        @click="submit" 
        type="primary">提交</el-button>
    </div>
  </div>
</template>

<script>
import QuestionCard from "./QuestionCard"

export default {
  data() {
    return {
      questionList: []
    }
  },

  components: {
    QuestionCard
  },

  methods: {
    getData() {
      // To Do: get all questions
      this.questionList = [{
        question_id: "000",
        content: "1 + 1 = ____",
        answer: "0_1_2_3"
      },{
        question_id: "111",
        content: "1 + 1 = ____",
        answer: "0_1_2_3"
      },{
        question_id: "222",
        content: "1 + 1 = ____",
        answer: "0_1_2_3"
      },{
        question_id: "333",
        content: "1 + 1 = ____",
        answer: "0_1_2_3"
      }]
      for (let i = 0; i < this.questionList.length; ++i) {
        this.questionList[i].content = (i+1) + ".\xa0\xa0" +
          this.questionList[i].content
      }
    },

    submit() {
      // To Do
    }
  },

  mounted() {
    this.getData()
  }
}
</script>

<style>
.questionListBox{
  margin: 20px 20px;
}

.questionListBox .submitBtn{
  margin-top: 20px;
}
</style>
