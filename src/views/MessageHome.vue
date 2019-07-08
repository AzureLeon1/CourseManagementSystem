<template>
  <el-container class="home">
    <el-aside width="260px">
      <user-nav :activeIndex="3"></user-nav>
    </el-aside>
    <el-main>
      <div id="MessageHome">
        <el-container style="min-height: 500px; width: 70%; margin:20px auto 20px auto;">
          <el-head name="el-head"></el-head>
          <el-main style="padding: 15px; border: 1px solid #eee">
            <el-table :data="tableData" @row-click="readMsg">
              <el-table-column prop="content" label="广播消息" min-width="200px;">
                <template slot-scope="scope">
                  <p class="message">{{scope.row.content}}</p>
                </template>
              </el-table-column>
              <el-table-column prop="from" label="来自" width="150px">
                <template slot-scope="scope">
                  <el-link class="from">{{scope.row.from}}</el-link>
                </template>
              </el-table-column>
              <el-table-column prop="time" label="时间" width="150px">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span>{{scope.row.publish_time}}</span>
                </template>
              </el-table-column>
            </el-table>
          </el-main>
          <el-footer style="text-align: center; margin: 10px auto;">
            <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
          </el-footer>
        </el-container>

        <!-- float: Detailed Message -->
        <MessageDetailed ref="msr" v-on:hideReadMsg="hideReadMsg"></MessageDetailed>

        <!-- float: Add button -->
        <div class="addbutton-wrapper formanager">
          <el-button @click="createMsg"
            style="height: 50px; width:50px; text-align: center; border-radius:50%; padding: 17px 0;"
          >
            <i class="el-icon-plus"></i>
          </el-button>
        </div>

        <!-- float: Add popover -->
        <transition name="el-fade-in-linear">
            <MessageCreate ref="msc" v-on:hideCreateMsg="hideCreateMsg"></MessageCreate>
        </transition>


      </div>
    </el-main>
  </el-container>
</template>

<script>
import UserNav from "@/components/UserNav";
import MessageDetailed from "@/components/MessageDetailed";
import MessageCreate from "@/components/MessageCreate";

export default {
  name: "MessageHome",
  components: {
    MessageDetailed,
    MessageCreate,
    UserNav
  },
  data() {
    const simData = {
      broadcast_id: 123123, //广播的ID
      type: 1,
      content:
        "我是一条很长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长的广播",
      from: "计算机系统结构",
      start_time: "2019-6-15 11:11",
      end_time: "2019-6-23 12:22",
      publish_time: "2019-6-19 12:24"
    };
    return {
      content: "",
      from: "",
      publish_time: "",

      tableData: Array(7).fill(simData)
    };
  },
  methods: {
    readMsg(row) {
        this.msr = this.$refs.msr;
        this.msr.showMessageDetailed = true;
        this.msr.broadcast_id = row.broadcast_id;
        this.msr.content = row.content;
        this.msr.from = row.from;
        this.msr.publish_time = row.publish_time;
        this.msr.start_time = row.start_time;
        this.msr.end_time = row.end_time;
    },
    hideReadMsg(){
        this.msr=this.$refs.msr;
        this.msr.showMessageDetailed=false;
    },
    createMsg(){
        this.msc = this.$refs.msc;
        this.msc.showCreateMsg=true;
    },
    hideCreateMsg(){
        this.msc = this.$refs.msc;
        this.msc.showCreateMsg=false;
    }
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
  position: absolute;
  right: 100px;
  bottom: 25%;
}
</style>