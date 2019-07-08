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
        v-model="examForm.startTime"></el-date-picker>
    </el-form-item>
    <el-form-item label="结束时间" prop="endTime">
      <el-date-picker 
        type="datetime" 
        placeholder="选择结束时间" 
        v-model="examForm.endTime"></el-date-picker>
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
    submit() {
      this.$refs['examForm'].validate((valid) => {
        if (valid) {
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
