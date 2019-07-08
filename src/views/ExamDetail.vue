<template>
  <el-container class="examDetail">
    <el-aside width="260px">
      <user-nav :activeIndex="0"></user-nav>
    </el-aside>
    <el-main>
      <exam-detail-box></exam-detail-box>
    </el-main>
  </el-container>
</template>

<script>
import UserNav from "../components/UserNav"
import ExamDetailBox from "../components/ExamDetailBox"

export default {
  name: 'ExamDetail',

  components: {
    UserNav,
    ExamDetailBox
  },
  
  data () {
    return {
      
    }
  },

  methods: {
    
  }
}
</script>

<style>
.examDetail {
  
}
</style>
