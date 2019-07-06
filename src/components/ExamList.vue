<template>
  <div class="examListBox">
    <exam-card 
      v-for="exam in examList"
      :key="exam.exam_id"
      :examInfo="exam"></exam-card>
    
    <div class="createExamBtn" v-if="user.role=='teacher'">
      <el-button 
        @click="createExam" 
        type="primary" 
        icon="el-icon-plus" 
        circle></el-button>
    </div>
  </div>
</template>

<script>
import ExamCard from "./ExamCard"

export default {
  data() {
    return {
      examList: [],
      user: ""
    }
  },

  components: {
    ExamCard
  },

  methods: {
    getData() {
      // To Do: get all exams
      this.examList = [{
        exam_id: 111,
        title: "数据库期中考试",
        scope: "前五章",
        type: "期中考试",
        start_time: "2019.11.11 14:00",
        end_time: "2019.11.11 16:00",
        hasDone: false
      },{
        exam_id: 222,
        title: "数据库期末考试",
        scope: "整本书",
        type: "期末考试",
        start_time: "2018.01.11 14:00",
        end_time: "2018.01.11 16:00",
        hasDone: false
      }]
      // To Do : get user
      this.user = JSON.parse(localStorage.getItem("currentUser"))
      if (!this.user) {
        this.user = {
          role: ""
        }
      }
      for(let e of this.examList) {
        e.userRole = this.user.role
        // To Do : get course
        e.course = "数据库"
      }
    },

    createExam() {
      // To Do
    }
  },

  mounted() {
    this.getData()
  }
}
</script>

<style>
.examListBox .createExamBtn {
  position: fixed;
  z-index: 2;
  bottom: 30px;
  right: 30px;
  font-size: 16px;
}

.examListBox .createExamBtn .el-button {
  width: 66px;
  height: 66px;
  font-size: 25px;
}
</style>
