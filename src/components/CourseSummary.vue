<template>
<div id="main"></div>
</template>

<script type="text/ecmascript-6">
import echarts from "echarts"
import "../../static/js/vintage"
    
export default{
  //从父组件中接收到的数据
  data(){
    //props:['value1','value2','value3','value4','value5']
    return{
      level:[1,1,1,3,7],
    };

},

methods:{
   drawPie() {
      // 画图
      document.getElementById("main").innerHTML = ""
      var myChart = echarts.init(document.getElementById("main"), "vintage")

      myChart.setOption({
        backgroundColor:"rgba(128, 128, 128, 0)",
        title: {
          left: "center"
        },
        tooltip: {
          trigger: 'item',
          formatter: "{b}: {c} ({d}%)"
        },
        legend: {
          bottom: 16,
          left: "center",
          data: ["优", "良", "中", "及格", "不及格"],
          textStyle:{
              color:"#fff",
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
                formatter: '{b}: {c} ({d}%)'
              }
            },
            data: [
              { value: this.level[0], name: "不及格",itemStyle:{color:"#f9bc5f"} },
              { value: this.level[1], name: "及格" ,itemStyle:{color:"#ea6953"}},
              { value: this.level[2], name: "中" ,itemStyle:{color:"#e88771"}},
              { value: this.level[3], name: "良" ,itemStyle:{color:"#edb4aa"}},
              { value: this.level[4], name: "优" ,itemStyle:{color:"#fca326"}}
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
    },
},

mounted(){
    this.drawPie();
  }
}

</script>

<style>
#main {
  width: 420px;
  height: 300px;
}
</style>