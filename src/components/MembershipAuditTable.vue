<template>
  <el-row class="questionTableBank">
    <el-col :span="22" :offset="1">
      <el-table
        :data="studentToBeAudited">
        <el-table-column label="学号" prop="student_id"></el-table-column>
        <el-table-column label="姓名" prop="student_name"></el-table-column>
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
export default {
  name: "MembershipAuditTable",

  data() {
    return {
      studentToBeAudited: []
    };
  },

  methods: {
    getData() {
      // To Do : get all students
      this.studentToBeAudited = [{
        student_id: "111",
        student_name: "施程航"
      },{
        student_id: "111",
        student_name: "施程航"
      },{
        student_id: "111",
        student_name: "施程航"
      },{
        student_id: "111",
        student_name: "施程航"
      },{
        student_id: "111",
        student_name: "施程航"
      }]
    },
    allow(r) {
      // To Do : 
    },
    refuse(r) {
      // To Do :
    }
  },

  mounted() {
    this.getData();
  }
};
</script>

<style>

</style>
