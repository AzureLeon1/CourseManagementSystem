<template>
  <div id="Message">
    <div style="display: flex; flex-direction: column; min-height: 450px;">
      <div style="padding: 15px; border: 1px solid #eee; min-height: 500px;">
        <el-table :data="tableData" @row-click="readMsg">
          <el-table-column prop="content" label="广播消息" min-width="200px">
            <template slot-scope="scope">
              <p class="message">{{scope.row.content}}</p>
            </template>
          </el-table-column>
          <el-table-column prop="from" label="来自" width="150px">
            <template slot-scope="scope">
              <el-link class="from">{{scope.row.course_name}}</el-link>
            </template>
          </el-table-column>
          <el-table-column prop="time" label="时间" width="160px">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span>{{scope.row.publish_time}}</span>
            </template>
          </el-table-column>
          <!-- <el-table-column prop="delete" label="操作" width="160px">
            <template slot-scope="scope">
              <el-button @click="deleteBro(scope.row)">删除</el-button>
            </template>
          </el-table-column> -->
        </el-table>
      </div>
      <div style="text-align: center; margin: 10px auto;">
        <el-pagination
          layout="prev, pager, next"
          :total="page_total"
          @current-change="onPageChange"
        ></el-pagination>
      </div>
    </div>

    <!-- float: Detailed Message -->
    <MessageDetailed ref="msr" v-on:hideReadMsg="hideReadMsg"></MessageDetailed>

    <!-- float: Add button -->
    <div class="addbutton-wrapper formanager">
      <!-- <el-button @click="showCreateMsgPanel"-->
      <el-button v-if="$store.state.profile.user.role == 'teacher_edu' && position == 'class'"
        @click="showCreateMsgPanel"
        type="primary"
        icon="el-icon-plus"
        circle
      >
        <!-- <i class="el-icon-plus"></i> -->
      </el-button>

      <el-button v-if="$store.state.profile.user.role == 'teacher_manage' && position == 'global'"
        @click="showCreateMsgPanel"
        type="primary"
        icon="el-icon-plus"
        circle
      >
        <!-- <i class="el-icon-plus"></i> -->
      </el-button>
    </div>

    <!-- float: Add popover -->
    <transition name="el-fade-in-linear">
      <MessageCreate ref="msc" v-on:hideCreateMsg="hideCreateMsg" v-on:createMsg="createMsg"></MessageCreate>
    </transition>
  </div>
</template>


<script>
import UserNav from "@/components/UserNav";
import MessageDetailed from "@/components/MessageDetailed";
import MessageCreate from "@/components/MessageCreate";
import api from "@/store/modules/message.js";
import apiIndex from '../api/index.js'

