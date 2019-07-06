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

  methods: {
    getData() {
      // To Do: get all exams
      this.examList = [{
        exam_id: 111,
        scope: "前五章",
        type: "期中考试",
        start_time: "2019.11.11 14:00",
        end_time: "2019.11.11 16:00"
      },{
        exam_id: 111,
        scope: "整本书",
        type: "期末考试",
        start_time: "2019.1.11 14:00",
        end_time: "2019.1.11 16:00"
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
