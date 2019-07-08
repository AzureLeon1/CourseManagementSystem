<template>
  <el-row class="SQBox">
    <el-row>
      <el-col :span="13" :offset="1">
        <el-table
          :data="totalQuestions"
          @select="selectQuestion">
          <el-table-column 
            type="selection"
            width="50"></el-table-column>
          <el-table-column label="题目">
            <template slot-scope="scope">
              {{ scope.row.content }}
              <br/>
              <span
                v-for="(item, index) in scope.row.answer.split('_')"
                :key="index">
                {{item}}<el-divider direction="vertical"></el-divider>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="7" :offset="2" class="sList">
        <SlickList lockAxis="y" v-model="questions">
          <div style="margin-bottom: 20px">试卷题目(拖拽改变顺序）</div>
          <SlickItem 
            v-for="(q, index) in questions" 
            :key="q.question_id"
            :index="index">
            <el-row v-if="q.content.length < 40">{{q.content}}</el-row>
            <el-row v-else>{{q.content.slice(0,40)}}......</el-row>
            <span style="color: gray; font-size: 14px">分数</span>
            <el-input-number
              v-model="q.score"
              :min="1"
              label="分数"
              controls-position="right"
              size="mini"
              style="margin-top:20px">分数</el-input-number>
            <el-divider style="margin: 12px 0;"></el-divider>
          </SlickItem>
        </SlickList>
      </el-col>
    </el-row>

    <el-row style="margin-top: 60px">
      <el-col :span="23" :offset="1">
        <el-button type="primary" @click="submit">确定</el-button>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
import {SlickList, SlickItem} from 'vue-slicksort'

export default {
  name: 'SelectQuestion',

  components: {
    SlickList,
    SlickItem
  },
  
  data() {
    return {
      totalQuestions: [],
      questions: []
    };
  },

  methods: {
    getData() {
      // To Do : get all questions
      this.totalQuestions = [{
        question_id: "000",
        content: "1 + 1 = ____",
        answer: "0_1_2_3"
      },{
        question_id: "111",
        content: "1 + 2 = ____",
        answer: "0_1_2_3"
      },{
        question_id: "222",
        content: "1 + 3 = ____",
        answer: "0_1_2_3"
      },{
        question_id: "333",
        content: "1 + 4 = ____",
        answer: "0_1_2_3"
      }]
    },
    selectQuestion(s, r) {
      if (s.length > this.questions.length) {
        this.questions.push(r)
      } else {
        for (let i = 0; i < this.questions.length; ++i) {
          if (this.questions[i].question_id == r.question_id) {
            this.questions.splice(i,1)
            return
          }
        }
      }
    },
    submit() {
      if (this.questions.length === 0) {
        this.$message.error("试卷不能为空")
        return
      }
      for (let i = 1; i <= q.length; ++i) {
        this.questions[i-1].index = i
      }
      // To Do
    }
  },
  
  mounted() {
    this.getData()
  }
}
</script>

<style>
.SQBox {
  margin-top: 25px;
}

.SQBox .sList {
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  padding: 20px;
}
</style>