export default {
  name: "Message",
  components: {
    MessageDetailed,
    MessageCreate,
    UserNav
  },
  props: ['position'],
  data() {
    const simData = {
      'broadcast_id': 123123, //广播的ID
      'type': 1,
      'content':
        "我是一条很长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长的广播",
      'from': "计算机系统结构",
      'start_time': "2019-6-15 11:11",
      'end_time': "2019-6-23 12:22",
      'publish_time': "2019-6-19 12:24"
    }

    return {
      eachPage: 9,
      //pagination
      page_total: 10,
      //detailed message
      content: "",
      from: "",
      publish_time: "",
      //all messages
      messages: null,
      activity: Array(0),
      homework: Array(0),
      //reveal message
      tableData: Array(0),
      // tableData: Array(20).fill(simData);
      currentrow:0,
    };
  },
  methods: {
    //all
    async initial(){
        this.$refs.msc.$on['hide']=this.hideReadMsg;
        if (this.position == 'global') {
          console.log("获取全局广播");
          await this.getAllMessage()
        }
        else {
          await this.getMessageWithID(
            {
              course_id: this.$store.state.classinfo.classinfo.course_id,
              sec_id: this.$store.state.classinfo.classinfo.sec_id,
              semester: this.$store.state.classinfo.classinfo.semester,
              year: this.$store.state.classinfo.classinfo.year,
            }
          )
        }

        
        // this.getMessageWithID(111);

    },
    //front-end
    readMsg(row) {
        this.msr = this.$refs.msr;
        this.msr.showMessageDetailed = true;
        this.msr.broadcast_id = row.broadcast_id;
        this.msr.content = row.content;
        this.msr.from = row.from;
        this.msr.publish_time = row.publish_time;
        this.msr.start_time = row.start_time;
        this.msr.end_time = row.end_time;
        this.currentrow=row;
    },
    hideReadMsg(){
        this.msr=this.$refs.msr;
        this.msr.showMessageDetailed=false;
    },
    showCreateMsgPanel(){
        this.msc = this.$refs.msc;
        this.msc.showCreateMsg=true;
    },
    createMsg(form){
        this.msc = this.$refs.msc;
        this.msc.showCreateMsg=true;
    },
    hideCreateMsg(){
        this.msc = this.$refs.msc;
        this.msc.showCreateMsg=false;
    },
    //pagination
    onPageChange(pagenum){
      this.tableData=Array(0);
      let start_item=(pagenum-1)*this.eachPage;
      let end_item=start_item+this.eachPage;
      end_item=this.messages.length<end_item?this.messages.length:end_item;
      for(let i=start_item;i<end_item;i++){
        this.tableData.push(this.messages[i]);
      }
    },
    deleteBro() {
      //delete currentrow
      console.log(this.currentrow);
      // apiIndex.deleteBro({broadcast_id: row.broadcast_id})
      //   .then(res => {

      //   })

    },

    getAllMessage() {
      apiIndex.getGlobalBro()
        .then(bros => {
          console.log(bros);
          this.messages=Array(0);
          for(let i=0;i<bros.length;i++){
            if (bros[i].course_id == 0 && bros[i].sec_id == 0 && bros[i].semester == "Spring" && bros[i].year == 1997) {
              bros[i].course_name = '教务消息'
            }
            this.messages.push(bros[i]);
            if(bros[i]['type']==1)this.homework.push(bros[i]);
            else this.activity.push(bros[i]);
          }
          console.log(this.messages);

      //update page 1 content
      let range=this.messages.length<this.eachPage?this.messages.length:this.eachPage;
      // console.log(range);
      for(let i=0;i<range;i++){
        this.tableData.push(this.messages[i]);
      }

      //update pagination page_total
      this.page_total=Math.ceil(this.messages.length/this.eachPage);
      this.page_total=this.page_total*10;
      // console.log(this.page_total);
      })
    },

    //back-end
    getMessageWithID(form){
      apiIndex.getClassMessage(form)
      .then(getMessage => {
        this.messages=Array(0);
      for(let i=0;i<getMessage.length;i++){
        if (getMessage[i].course_id == 0 && getMessage[i].sec_id == 0 && getMessage[i].semester == "Spring" && getMessage[i].year == 1997) {
          getMessage[i].course_name = '教务消息'
        }
        this.messages.push(getMessage[i]);
        if(getMessage[i]['type']==1)this.homework.push(getMessage[i]);
        else this.activity.push(getMessage[i]);
      }

      //update page 1 content
      let range=this.messages.length<this.eachPage?this.messages.length:this.eachPage;
      // console.log(range);
      for(let i=0;i<range;i++){
        this.tableData.push(this.messages[i]);
      }

      //update pagination page_total
      this.page_total=Math.ceil(this.messages.length/this.eachPage);
      this.page_total=this.page_total*10;
      // console.log(this.page_total);

      console.log(this.tableData);
      })


      // //get data
      // var getMessage = await api.getMessageWithID(id);
      // this.messages=Array(0);
      // for(let i=0;i<getMessage.length;i++){
      //   this.messages.push(getMessage[i]);
      // }

      // //update page 1 content
      // let range=this.messages.length<this.eachPage?this.messages.length:this.eachPage;
      // // console.log(range);
      // for(let i=0;i<range;i++){
      //   this.tableData.push(this.messages[i]);
      // }

      // //update pagination page_total
      // this.page_total=Math.ceil(this.messages.length/this.eachPage);
      // this.page_total=this.page_total*10;
      // // console.log(this.page_total);
    },

    ChangeMsgType(type){
      // alert("!!!!!"+type)
      // this.ChooseMsgType();
      console.log('all-messages',this.messages); 
      if(type==1){
        this.messages=this.homework;
      }
      else{
        this.messages=this.activity;
      }
      //update pagination page_total
      this.page_total=Math.ceil(this.messages.length/this.eachPage);
      this.page_total=this.page_total*10;
      this.onPageChange(1);
    }


  },
  mounted(){
    this.initial();
    this.ChooseMsgType(1);
  }
};
</script>


<style scoped>
.message {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  overflow: hidden;
}

.addbutton-wrapper {
  position: fixed;
  z-index: 1;
  right: 9%;
  bottom: 25%;
}
</style>
