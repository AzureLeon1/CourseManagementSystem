<template>
  <el-form 
    :model="examForm" 
    :rules="rules" 
    ref="examForm" 
    label-width="100px" 
    class="examFormBox">
    <el-form-item label="考试名称" prop="title">
      <el-input v-model="examForm.title"></el-input>
    </el-form-item>
    <el-form-item label="考试类型" prop="type">
      <el-select v-model="examForm.type" placeholder="请选择考试类型">
        <el-option label="期中考试" value="期中考试"></el-option>
        <el-option label="期末考试" value="期末考试"></el-option>
        <el-option label="小测" value="小测"></el-option>
        <el-option label="补考" value="补考"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="考试范围" prop="scope">
      <el-input v-model="examForm.scope"></el-input>
    </el-form-item>
    <el-form-item label="开始时间" prop="startTime">
      <el-date-picker 
        type="datetime" 
        placeholder="选择开始时间" 
        v-model="examForm.startTime"
        format="yyyy.MM.dd  HH:mm"></el-date-picker>
    </el-form-item>
    <el-form-item label="结束时间" prop="endTime">
      <el-date-picker 
        type="datetime" 
        placeholder="选择结束时间" 
        v-model="examForm.endTime"
        format="yyyy.MM.dd  HH:mm"></el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit()">创建</el-button>
      <el-button @click="cancel()">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'NewExamForm',
  
  data() {
    return {
      examForm: {
        title: "",
        type: "",
        scope: "",
        startTime: "",
        endTime: ""
      },
      newExam: {
        title: "",
        type: "",
        scope: "",
        start_time: "",
        end_time: ""
      },
      rules: {
        title: [
          { required: true, message: '请输入考试名称', trigger: 'blur' },
          { max: 20, message: '输入过长', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请选择考试类型', trigger: 'change' }
        ],
        scope: [
          { required: true, message: '请输入考试范围', trigger: 'blur' },
          { max: 100, message: '输入过长', trigger: 'blur' }
        ],
        startTime: [
          { required: true, message: '请选择开始时间', trigger: 'change' }
        ],
        endTime: [
          { required: true, message: '请选择结束时间', trigger: 'change' }
        ],
      }
    };
  },

  methods: {
    getData() {
      
    },
    toTimeStr(date) {
      var month = date.getMonth() + 1
      var day = date.getDate()
      var hours = date.getHours()
      var minutes = date.getMinutes()
      var strDate = "" + date.getFullYear() + "." + 
        (month<10?"0"+month:month) + "." + (day<10?"0"+day:day) + " " + 
        (hours<10?"0"+hours:hours) + ":" + (minutes<10?"0"+minutes:minutes)

      return strDate
    },
    submit() {
      this.$refs['examForm'].validate((valid) => {
        if (valid) {
          this.newExam.start_time = this.toTimeStr(this.examForm.startTime)
          this.newExam.end_time = this.toTimeStr(this.examForm.endTime)
          if (this.newExam.start_time.split(" ")[0] != 
              this.newExam.end_time.split(" ")[0]) {
            this.$message.error("考试需在一天")
            return false
          }
          if (this.newExam.start_time >= this.newExam.end_time) {
            this.$message.error("时间错误")
            return false
          }
          this.newExam.title = this.examForm.title
          this.newExam.type = this.examForm.type
          this.newExam.scope = this.examForm.scope
          this.$emit("submitForm")
        } else {
          return false
        }
      });
    },
    cancel() {
      this.$router.push({
        name: "Exam"
      })
    }
  },
  
  mounted() {
    this.getData()
  }
}
</script>

<style>
.examFormBox {
  width: 40%;
  margin: 40px auto;
}

.examFormBox .el-select,
.examFormBox .el-date-editor {
  width: 100%;
}
</style>
