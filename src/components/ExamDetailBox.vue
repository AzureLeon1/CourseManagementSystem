<template>
  <el-row class="examDetailBox">
    <el-row style="margin-bottom: 20px">
      <el-col :span="22" :offset="1">
        <span style="font-size:18px">{{examTitle}}</span>
        <el-button
          type="text"
          @click="changeView"
          style="margin-left: 20px">{{tipMsg}}</el-button>
      </el-col>
    </el-row>

    <div id="analysisBox">
      <el-row>
        <el-col :span="22" :offset="1">
          <el-table :data="scores">
            <el-table-column label="学号" prop="student_id"></el-table-column>
            <el-table-column label="姓名" prop="student_name"></el-table-column>
            <el-table-column label="分数">
              <template slot-scope="scope">
                <div :class="scope.row.scoreStyle">{{ scope.row.score }}</div>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>

      <el-row style="margin-top: 60px">
        <el-col :span="22" :offset="1">
          <div id="graph"></div>
        </el-col>
      </el-row>
    </div>

    <el-row id="questionBox">
      <el-col :span="22" :offset="1">
        <question-card 
          v-for="question in questionList"
          :key="question.question_id"
          :questionInfo="question"
          :showAnswer="true"></question-card>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
import echarts from "echarts"
import "../../static/js/vintage"
import api from "../api"
import QuestionCard from "./QuestionCard"

export default {
  name: "ExamDetailBox",

  data() {
    return {
      examTitle: "",
      scores: [],
      level: [],
      questionList: [],
      showAnalysis: true,
      tipMsg: "查看试卷"
    };
  },

  components: {
    QuestionCard
  },

  methods: {
    getData() {
      var classInfo = this.$store.state.classinfo.classinfo
      // get exam results
      api.checkExamResult({
        course_id: classInfo.course_id,
        sec_id: classInfo.sec_id,
        semester: classInfo.semester,
        year: classInfo.year,
        exam_id: this.$route.params.exam_id
      }).then(data => {
        console.log("examresult", data)
        this.scores = data
      })
      // get all questions
      api.getExamQuestions({
        course_id: classInfo.course_id,
        sec_id: classInfo.sec_id,
        semester: classInfo.semester,
        year: classInfo.year,
        exam_id: this.$route.params.exam_id
      }).then(data => {
        console.log("examquestions",data)
        this.questionList = data.questions
        this.title = data.title
      })
      // score style & 统计
      this.level = [0, 0, 0, 0, 0];
      for (let s of this.scores) {
        s.scoreStyle = "normalGrade";
        if (s.score < 60) {
          this.level[0] += 1;
          s.scoreStyle = "failGrade";
        } else if (s.score < 70) {
          this.level[1] += 1;
        } else if (s.score < 80) {
          this.level[2] += 1;
        } else if (s.score < 90) {
          this.level[3] += 1;
        } else {
          this.level[4] += 1;
          s.scoreStyle = "goodGrade";
        }
      }
      this.drawPie()
    },
    drawPie() {
      // 画图
      document.getElementById("graph").innerHTML = ""
      var myChart = echarts.init(document.getElementById("graph"), "vintage")
      myChart.setOption({
        title: {
          left: "center"
        },
        tooltip: {
          trigger: 'item',
          formatter: "{b}: {c} ({d}%)"
        },
        legend: {
          bottom: 10,
          left: "center",
          data: ["优", "良", "中", "及格", "不及格"]
        },
        series: [
          {
            type: "pie",
            radius: "65%",
            center: ["50%", "50%"],
            selectedMode: "single",
            label: {
              normal: {
                formatter: '{b}: {c} ({d}%)'
              }
            },
            data: [
              { value: this.level[0], name: "不及格" },
              { value: this.level[1], name: "及格" },
              { value: this.level[2], name: "中" },
              { value: this.level[3], name: "良" },
              { value: this.level[4], name: "优" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    },
    changeView() {
      this.showAnalysis = !this.showAnalysis
      if (this.showAnalysis) {
        this.tipMsg = "查看试卷"
        document.getElementById("questionBox").style.display = "none"
        document.getElementById("analysisBox").style.display = "block"
      } else {
        this.tipMsg = "查看统计"
        document.getElementById("questionBox").style.display = "block"
        document.getElementById("analysisBox").style.display = "none"
      }
    }
  },

  mounted() {
    this.getData();
  }
};
</script>

<style>
.examDetailBox {
  margin-top: 25px;
}

.goodGrade {
  color: #67c23a;
  font-weight: 600;
}

.normalGrade {
  color: #409eff;
  font-weight: 600;
}

.failGrade {
  color: #f56c6c;
  font-weight: 600;
}

#graph {
  width: 600px;
  height: 400px;
}

#questionBox {
  display: none;
}
</style>
