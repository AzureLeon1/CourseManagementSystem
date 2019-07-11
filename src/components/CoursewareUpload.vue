<template>
  <el-dialog :visible.sync="showUpload" width="400px;">
    <div slot="title" class="title">上传课件</div>
    <div class="body" style="padding: 0 15px;">
      <el-form ref="form" :model="form" label-width="70px" label-position="left">
        <el-form-item label="课件名称">
          <el-input v-model="form.name" placeholder="请输入课件名称"></el-input>
        </el-form-item>

        <el-form-item label="选择课件">
          <span v-if="progress && progress - 100">上传进度 {{progress}}%</span>
            <el-upload
              v-else
              :show-file-list="true"
              :limit="1"
              :action="action"
              :data="{ token: token() }"
              :on-success="handleSuccess"
              :on-progress="handleProgress"
            >
              <el-button size="small">上传文件</el-button>
            </el-upload>
        </el-form-item>

        <el-form-item>
          <el-col :span="11" style="text-align: center;">
            <el-button type="primary" @click="upload">确认</el-button>
          </el-col>
          <el-col :span="7" style="text-align: center;">
            <el-button @click="cancelWindow">取消</el-button>
          </el-col>
        </el-form-item>
      </el-form>
    </div>
  </el-dialog>
</template>

<script>
import { token, action, domain } from "../plugins/qiniuToken";
export default {
  name: "CoursewareUpload",
  props: {
    showUpload: {
      default: false
    }
  },
  data() {
    return {
      token,
      action,
      domain,
      flag_true: true,
      form: {
        name: "",
        location: ""
      },
      progress: 0,
    };
  },
  methods: {
    cancelWindow() {
      // console.log("click cancelwindow()");
      this.$emit("hideUpload");
    },
    upload() {
      //调用父组件函数
      // console.log(this.form);
      console.log(this.form.location);
      if (this.form.name == "" || this.form.location == "")
      {
        this.$message({
          message: "请填写完整的课件信息",
          type: "error"
        })
        return
      }
      this.$emit("upload", this.form);
    },
    handleProgress(event, file, fileList) {
      this.progress = parseInt(event.percent);
    },
    handleSuccess(response, file, fileList) {
      this.progress = 100;
      this.form.location = this.domain + response.hash;
      this.$message({
        message: "文件上传成功~",
        type: "success"
      });
    },
  }
};
</script>

<style scoped>
.wrapper {
  /* position-center */
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* children element */
  display: flex;
  flex-direction: column;
  padding: 20px 40px 40px 40px;
  /* display */
  background: #fff;
  border-radius: 10px;
}

.title {
  text-align: center;
  font-size: 14px;
  letter-spacing: 0.2em;
  color: #888;
}

.close-btn {
  position: absolute;
  right: 10px;
  top: 10px;
}

.hidden {
  display: none;
}
</style>
