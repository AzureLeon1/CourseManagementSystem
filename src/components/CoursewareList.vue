<template>
  <el-card shadow="never" style="width: 60%; margin-left: auto; margin-right: auto;">
    <div>
      <el-input v-model="searchkey" placeholder="请输入课件名称" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="searchCourseware()"></el-button>
      </el-input>
    </div>

    <div style="text-align: left;">
      <el-table :data="allCourseList">
        <el-table-column prop="name" label="名称"></el-table-column>
        <!-- <el-table-column prop="location" label="下载地址"></el-table-column> -->
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handlepreview(scope.row)">下载</el-button>

            <el-button
              v-if="user_role == 'teacher_edu'"
              size="mini"
              @click="handleDelete(scope.row)"
            >删除</el-button>

          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>
<script>
import api from '@/api/index.js'
export default {
  name: "Coursewarelist",
  data() {
    return {
      request_body: {},
      allCourseList: [],
      filteredList: [],
      searchkey: ""
    };
  },
  methods: {
    getData() {
      this.request_body = {
        course_id: this.course_id,
        sec_id: this.sec_id,
        semester: this.semester,
        year: this.year
      }
      api.getCourseware(this.request_body)
        .then(res => {
          this.allCourseList = res
          console.log(this.allCourseList);
        })
    },
    searchCourseware() {
      console.log(this.searchkey == '');
    },
    handlepreview(row) {
      window.open(row.location)
    },
    handleDelete(row) {
      api.deleteCourseware(row.courseware_id)
        .then(res => {
          // 删除成功，重新获取课件列表
          if (res.status == 200) {

          }
        })
    },
    handleUpload() {
      var form = {
        course_id: this.course_id,
        sec_id: this.sec_id,
        semester: this.semester,
        year: this.year,
        // TODO: 更新name和location
        name: null,
        location: null,
      }
      api.uploadCourseware(form)
        .then(res => {
          // 上传成功，重新获取课件列表
          if (res.status == 200) {

          }

        })
      },
      filter() {
      if (this.searchkey == '') {
        this.filteredList = this.allCourseList
      }
      else {
        // TODO: 过滤
      }
    },


  },
  mounted() {
    this.allCourseList = []
    this.filteredList = []
    // 请求数据
    this.getData()
  },
  computed: {
    course_id() {
      return this.$store.state.classinfo.classinfo.course_id
    },
    sec_id() {
      return this.$store.state.classinfo.classinfo.sec_id
    },
    semester() {
      return this.$store.state.classinfo.classinfo.semester
    },
    year() {
      return this.$store.state.classinfo.classinfo.year
    },
    user_role() {
      return this.$store.state.profile.user.role
    }
  }
};
</script>

