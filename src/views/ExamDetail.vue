<template>
  <el-container class="examDetail">
    <el-aside width="260px">
      <class-nav :activeIndex="3"></class-nav>
    </el-aside>
    <el-main>
      <exam-detail-box></exam-detail-box>
    </el-main>
  </el-container>
</template>

<script>
import ClassNav from "../components/ClassNav"
import ExamDetailBox from "../components/ExamDetailBox"

export default {
  name: 'ExamDetail',

  components: {
    ClassNav,
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

</style>
