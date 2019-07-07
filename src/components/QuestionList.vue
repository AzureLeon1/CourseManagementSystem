<template>
  <div class="questionListBox">
    <question-card 
      v-for="question in questionList"
      :key="question.question_id"
      :questionInfo="question"
      ref="questions"></question-card>
    
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
      questionList: [],
      hasSubmit: false
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
        index: 3,
        content: "1 + 3 = ____",
        answer: "0_1_2_3"
      },{
        question_id: "111",
        index: 2,
        content: "1 + 2 = ____",
        answer: "0_1_2_3"
      },{
        question_id: "222",
        index: 1,
        content: "1 + 1 = ____",
        answer: "0_1_2_3"
      },{
        question_id: "333",
        index: 4,
        content: "1 + 4 = ____",
        answer: "0_1_2_3"
      }]
      for (let q of this.questionList) {
        q.content = q.index + ".\xa0\xa0" + q.content
      }
      this.questionList.sort(function(a, b){
        return a.index - b.index
      })
    },

    submit() {
      for (let q of this.$refs.questions){
        // To Do
        console.log(q.select)
        if (q.select === "") {
          this.$confirm('题目未全部完成,是否提交', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            
          }).catch(() => {
            
          })
        }
      }
      this.hasSubmit = true
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
