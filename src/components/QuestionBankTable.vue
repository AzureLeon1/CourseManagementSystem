<template>
  <el-row class="questionTableBank">
    <el-col :span="22" :offset="1">
      <el-table
        :data="questions"
        @selection-change="selectQuestion">
        <el-table-column 
          type="selection"
          width="50"></el-table-column>
        <el-table-column label="题目">
          <template slot-scope="scope">
            {{ scope.row.content }}
            <br/>
            <span
              v-for="(item, index) in scope.row.options.split('_')"
              :key="index">
              {{item}}<el-divider direction="vertical"></el-divider>
            </span>
            <br/>
            <span style="color: gray">
              答案: {{scope.row.answer}}
            </span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button 
              type="text"
              size="mini"
              @click="updateQuestion(scope.row, scope.$index)">修改</el-button>
            <el-button
              type="text"
              size="mini"
              @click="deleteQuestion(scope.row)"
              style="color: #F56C6C">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-button
        type="text"
        v-if="deleteVisible"
        @click="deleteSelectedQuestion()"
        style="color: #F56C6C; margin-top: 20px">删除所选</el-button>
    </el-col>

    <el-dialog
      :visible.sync="dialogVisible"
      title="修改题目">
      <el-form
        :model="updateForm"
        label-width="70px"
        ref="updateForm"
        label-position="left"
        class="updateQuestionFormBox">
        <el-form-item
          prop="content"
          label="题目"
          :rules="[
            { required: true, message: '题目不能为空', trigger: 'blur' },
            { max: 100, message: '输入过长', trigger: 'blur' }
          ]">
          <el-input v-model="updateForm.content"></el-input>
        </el-form-item>
        <el-form-item
          prop="answer"
          label="答案"
          :rules="[
            { required: true, message: '答案不能为空', trigger: 'blur' },
            { max: 20, message: '输入过长', trigger: 'blur' }
          ]">
          <el-input v-model="updateForm.answer"></el-input>
        </el-form-item>
        <el-form-item
          v-for="(option, index) in updateForm.options"
          :label="'选项' + (index+1)"
          :key="index"
          :prop="'options[' + index + ']'"
          :rules="[
            {required: true, message: '选项不能为空', trigger: 'blur'}
          ]">
          <el-input v-model="updateForm.options[index]"></el-input>
          <el-button
            type="danger"
            icon="el-icon-close"
            @click="removeOption(option)"
            circle
            size="mini"></el-button>
        </el-form-item>
        <el-button
          type="primary"
          @click="addOption()"
          size="mini">添加选项</el-button>
      </el-form>

      <span slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitUpdateQuestion">确 定</el-button>
      </span>
    </el-dialog>
  </el-row>
</template>

<script>
export default {
  name: "QuestionBankTable",

  data() {
    return {
      questions: [],
      deleteVisible: false,
      dialogVisible: false,
      updateForm: {
        content: "",
        options: [],
        chapter: "",
        answer: ""
      },
      updateQuestionIndex: -1
    };
  },

  methods: {
    getData() {
      // To Do : get all questions
      this.questions = [{
        question_id: "000",
        content: "1 + 3 = ____",
        options: "1_2_3_4",
        answer: "4"
      },{
        question_id: "111",
        content: "1 + 2 = ____",
        options: "0_1_2_3",
        answer: "3"
      },{
        question_id: "222",
        content: "1 + 1 = ____",
        options: "0_1_2_3",
        answer: "2"
      },{
        question_id: "333",
        content: "1 + 4 = ____",
        options: "0_5_2_3",
        answer: "5"
      }]
    },
    selectQuestion(qs) {
      if (qs.length > 0) {
        this.deleteVisible = true
      } else {
        this.deleteVisible = false
      }
    },
    deleteQuestion(r) {
      // To Do
    },
    deleteSelectedQuestion() {
      // To Do
    },
    newQuestion() {
      // To Do
    },
    updateQuestion(r, i) {
      this.dialogVisible = true
      this.updateForm = {
        content: "",
        options: [],
        chapter: "",
        answer: ""
      }
      this.updateForm.content = r.content
      this.updateForm.answer = r.answer
      this.updateForm.chapter = r.chapter
      for (let o of r.options.split('_')) {
        this.updateForm.options.push(o)
      }
      this.updateQuestionIndex = i
      this.dialogVisible = true
    },
    submitUpdateQuestion() {
      this.$refs['updateForm'].validate((valid) => {
        if (valid) {
          if (this.updateForm.options.indexOf(this.updateForm.answer) == -1) {
            this.$message.error("答案未在选项中")
            return
          }
          this.updateForm.options = this.updateForm.options.join("_")
          if (this.updateForm.options.length > 198) {
            this.$message.error("选项总长过长")
            return
          }
          console.log(this.updateForm)
          // To Do : api
          this.$message.success("修改成功")
          this.dialogVisible = false
        } else {
          return
        }
      })
    },
    removeOption(o) {
      if (this.updateForm.options.length <= 1) {
        this.$message.error("选项不能少于一个")
        return
      }
      var index = this.updateForm.options.indexOf(o)
      if (index != -1) {
        this.updateForm.options.splice(index,1)
      } else {
        this.$message.error("错误")
      }
    },
    addOption() {
      this.updateForm.options.push("")
    }
  },

  mounted() {
    this.getData();
  }
};
</script>

<style>
.updateQuestionFormBox .el-input {
  width: 80%;
}
</style>
