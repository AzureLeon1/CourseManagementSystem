<template>
  <el-card style="width: 900px; margin:20px auto 20px auto">
    <div
      style=" vertical-align:middle; text-align:center;margin-left: auto;margin-right: auto;"
    >期末总结</div>
    <br />
    <el-carousel :interval="4000" type="card" height="500px" width="500px">
      <el-carousel-item v-for="item in cardList" :key="item.id">
        <div style="margin-left: auto;margin-right: auto;width:300px;height=500px">
          <h2 style="text-align:center">{{item.title}}</h2>
          <h3 style="text-align:left">{{item.words_1}}</h3>
          <div style="text-align:center; font-size:45px">{{item.tot_time}}</div>
          <h3 style="text-align:right">{{item.words_2}}</h3>
        </div>
      </el-carousel-item>
    </el-carousel>
    <!-- <div id="graph"></div> -->
  </el-card>
</template>


<script>
export default {
  name: "Summary",
  data() {
    return {
      sum_data: "",
      cardList: [
        {
          id: 1,
          title: "考试总结",
          words_1: "您已参加了",
          words_2: "次考试",
          tot_time:37
        },
        {
          id: 2,
          title: "考勤总结",
          words_1: "您所在的班级已发布了",
          words_2: "次考勤",
          tot_time: ""
        },
        {
          id: 3,
          title: "讨论总结",
          words_1: "您已发表了",
          words_2: "次讨论",
          tot_time: ""
        },
        {
          id: 4,
          title: "组队总结",
          words_1: "您已经加入了",
          words_2: "支队伍",
          tot_time: ""
        }
      ]
    };
  },
  methods:{
    getData() {
      // To Do : get exam title
      // To Do : get all scores
      scores = [
        {

          score: 100
        },
        {

          score: 89
        },
        {
         
          score: 79
        },
        {
 
          score: 69
        },
        {

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
  },
  computed: {
    tot_exam_time() {
      return "9";
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #b4bbc5;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3d7db;
}
</style>