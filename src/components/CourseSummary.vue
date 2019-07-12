<template>
  <div id="main"></div>
</template>

<script type="text/ecmascript-6">
import echarts from "echarts";
import "../../static/js/vintage";
import api from '../api/index.js'
export default {
  //从父组件中接收到的数据
  data() {
    return {
      level: [1, 1, 1, 3, 7],
      value1: 1,
      value2: 1,
      value3: 1,
      value4: 3,
      value5: 7
    };
  },
  // props: ["value1", "value2", "value3", "value4", "value5"],

  methods: {
    drawPie() {
      // 画图
      document.getElementById("main").innerHTML = "";
      var myChart = echarts.init(document.getElementById("main"), "vintage");

      myChart.setOption({
        backgroundColor: "rgba(128, 128, 128, 0)",
        title: {
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}: {c} ({d}%)"
        },
        legend: {
          bottom: 16,
          left: "center",
          data: ["优", "良", "中", "及格", "不及格"],
          textStyle: {
            color: "#fff"
          }
        },
        series: [
          {
            type: "pie",
            radius: "65%",
            center: ["50%", "50%"],
            selectedMode: "single",
            label: {
              normal: {
                formatter: "{b}: {c} ({d}%)"
              }
            },
            data: [
              {
                value: this.value1,
                name: "不及格",
                itemStyle: { color: "#f9bc5f" }
              },
              {
                value: this.value2,
                name: "及格",
                itemStyle: { color: "#ea6953" }
              },
              {
                value: this.value3,
                name: "中",
                itemStyle: { color: "#e88771" }
              },
              {
                value: this.value4,
                name: "良",
                itemStyle: { color: "#edb4aa" }
              },
              {
                value: this.value5,
                name: "优",
                itemStyle: { color: "#fca326" }
              }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.3)"
              }
            }
          }
        ]
      });
    }
  },

  mounted() {
    // this.leve1[0] = this.value1
    // this.leve1[1] = this.value2
    // this.leve1[2] = this.value3
    // this.leve1[3] = this.value4
    // this.leve1[4] = this.value5
    api.examSum().then(data => {
      console.log(data.exam_num);
      this.tot_tests = data.exam_num;
      this.value1 = 0;
      this.value2 = 0;
      this.value3 = 0;
      this.value4 = 0;
      this.value5 = 0;
      data.exams.forEach(element => {
        switch (element.grade) {
          case 1:
            this.value1++;
            break;
          case 2:
            this.value2++;
            break;
          case 3:
            this.value3++;
            break;
          case 4:
            this.value4++;
            break;
          case 5:
            this.value5++;
            break;
        }
      });
      this.drawPie();
    });

  }
};
</script>

<style>
#main {
  width: 420px;
  height: 300px;
}
</style>
