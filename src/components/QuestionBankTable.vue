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

    <div class="createQuestionBtn">
      <el-button
        @click="createQuestion" 
        type="primary" 
        icon="el-icon-plus" 
        circle></el-button>
    </div>

    <el-dialog
      :visible.sync="dialogVisible"
      :title="dialogTitle">
      <el-form
        :model="questionForm"
        label-width="70px"
        ref="questionForm"
        label-position="left"
        class="updateQuestionFormBox">
        <el-form-item
          prop="content"
          label="题目"
          :rules="[
            { required: true, message: '题目不能为空', trigger: 'blur' },
            { max: 100, message: '输入过长', trigger: 'blur' }
          ]">
          <el-input v-model="questionForm.content"></el-input>
        </el-form-item>
        <el-form-item
          prop="chapter"
          label="章节"
          :rules="[
            { required: true, message: '章节不能为空', trigger: 'blur' }
          ]">
          <el-input v-model="questionForm.chapter"></el-input>
        </el-form-item>
        <el-form-item
          prop="answer"
          label="答案"
          :rules="[
            { required: true, message: '答案不能为空', trigger: 'blur' },
            { max: 20, message: '输入过长', trigger: 'blur' }
          ]">
          <el-input v-model="questionForm.answer"></el-input>
        </el-form-item>
        <el-form-item
          v-for="(option, index) in questionForm.options"
          :label="'选项' + (index+1)"
          :key="index"
          :prop="'options[' + index + ']'"
          :rules="[
            {required: true, message: '选项不能为空', trigger: 'blur'}
          ]">
          <el-input v-model="questionForm.options[index]"></el-input>
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
        <el-button type="primary" @click="submitQuestionForm">确 定</el-button>
      </span>
    </el-dialog>
  </el-row>
</template>

<script>
import api from "../api"

export default {
  name: "QuestionBankTable",

  data() {
    return {
      questions: [],
      selectedQuestions: [],
      deleteVisible: false,
      dialogVisible: false,
      questionForm: {
        content: "",
        options: [],
        chapter: "",
        answer: ""
      },
      updateQuestionIndex: -1,
      dialogTitle: "",
      classInfo: {}
    };
  },

  methods: {
    getData() {
      this.classInfo = this.$store.state.classinfo.classinfo
      this.getAllQuestion()
    },
    getAllQuestion() {
      api.getAllQuesiton({
        course_id: this.classInfo.course_id
      }).then(data => {
        console.log("questionlist", data)
        this.questions = data
      })
    },
    createQuestion() {
      this.dialogVisible = true
      this.dialogTitle = "新建题目"
      this.questionForm = {
        content: "",
        options: [],
        chapter: "",
        answer: ""
      }
    },
    selectQuestion(qs) {
      if (qs.length > 0) {
        this.selectedQuestions = qs
        this.deleteVisible = true
      } else {
        this.deleteVisible = false
      }
    },
    deleteQuestion(r) {
      this.$confirm('是否删除题目?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        api.deleteQuestion({
          question_id: r.question_id
        }).then(res => {
          this.$message.success("删除成功")
          this.getAllQuestion()
        })
      }).catch(() => {      
      })
    },
    deleteSelectedQuestion() {
      for (let q of this.selectedQuestions) {
        api.deleteQuestion({
          question_id: r.question_id
        }).catch(() => {
          return
        })
      }
      this.$message.success("删除成功")
      this.getAllQuestion()
    },
    updateQuestion(r, i) {
      this.dialogVisible = true
      this.dialogTitle = "修改题目"
      this.questionForm = {
        question_id: r.question_id,
        content: "",
        options: [],
        chapter: "",
        answer: ""
      }
      this.questionForm.content = r.content
      this.questionForm.answer = r.answer
      this.questionForm.chapter = r.chapter
      for (let o of r.options.split('_')) {
        this.questionForm.options.push(o)
      }
      this.updateQuestionIndex = i
      this.dialogVisible = true
    },
    submitQuestionForm() {
      this.$refs['questionForm'].validate((valid) => {
        if (valid) {
          if (this.questionForm.options.indexOf(this.questionForm.answer) == -1) {
            this.$message.error("答案未在选项中")
            return
          }
          this.questionForm.options = this.questionForm.options.join("_")
          if (this.questionForm.options.length > 198) {
            this.$message.error("选项总长过长")
            return
          }
          this.questionForm.course_id = this.classInfo.course_id
          console.log(this.questionForm)
          this.dialogVisible = false
          if (this.dialogTitle === "新建题目") {
            api.newQuestion(this.questionForm)
            .then(res => {
              console.log("newq", res)
              this.getAllQuestion()
              this.$message.success("新建成功")
            })
          } else {
            api.updateQuestion(this.questionForm)
            .then(res => {
              console.log("updq", res)
              this.getAllQuestion()
              this.$message.success("修改成功")
            })
          }
        } else {
          return
        }
      })
    },
    removeOption(o) {
      if (this.questionForm.options.length <= 1) {
        this.$message.error("选项不能少于一个")
        return
      }
      var index = this.questionForm.options.indexOf(o)
      if (index != -1) {
        this.questionForm.options.splice(index,1)
      } else {
        this.$message.error("错误")
      }
    },
    addOption() {
      this.questionForm.options.push("")
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

.questionTableBank .createQuestionBtn {
  position: fixed;
  z-index: 2;
  bottom: 30px;
  right: 30px;
  font-size: 16px;
}

.questionTableBank .createQuestionBtn .el-button {
  width: 66px;
  height: 66px;
  font-size: 25px;
}
</style>
