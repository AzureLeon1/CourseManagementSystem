<template>
  <el-container class="questionBankBox">
    <el-aside width="260px">
      <class-nav :activeIndex="6"></class-nav>
    </el-aside>
    <el-main>
      <membership-audit-table></membership-audit-table>
    </el-main>
  </el-container>
</template>

<script>
import ClassNav from "../components/ClassNav"
import MembershipAuditTable from "../components/MembershipAuditTable"

export default {
  name: 'QuestionBank',

  components: {
    ClassNav,
    MembershipAuditTable
  },

  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
