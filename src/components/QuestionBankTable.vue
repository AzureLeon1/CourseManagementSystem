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
              @click="updateQuestion(scope.row)">修改</el-button>
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
  </el-row>
</template>

<script>
export default {
  name: "QuestionBankTable",

  data() {
    return {
      questions: [],
      deleteVisible: false
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
      console.log(qs)
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
    updateQuestion(r) {
      // To Do
    }
  },

  mounted() {
    this.getData();
  }
};
</script>

<style>

</style>
