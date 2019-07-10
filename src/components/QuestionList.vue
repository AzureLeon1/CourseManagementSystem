<template>
  <div class="questionListBox">
    <div
      style="text-align:center; font-size:18px"
      v-if="!hasStart">考试未开始!</div>

    <div v-else>
      <div style="margin-left: 20px; font-size:18px">{{title}}</div>

      <count-down 
        :endTime="endTime"
        v-on:timeOver="submit"
        v-if="!hasDone"></count-down>

      <question-card 
        v-for="question in questionList"
        :key="question.question_id"
        :questionInfo="question"
        :showAnswer="hasDone"
        ref="questions"></question-card>
      
      <div class="submitBtn">
        <div
          class="finalScoreBox"
          v-if="hasDone">最终得分: {{score}}</div>
        <el-button 
          @click="submit" 
          type="primary"
          v-else>提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionCard from "./QuestionCard"
import CountDown from "./CountDown"

import api from "../api"

export default {
  data() {
    return {
      questionList: [],
      hasSubmit: false,
      hasDone: false,
      hasStart: false,
      startTime: "",
      endTime: "",
      score: 0,
      title: ""
    }
  },

  components: {
    QuestionCard,
    CountDown
  },

  methods: {
    getData() {
      api.getExamQuestions({
        exam_id: this.$route.params.exam_id
      }).then(res => {
        this.title = res.title
        this.questionList = res.questions
        this.startTime = res.start_time
        this.endTime = res.end_time
        if (user.role == "student") {
          this.hasDone = res.exam_status
          this.getState()
          if (this.hasDone) {
            this.score = this.total_score
          }
        }
      })
      for (let q of this.questionList) {
        q.content = q.index + ".\xa0\xa0" + q.content
      }
      this.questionList.sort(function(a, b){
        return a.index - b.index
      })
    },

    getState() {
      var date = new Date()
      var month = date.getMonth() + 1
      var day = date.getDate()
      var hours = date.getHours()
      var minutes = date.getMinutes()
      var strDate = "" + date.getFullYear() + "." + 
        (month<10?"0"+month:month) + "." + (day<10?"0"+day:day) + " " + 
        (hours<10?"0"+hours:hours) + ":" + (minutes<10?"0"+minutes:minutes)
      if (strDate >= this.startTime) {
        this.hasStart = true
      }
      if (!this.hasDone && strDate > this.endTime) {
        this.hasDone = true
      }
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
  },

  computed: {
    user() {
      return this.$store.state.profile.user
    }
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

.questionListBox .finalScoreBox{
  margin-top: 20px;
  font-size: 18px;
  color: #409eff;
}
</style>
