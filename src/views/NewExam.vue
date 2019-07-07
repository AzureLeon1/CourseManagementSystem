<template>
<el-container class="examBox">
    <el-aside width="260px">
      <user-nav :activeIndex="0"></user-nav>
    </el-aside>
    <el-main>
      <new-exam-form
        v-if="newFormVisible"
        v-on:submitForm="submitForm"
        ref="newExamForm"></new-exam-form>

      
    </el-main>
  </el-container>
</template>

<script>
import UserNav from "../components/UserNav"
import NewExamForm from "../components/NewExamForm"

export default {
  name: 'NewExam',

  components: {
    UserNav,
    NewExamForm
  },
  
  data() {
    return {
      newFormVisible: true,
      newExamForm: {}
    };
  },

  methods: {
    getData() {
      
    },
    submitForm() {
      this.newFormVisible = false
      this.newExamForm = this.$refs.newExamForm.examForm
    }
  },
  
  mounted() {
    this.getData()
  }
}
</script>

<style>

</style>
