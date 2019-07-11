<template>
  <div class="questionListBox">
    <div
      style="text-align:center; font-size:18px"
      v-if="!hasStart">考试未开始!</div>

    <div v-else>
      <h2 style="margin-bottom: 20px; font-size:18px">{{title}}</h2>

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
      questionAnswers: [],
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
        console.log("examquestions", res)
        this.title = res.title
        this.questionList = res.questions
        this.startTime = res.start_time
        this.endTime = res.end_time
        if (this.user.role == "student") {
          this.hasDone = res.exam_status
          this.getState()
          if (this.hasDone) {
            this.score = this.total_score
          }
        }
        for (let q of this.questionList) {
          q.content = q.index + ".\xa0\xa0" + q.content
        }
        this.questionList.sort(function(a, b){
          return a.index - b.index
        })
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
      console.log("time",strDate,this.startTime)
      if (strDate >= this.startTime) {
        this.hasStart = true
      }
      if (!this.hasDone && strDate > this.endTime) {
        this.hasDone = true
      }
    },

    submitForm() {
      this.questionAnswers = []
      for (let q of this.$refs.questions) {
        this.questionAnswers.push({
          answer: q.answer,
          question_id: q.question_id
        })
      }
      api.submitExam({
        exam_id: this.$route.params.exam_id,
        questions: this.questionAnswers
      }).then(res => {
        this.hasSubmit = true
        this.$message.success("提交成功")
        this.$router.push({
          name: "CheckExam",
          params: {
            exam_id: this.$route.params.exam_id
          }
        })
      })
    },

    submit() {
      var allChecked = true
      for (let q of this.$refs.questions){
        if (q.answer === "") {
          this.allChecked = false
          break
        }
      }
      if (!allChecked) {
        this.$confirm('题目未全部完成,是否提交', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning' 
        }).then(() => {
          this.submitForm()
        }).catch(() => {
          return
        })
      } else {
        this.submitForm()
      }
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
