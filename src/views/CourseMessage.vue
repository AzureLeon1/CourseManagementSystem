<template>
    <el-container>
        <el-aside width="238px">
            <ClassNav></ClassNav>
        </el-aside>
        <el-main style="padding: 20px 15% 0 15%;">
            <Header></Header>
            <div class="CourseMessage">
                <div class="tagWrapper">
                    <div class="tag" @click="select(1);">
                        <div style="flex-grow:1;">活动广播</div>
                        <div class="tickle"><i class="el-icon-success"></i></div>
                    </div>
                    <div class="tag" @click="select(2);">
                        <div style="flex-grow:1;">作业广播</div>
                        <div class="tickle"><i class="el-icon-success"></i></div>
                    </div>
                </div>
                <Message></Message>
            </div>
        </el-main>
    </el-container>
</template>

<script>
import ClassNav from "@/components/ClassNav";
import Header from "@/components/Header";
import Message from "@/components/Message";
import api from "@/store/modules/message.js";
// import api from "@/api/index.js";

export default {
  name: "CourseMessage",
  components: {
    Message,
    ClassNav,
    Header
  },
  methods: {
      select(option){
        console.log(option);
        //update select button
        let i=option-1;
        let tickles = document.getElementsByClassName('tickle');
        tickles[i].style.display='inline';
        tickles[1-i].style.display='none';
      }
  },
  mounted(){
      this.select(1);
  }
};
</script>

<style scoped>
.CourseMessage{
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
}
.tagWrapper{
    display: flex;
    margin-bottom: 10px;
    margin-top: -20px;
}
.tag{
    flex:1;
    display: flex;
    height: 30px;
    line-height: 30px;
    vertical-align: middle;
    font-size: 15px;
    padding: 3px 15px;
    color: #666;
    /* box-sizing: border-box; */
    border: 1px solid #dddddd;
    border-radius: 4px;
    cursor: pointer;
}

.tag:first-child{
    margin-right: 10px;
}

.tag:hover{
    background: #f4f4f4;
    transition: .2s;
}

/* button{
  border: 1px solid #dcdfe6;
  background-color: #ffffffdd;
  width: 23px;
  height: 23px;
  border-radius: 4px;
  outline: none;
  transition: .1s;
  color: green;
} */

.tickle{
    color: green;
}


</style>