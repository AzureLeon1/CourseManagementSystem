<template>
<el-container class="home">
    <el-aside width="238px">
        <user-nav :activeIndex="0"></user-nav>
    </el-aside>
    <el-main style="padding: 20px 15% 0 15%;">
        <Header></Header>
        <div class="timetable-wrapper">
            <div class="topic"></div>
            <!-- <el-form ref="form" :model="form">
                <el-form-item label="年份">
                    <el-select v-model="form.course_id" placeholder="请选择课程号">
                        <el-option
                        v-for="item in year_options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        ></el-option>
                    </el-select>

                </el-form-item>

                 <el-form-item prop="semester" label="学期" :rules="[{required : true}]">
                    <el-select v-model="form.semester" placeholder="请选择学期">
                        <el-option
                        v-for="item in semester_options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        ></el-option>
                    </el-select>
                    </el-form-item>

                <el-form-item label="学期"></el-form-item>
            </el-form> -->
            <!-- <div class="button-wrapper">
                <el-button circle icon="el-icon-arrow-left"></el-button>
            </div> -->
            <!-- <cctitle></cctitle> -->
            <!-- <div class="timetable-title">第<span style="color: #292961; font-weight:bold;">{{nowWeek}}</span>周</div> -->


            <div class="selector-wrapper" style="width:100%">
                <div class="selector-hint">请选择年份</div>
                <el-select v-model="nowWeek" placeholder="">
  <el-option v-for="item in (1, 2, 3)" :key="item" :value="item"></el-option>
 </el-select>
  <div class="selector-hint">请选择学期</div>
     <el-select v-model="nowWeek" placeholder="">
  <el-option v-for="item in (1, 2, 3)" :key="item" :value="item"></el-option>
 </el-select>

 
               

            </div>

            <div class="timetable-title">第{{nowWeek}}周</div>

            <TimeTable ref="timetable"></TimeTable>
            <!-- <div class="button-wrapper">
                <el-button circle icon="el-icon-arrow-right" @click='updateTimetable(nowWeek+1);'></el-button>
            </div> -->
            <el-pagination class="week-shower"
                small
                layout="prev, pager, next"
                :total="190"
                @prev-click="updateTimetable(nowWeek-1)"
                @next-click="updateTimetable(nowWeek+1)"
                >
            </el-pagination>
        </div>
    </el-main>
</el-container>

</template>

<script>
import api from "@/api/index.js";
import UserNav from "../components/UserNav";
import Header from '@/components/Header';
import TimeTable from '@/components/TimeTable';
import cctitle from '@/components/cctitle';
export default {
  name: 'CourseTable',
  components: {
    TimeTable,
    UserNav,
    Header,
    // cctitle
  },
  data() {
    return {
        allCourses: "before-contents",
        nowWeek:1,
        // form: {
        //     year,
        //     semester:null
        // }
    }
  },
  methods: {
    async initialize(){
        await this.getTimetable();
        this.updateTimetable(this.nowWeek);//第一周
    },
    async getTimetable(){
        
        this.allCourses = await api.coursetableGetCoursetable({year: 2019, semester: 'Spring'});
        console.log('这是数组中的数据',this.allCourses);
        //console.log("这是取到过后的数据", this.allCourses)
       // this.allCourses=this.allCourses['courselist'];
    },
    updateTimetable(nowWeek){
        this.nowWeek=nowWeek;//update nowWeek
        nowWeek=nowWeek%2;
        if(nowWeek==0)nowWeek=2;
        //cls
        this.$refs.timetable.cleanCoursetable();
        for(let i=0;i<this.allCourses.length;i++){
            console.log(this.allCourses)
            let c=this.allCourses[i];
            // console.log(c);
            let day=c.day;
            console.log('这是天数', day)
            let sec=c.start_section;
            console.log('这是sec', sec)
            let len=c.length;
            console.log('这是长度', len)
            let week=c.single_or_double;
            let name=c.course_name;
            let intro=c.building+' '+c.room_number;
            if(week==nowWeek || week == 3){
                this.$refs.timetable.setCourse(day,sec,len,name,intro);
            }
        }
    }
  },
  mounted(){
      this.initialize();
  }
}
</script>

<style scoped>
    .timetable-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 190px);
        width: 100%;
    }

    .button-wrapper{
        margin: 0 40px;
    }

    .week-shower{
        margin: 15px 0 0 0;
    }

    .timetable-title {
    margin:0;
    height: 38px;
    width: 100%;
    line-height: 38px;
    text-align: center;
    vertical-align: middle;
    font-size: 16px;
    letter-spacing: .2em;
    color: #444;
    box-sizing: border-box;
    background-color: #f5f5f5;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border: 1px solid #dcdfe6;
    padding: 0px 6px 0 15px;;
    }

    .selector-wrapper{
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 10px;
    }
    
    
</style>