<template>
  <el-row class="exmaDetailBox">
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
  </el-row>
</template>

<script>
import echarts from "echarts"
import "../../static/js/vintage"

export default {
  name: "ExamDetailBox",

  data() {
    return {
      examTitle: "",
      scores: [],
      level: []
    };
  },

  methods: {
    getData() {
      // To Do : get exam title
      this.examTitle = "数据库期末考试";
      // To Do : get all scores
      this.scores = [
        {
          student_id: "000",
          student_name: "王亮",
          score: 100
        },
        {
          student_id: "111",
          student_name: "xxx",
          score: 89
        },
        {
          student_id: "222",
          student_name: "xxx",
          score: 79
        },
        {
          student_id: "333",
          student_name: "xxx",
          score: 69
        },
        {
          student_id: "444",
          student_name: "何立仁",
          score: 1
        }
      ];
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
      // 画图
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
    selectQuestion(s, r) {
      if (s.length > this.questions.length) {
        this.questions.push(r);
      } else {
        for (let i = 0; i < this.questions.length; ++i) {
          if (this.questions[i].question_id == r.question_id) {
            this.questions.splice(i, 1);
            return;
          }
        }
      }
    },
    submit() {
      if (this.questions.length === 0) {
        this.$message.error("试卷不能为空");
        return;
      }
      for (let i = 1; i <= q.length; ++i) {
        this.questions[i - 1].index = i;
      }
      // To Do
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
</style>
