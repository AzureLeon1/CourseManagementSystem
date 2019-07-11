<template>
  <el-row>
    <el-col :span="22" :offset="1">
      <el-table
        :data="studentToBeAudited">
        <el-table-column label="学号" prop="student_id"></el-table-column>
        <el-table-column label="姓名" prop="user_name"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button 
              type="text"
              size="mini"
              @click="allow(scope.row)">允许</el-button>
            <el-button
              type="text"
              size="mini"
              @click="refuse(scope.row)"
              style="color: #F56C6C">拒绝</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>

<script>
import api from "../api"

export default {
  name: "MembershipAuditTable",

  data() {
    return {
      studentToBeAudited: []
    };
  },

  methods: {
    getData() {
      api.getToBeAudited({
        sec_id: this.classInfo.sec_id,
        course_id: this.classInfo.course_id,
        semester: this.classInfo.semester,
        year: this.classInfo.year
      }).then(res => {
        this.studentToBeAudited = res.students_info
      })
    },
    allow(r) {
      this.joinOrNoe(1)
    },
    refuse(r) {
      this.joinOrNoe(0)
    },
    joinOrNoe(status) {
      api.joinClass({
        sec_id: this.classInfo.sec_id,
        course_id: this.classInfo.course_id,
        semester: this.classInfo.semester,
        year: this.classInfo.year,
        status: status
      }).then(res => {
        this.$message.success("操作成功")
        this.getData()
      })
    }
  },

  mounted() {
    this.getData();
  },

  computed: {
    classInfo() {
      return this.$store.state.classinfo.classinfo
    }
  }
};
</script>

<style>

</style>
