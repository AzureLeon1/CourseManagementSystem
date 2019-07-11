<template>
  <div id="summary">
    <el-carousel height="calc(100vh - 50px)" direction="vertical" :autoplay="true" :interval=7000>
      <el-carousel-item name='1'>
        <div id="absolute"><img src="./../assets/Summarybg1.png" style="width:100vw;height:calc(100vh - 50px);"></div>
        <div id="title">成绩总结</div>
        <div id="text">本学期您一共完成了
          <span style="font-size:32px;color:#fca326;">&nbsp;&nbsp;{{tot_tests}}&nbsp;&nbsp;</span>次考试</div>
        <div id="chart"><course-summary :value1="value1" :value2="value2" :value3="value3" :value4="value4" :value5="value5"></course-summary></div>
      </el-carousel-item>
      <el-carousel-item name='2'>
        <div id="absolute"><img src="./../assets/Summarybg2.png" style="width:100%"></div>
                <div id="title">讨论总结</div>
        <div class="dismiddle">
          <div class="dispart">
            <div id="text">本学期您一共发布了</div>
            <div style="font-size:36px;color:#fca326;font-weight:600;">{{tot_discussions}}</div>
            <div id="text">条评论</div>
          </div>
          <div class="dispart">
            <div id="text">参与的课程讨论数量为</div>
            <div style="font-size:36px;color:#e2808f;font-weight:600;">{{tot_discourses}}</div>
            <div id="text">门</div>
          </div>
          <div class="dispart">
            <div id="text">您所发布的讨论数目最多的课程为</div>
            <div style="font-size:36px;color:#efcc6b;font-weight:600;">{{dis_course}}</div>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item name='3'>
        <div id="absolute"><img src="./../assets/Summarybg3.png" style="width:100%"></div>
        <div id="title">出勤总结</div>
        <div class="dismiddle">
          <div class="dispart">
            <div id="text">本学期您所参加课程一共进行了</div>
            <div style="font-size:36px;color:#fca326;font-weight:600;">{{tot_attend}}</div>
            <div id="text">次点名</div>
          </div>
          <div class="dispart">
            <div id="text">您缺勤的次数为</div>
            <div style="font-size:36px;color:#e2808f;font-weight:600;">{{disattend}}</div>
            <div id="text">次</div>
          </div>
        </div>
        <div id="text" style="margin-top:11%">
          <div style="font-size:26px;color:#efcc6b;font-weight:600;">冰冻三尺远非一日之寒</div>
          <div style="font-size:26px;color:#efcc6b;font-weight:600;">百尺竿头亦可更进一步</div>
        </div>
      </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
import api from '../api/index.js'
import CourseSummary from "@/components/CourseSummary";

export default {
   name:"Summary",
   components:{
     CourseSummary
   },
   data () {
    return {
       tot_tests:13,
       tot_discussions:50,
       tot_discourses:8,
       tot_attend:42,
       disattend:6,
       dis_course:"数据库原理与应用",
      }
  },
  methods: {
    getData() {
      api.examSum()
        .then(data => {
          console.log(data.exam_num);
          this.tot_tests = data.exam_num
        })

      api.dissSum()
        .then(data => {
          this.dis_course = data.max_course_name
          this.tot_discussions = data.total_discussions
          this.tot_discourses = data.total_courses
        })

      api.attenSum()
        .then(data => {
          this.disattend = data.total_absent
          this.tot_attend = data.total_attendance
        })
    }
  },
  mounted(){
    this.getData()

  },
  computed: {

  }
}
</script>

<style>
#summary
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
#summary
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
#summary
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
#summary
  .el-carousel__indicators{
    size:30%;
  }
</style>

<style lang="scss" scoped>
#relative{
  position:relative;
}
#absolute{
  position:absolute;
  z-index: -1;
}
#title{
  margin-top:10px;       //相对于父级元素向下移10px
  width:100%;     //设置文字盒子的宽度
  height:40px;
  line-height:40px;
  text-align:center;
  opacity:0.9;
  font-size:26px;
  //font-weight:700;
  font-family: "Ruizi";
  color:#ffffff;
}
#text{
  margin-top:4px;
  text-align:center;
  font-family: "Ruizi";
  font-size:22px;
  //font-size:20px;
  color:#ffffff;
  opacity:0.9;
}
#chart{
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:2%
}
.dismiddle{
  margin-top:5%;
  display:flex;
  justify-content:center;
  align-items:center;
  height:40%;
}
.dispart{
  display:flex;
  flex:1;
  flex-direction:column;
   justify-content:center;
   align-items:center;
   height:100%;
}
.dispart div{
  flex:1;
}

</style>
