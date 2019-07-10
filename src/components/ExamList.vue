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
import api from "../api"

export default {
  name: "ExamList",

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
      var classInfo = this.$store.state.classinfo.classinfo
      api.getClassExams({
        course_id: classInfo.course_id,
        sec_id: classInfo.sec_id,
        semester: clasInfo.semester,
        year: classInfo.year
      }).then(data => {
        this.examList = data
      })
      this.user = this.$store.state.profile.user;
      for(let e of this.examList) {
        e.userRole = this.user.role
        e.courseName = classInfo.name
      }
    }
  },

  mounted() {
    this.getData()
  }
}
</script> 

<style>

</style>
