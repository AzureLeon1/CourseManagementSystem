<template>
 <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="corp-form">
  <el-form-item label="社团名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="社团类型" prop="corptype">
    <el-select v-model="ruleForm.corptype" placeholder="请选择社团类型">
      <el-option label="传统文化与文学类" value="传统文化与文学类"></el-option>
      <el-option label="文艺娱乐类" value="文艺娱乐类"></el-option>
      <el-option label="学术科学类" value="学术科学类"></el-option>
      <el-option label="公益实践类" value="公益实践类"></el-option>
      <el-option label="体育竞技类" value="体育竞技类"></el-option>
      <el-option label="职业发展类" value="职业发展类"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="申请人信息" required>
    <el-col :span="11">
      <el-form-item prop="master_name">
        <el-input v-model="ruleForm.master_name" placeholder="申请人姓名" style="width: 100%;"></el-input>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2"></el-col>
    <el-col :span="11">
      <el-form-item prop="master_id">
        <el-input v-model="ruleForm.master_id" placeholder="申请人学号" style="width: 100%;"></el-input>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="指导教师" required>
    <el-col :span="11">
      <el-form-item prop="instructor_name">
        <el-input v-model="ruleForm.instructor_name" placeholder="指导教师姓名" style="width: 100%;"></el-input>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2"></el-col>
    <el-col :span="11">
      <el-form-item prop="instructor_id">
        <el-input v-model="ruleForm.instructor_id" placeholder="指导教师工号" style="width: 100%;"></el-input>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="社团简介" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item label="头像">
        <div style="display: flex; align-items: center;">
        <Avatar :size="40" :src="ruleForm.avatar" style="margin-right: 10px;"/>
        <span v-if="progress && progress - 100">上传进度 {{progress}}%</span>
        <el-upload 
        v-else
        :show-file-list="false"
        :action="action" 
        :data="{ token: token() }"
        :on-success="handleSuccess"
        :on-progress="handleProgress"
        >
        <el-button size="small">上传头像</el-button>
        </el-upload>
        </div>
  </el-form-item>
   <el-form-item label="背景图片">
        <div style="display: flex; align-items: center;">
        <Avatar :size="40" :src="ruleForm.bg_image" style="margin-right: 10px;"/>
        <span v-if="progress1 && progress1 - 100">上传进度 {{progress}}%</span>
        <el-upload 
        v-else
        :show-file-list="false"
        :action="action" 
        :data="{ token: token() }"
        :on-success="handleSuccess_bg"
        :on-progress="handleProgress_bg"
        >
        <el-button size="small">上传背景</el-button>
        </el-upload>
        </div>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
 </el-form>
</template>

<script>
  import {token,action,domain} from "../plugins/qiniuToken"
  import Avatar from '@/components/Avatar'

  export default {
    name: 'createcorp',
    components: {
        Avatar
    },
    data() {
      return {
        token,
        action,
        domain,
        progress: 0,
        progress1: 0,
        ruleForm: {
          name: '',
          corptype: '',
          master_name: '',
          master_id: '',
          instructor_name: '',
          instructor_id: '',
          type: [],
          resource: '',
          desc: '',
          avatar:'',
          bg_image:'',
        },
        rules: {
          name: [
            { required: true, message: '请输入社团名称', trigger: 'blur' },
            { min: 3, max: 25, message: '长度在 3 到 25 个字符', trigger: 'blur' }
          ],
          corptype: [
            { required: true, message: '请选择社团类型', trigger: 'change' }
          ],
          master_name: [
            { required: true, message: '请输入姓名', trigger: 'blur' }
          ],
          master_id: [
            { required: true, message: '请输入学号', trigger: 'blur' },
            { min: 7, max: 7, message: '长度为 7 位数字', trigger: 'blur' },
            { type: 'number', message: '请输入数字格式', trigger: 'blur', transform(value) {
                return Number(value);
            }}
          ],
          instructor_name: [
            { required: true, message: '请输入姓名', trigger: 'change' }
          ],
          instructor_id: [
            { required: true, message: '请输入工号', trigger: 'blur' },
            { min: 5, max: 7, message: '长度为 5-7 位数字', trigger: 'blur' },
            { type: 'number', message: '请输入数字格式', trigger: 'blur', transform(value) {
                return Number(value);
            }}
          ],
          desc: [
            { required: true, message: '请填写社团简介', trigger: 'blur' },
            { max: 150, message: '长度为 150 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm: function(formName) {
        console.log("测试")
        console.log(this.ruleForm)
        this.$store.dispatch('allpost/createCorp',{
          "name": this.ruleForm.name,
          "type": this.ruleForm.corptype,
          'introduction': this.ruleForm.desc,
          'teacher_ID': this.ruleForm.instructor_id,
          'avatar': this.ruleForm.avatar,
          'bg_avatar': this.ruleForm.bg_image, 
          'teacher_name': this.ruleForm.instructor_name,
        });
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$emit('next')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleProgress (event, file, fileList) {
            this.progress = parseInt(event.percent)
        },
      handleSuccess (response, file, fileList) {
            // console.log(response, file, fileList)
            this.progress = 100
            this.ruleForm.avatar = this.domain + response.hash
            this.$message({
                message:'图片上传成功~',
                type:'success'
            })
        },
      handleProgress_bg (event, file, fileList) {
            this.progress = parseInt(event.percent)
        },
      handleSuccess_bg (response, file, fileList) {
            // console.log(response, file, fileList)
            this.progress = 100
            this.ruleForm.bg_image = this.domain + response.hash
            this.$message({
                message:'图片上传成功~',
                type:'success'
            })
        },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>