<template>
  <el-container class="questionBankBox">
    <el-aside width="260px">
      <user-nav :activeIndex="0"></user-nav>
    </el-aside>
    <el-main>
      <question-bank-table></question-bank-table>
    </el-main>
  </el-container>
</template>

<script>
import UserNav from "../components/UserNav"
import QuestionBankTable from "../components/QuestionBankTable"

export default {
  name: 'QuestionBank',

  components: {
    UserNav,
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
