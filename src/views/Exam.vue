<template>
  <el-container class="examBox">
    <el-aside width="260px">
      <class-nav :activeIndex="3"></class-nav>
    </el-aside>
    <el-main>
      <exam-list></exam-list>

      <div class="createExamBtn" v-if="user.role=='teacher_edu'">
        <el-button 
          @click="createExam" 
          type="primary" 
          icon="el-icon-plus" 
          circle></el-button>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import ClassNav from "../components/ClassNav"
import ExamList from "../components/ExamList"

export default {
  name: 'Exam',

  components: {
    ClassNav,
    ExamList
  },
  
  data () {
    return {
      user: this.$store.state.profile.user
    }
  },

  methods: {
    createExam() {
      this.$router.push({
        name: "NewExam"
      })
    }
  }
}
</script>

<style>
.examBox .createExamBtn {
  position: fixed;
  z-index: 2;
  bottom: 30px;
  right: 30px;
  font-size: 16px;
}

.examBox .createExamBtn .el-button {
  width: 66px;
  height: 66px;
  font-size: 25px;
}
</style>
