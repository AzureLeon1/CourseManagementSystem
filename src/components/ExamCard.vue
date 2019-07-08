<template>
  <el-card class="examCardBox">
    <div slot="header" class="clearfix">
      <span>{{examInfo.title}}</span>
      <el-button
        style="float: right; padding: 3px 0" 
        type="text"
        v-if="examInfo.userRole=='teacher_edu'"
        @click="checkDetail">查看考试情况</el-button>
      <el-button
        style="float: right; padding: 3px 0" 
        type="text"
        v-else-if="examInfo.hasDone"
        @click="enterExam('CheckExam')">查看成绩</el-button>
      <el-button
        style="float: right; padding: 3px 0"
        type="text"
        v-else-if="hasStart"
        @click="enterExam('AnswerExam')">参加考试</el-button>
      <el-button
        style="float: right; padding: 3px 0" 
        type="text"
        disabled
        v-else>参加考试</el-button>
    </div>
    <div class="examCardContent">
      <el-row>{{examInfo.course}}&nbsp;|&nbsp;{{examInfo.type}}</el-row>
      <el-row style="color: #409eff">开始时间:&nbsp;{{examInfo.start_time}}</el-row>
      <el-row style="color: #f56c6c">截止时间:&nbsp;{{examInfo.end_time}}</el-row>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      hasStart: false,
      user: Object
    }
  },

  props: {
    examInfo: Object
  },

  methods: {
    getData() {
      // has the exam started or ended
      var date = new Date()
      var month = date.getMonth() + 1
      var day = date.getDate()
      var hours = date.getHours()
      var minutes = date.getMinutes()
      var strDate = "" + date.getFullYear() + "." + 
        (month<10?"0"+month:month) + "." + (day<10?"0"+day:day) + " " + 
        (hours<10?"0"+hours:hours) + ":" + (minutes<10?"0"+minutes:minutes)
      if (strDate >= this.examInfo.start_time) {
        this.hasStart = true
      }
      if (!this.examInfo.hasDone && strDate > this.examInfo.end_time) {
        this.examInfo.hasDone = true
      }
    },
    checkDetail() {
      this.$router.push({
        name: "ExamDetail",
        params: {
          class_id: '1',
          exam_id: this.examInfo.exam_id
        }
      })
    },
    enterExam(rName) {
      this.$router.push({
        name: rName,
        params: {
          class_id: '1',
          exam_id: this.examInfo.exam_id
        }
      })
    }
  },

  mounted() {
    this.getData()
  }
}
</script>

<style>
.examCardBox {
  width: 60%;
  margin: 20px auto;
}

.examCardBox .examCardContent .el-row {
  margin: 10px 0 10px 10px;
}
</style>
