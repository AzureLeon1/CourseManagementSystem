<template>
  <el-container class="home">
    <el-aside width="260px">
      <class-nav :activeIndex="6"></class-nav>
    </el-aside>
    <el-main>
      <el-row>
        <el-col :span="22" :offset="1">
          <el-table
            :data="students">
            <el-table-column label="学号" prop="user_id"></el-table-column>
            <el-table-column label="姓名" prop="user_name"></el-table-column>
            <el-table-column label="学院" prop="department"></el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
  
</template>

<script>
import api from "../api"
import ClassNav from "../components/ClassNav"

export default {
  name: "ClassMemebers",

  data() {
    return {
      students: []
    };
  },

  components: {
    ClassNav
  },

  methods: {
    getData() {
      api.getAllStudents({
        sec_id: this.classInfo.sec_id,
        course_id: this.classInfo.course_id,
        semester: this.classInfo.semester,
        year: this.classInfo.year
      }).then(res => {
        this.students = res.students
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
