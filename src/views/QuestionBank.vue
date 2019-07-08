<template>
  <el-container class="questionBankBox">
    <el-aside width="260px">
      <class-nav :activeIndex="8"></class-nav>
    </el-aside>
    <el-main>
      <question-bank-table></question-bank-table>
    </el-main>
  </el-container>
</template>

<script>
import ClassNav from "../components/ClassNav"
import QuestionBankTable from "../components/QuestionBankTable"

export default {
  name: 'QuestionBank',

  components: {
    ClassNav,
    QuestionBankTable
  },

  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
