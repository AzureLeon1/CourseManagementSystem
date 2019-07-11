<template>
  <div class="card">
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


      <!-- float: Add button -->
    <div class="addbutton-wrapper formanager" v-if="user_role == 'teacher_edu'">
      <!-- <el-button @click="showCreateMsgPanel"-->
      <el-button
        @click="showUploadPanel"
        type="primary"
        icon="el-icon-upload2"
        circle
      >
        <!-- <i class="el-icon-plus"></i> -->
      </el-button>
    </div>

    <!-- float: Add popover -->
    <transition name="el-fade-in-linear">
      <CoursewareUpload ref="upload" v-on:hideUpload="hideUpload" v-on:upload="upload"></CoursewareUpload>
    </transition>

    </div>

</template>
<script>
import CoursewareUpload from '@/components/CoursewareUpload'
import api from '@/api/index.js'
export default {
  name: "Coursewarelist",
  components: {
    CoursewareUpload
  },
  data() {
    return {
      request_body: {},
      allCourseList: [],
      filteredList: [],
      searchkey: "",
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
      console.log(this.request_body);
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
            this.$message({
              type: "success",
              message: "删除成功～"
            })
            this.getData()
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

    showUploadPanel(){
      this.upload = this.$refs.upload;
      this.upload.form.name = ''
      this.upload.form.location = ''
      this.upload.showUpload=true;
    },

    upload(form) {
      // 补充班级信息
      form.course_id = this.course_id
      form.sec_id = this.sec_id
      form.semester = this.semester
      form.year = this.year
      console.log(form);
      this.upload.showUpload = false;
      api.uploadCourseware(form)
        .then(res => {
          // 上传成功，重新获取课件列表
          if (res.status == 200) {
            this.$message({
              type: "success",
              message: "上传成功"
            })
            this.getData()
          }
        })
    },

    hideUpload() {
      this.upload = this.$refs.upload;
      this.upload.showUpload = false;
    }


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

<style scoped>

.addbutton-wrapper {
  position: fixed;
  z-index: 1;
  right: 9%;
  bottom: 25%;
}

</style>

.card{
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  /* border: 1px solid #ebeef5;
  border-radius: 4px; */
}
</style>
