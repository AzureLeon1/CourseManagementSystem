<template>
  <el-container class="discussion">
    <el-aside width="270px">
      <h>班级导航栏</h>
    </el-aside>
    <el-container>
      <el-header >
        <div class="search">
          <el-form :model="formInline" class="demo-form-inline" style="display: flex;">
            <el-form-item class="inputarea" style="flex-grow:1;">
              <el-input placeholder="请输入内容" v-model="input"></el-input>
            </el-form-item>
            <el-form-item >
              <el-button type="primary" icon="el-icon-search">搜索</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-header>
      <el-main>
          <div v-for=" (item) in DiscussionRes"
               :key="item">
          </div>
          <discussion-home>   
          </discussion-home> 

          <div class="pagechange">
            <el-pagination
              layout="prev, pager, next"
              :total="50">
            </el-pagination>
          </div>

          <!-- Form 添加问题-->
          <el-button type="primary" icon="el-icon-edit-outline" @click="addQuestionVisible = true"
                     style="font-size: 18px;margin-left:44%;">添加问题</el-button>



        <el-dialog title="添加问题" :visible.sync="addQuestionVisible">
          <el-form :model="form">
            <el-form-item label="问题描述" :label-width="formLabelWidth">
              <el-input type="textarea" :rows="6" placeholder="请输入具体的问题描述"
                      style="font-size: 15px;" maxlength="180" @input="descInput" v-model="desc">
              </el-input><br>
              <span class="text" style="float:right;color:#909399;margin-right:8px;">输入{{180-remnant}}/180字</span>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="addQuestionVisible = false">取 消</el-button>
            <el-button type="primary" @click="addQuestionVisible = false">完 成</el-button>
          </div>
        </el-dialog>

      </el-main>
    </el-container>
  </el-container>

</template>

<script>
import DiscussionHome from "../components/DiscussHome"
export default {
  name: 'Discussion',
  components: {
    DiscussionHome
  },
  data() {
    return {
      input:'',
      pages:0,
      currentpage:1,
      remain:0,
      remnant:180,
      discussionNow:[],
    }
  },
  methods: {

  },
  computed: {

    DiscussionShow(){
      this.pages= Math.ceil(this.MyDiscussionItems.length/4);
      this.remain=this.MyDiscussionItems.length-(this.pages-1)*4;
      console.log(this.pages);
      this.discussionNow=[];
      for(var i=(this.currentpage-1)*4; i<4 ; i++){
        console.log(i);
        console.log(this.MyDiscussionItems[i]);
        this.discussionNow.push(...this.MyDiscussionItems[i]);
      }
      console.log(this.discussionNow);
      return this.discussionNow;
    },

    DiscussionRes(){     
      this.pages= Math.ceil(this.MyDiscussionItems.length/4);
      this.remain=this.MyDiscussionItems.length-(this.pages-1)*4;
      console.log(this.pages);
    },
    BasicItems() {
      return this.$store.state.discussion.basicItems;
    },
    BasicproblemItems(){
      return this.$store.state.discussion.basicproblemItems;
    },
    MyDiscussionItems(){
      return this.$store.state.discussion.DiscussionItems;
    },
    MyReplyItems(){
      return this.$store.state.discussion.ReplyItems;
    },
    userId(){
      return this.$store.state.profile.user.id;
    },
  },
  mounted:function(){
    this.$store.dispatch("discussion/getAllDiscussions",this.userId)
  },
  watch:{
    
  }
}
</script>

<style>
.el-aside{
    color: #333;
    text-align: center;
    line-height: 400px;
}
.search{
    margin-top:2%;
    margin-left:15px;
    margin-right:10%;
}
.inputarea{
  margin-right:1%;
}
.el-main{
    margin-top: 1%;
    margin-left:15px;
    margin-right:10%;
}

.pagechange{
  margin-top:30px;
  margin-bottom:20px;
  margin-left:40%;
}

</style>