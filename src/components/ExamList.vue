<template>
  <div class="examListBox">
    <exam-card 
      v-for="exam in examList"
      :key="exam.exam_id"
      :examInfo="exam"></exam-card>
  </div>
</template>

<script>
import ExamCard from "./ExamCard"

export default {
  data() {
    return {
      examList: []
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
    }
  },

  mounted() {
    this.getData()
  }
}
</script>

<style>

</style>
