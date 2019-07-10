<template>
  <el-container class="discussion">
    <el-aside width="238px">
      <class-nav :activeIndex="5"></class-nav>
    </el-aside>
    <el-container>
      <el-header >
        <div style="margin-top:2%;margin-left:15px;margin-right:10%;">
          <el-form class="demo-form-inline" style="display: flex;">
            <el-form-item style="flex-grow:1;margin-right:1%">
              <el-input placeholder="请输入内容" v-model="input"></el-input>
            </el-form-item>
            <el-form-item >
              <el-button type="primary" icon="el-icon-search">搜 索</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-header>
      <el-main>
        <div id="discussHome">
          <div class="container">
            <div v-for="(items) in DiscussionRes" :key="items.disscussion_id"></div>
            <div style="min-height:350px">
            <el-collapse accordion>
              <el-collapse-item name="1" v-show="wheShow1" >
                <span class="collapse-title" slot="title" v-on:click="getReply(0)"><span style="font-size:14px;line-height:2px;background-color:#e8f4e2">{{role1}}</span>
                  {{quesDescription1}}<span style="font-size:12px"><br>{{username1}}发布于{{date1}}</span></span>
                <div v-for="(reply,index) in ReplyItems" :key="index" v-show="index<showNum1">
                  <div class="comment" style="display:flex;">
                    <div><span style="font-size:12px;line-height:2px;background-color:#e8f4e2">{{reply.role}}</span>{{reply.user_name}}:{{reply.content}}<div style="font-size:12px">{{reply.time}}</div></div>
                  </div>
                </div>
          
                <div class="comment-view" style="design:flex">
                  <el-button type="primary" icon="el-icon-more" @click="showMore(1)">
                    <span>{{isShow1?'查看全部':'收起评论'}}</span></el-button>
                  <el-button type="primary" icon="el-icon-plus" @click="addCommentVisible = true">添加评论</el-button>
                </div>
              </el-collapse-item>
     
              <el-collapse-item name="2" v-show="wheShow2">
                <span class="collapse-title" slot="title" v-on:click="getReply(1)"><span style="font-size:14px;line-height:2px;background-color:#e8f4e2">{{role2}}</span>
                {{quesDescription2}}<span style="font-size:12px"><br>{{username2}}发布于{{date2}}</span></span>
                <div v-for="(reply,index) in ReplyItems" :key="index" v-show="index<showNum2">
                  <div class="comment" style="display:flex;">
                    <div><span style="font-size:12px;line-height:2px;background-color:#e8f4e2">{{reply.role}}</span>{{reply.user_name}}:{{reply.content}}<div style="font-size:12px">{{reply.time}}</div></div>
                  </div>
                </div>
                
                <div class="comment-view" style="design:flex">
                  <el-button type="primary" icon="el-icon-more" @click="showMore(2)">
                    <span>{{isShow2?'查看全部':'收起评论'}}</span></el-button>
                  <el-button type="primary" icon="el-icon-plus" @click="addCommentVisible = true">添加评论</el-button>
                </div>
              </el-collapse-item>
        
              <el-collapse-item name="3" v-show="wheShow3">
                <span class="collapse-title" slot="title" v-on:click="getReply(2)"><span style="font-size:14px;line-height:2px;background-color:#e8f4e2">{{role3}}</span>
                {{quesDescription3}}<span style="font-size:12px"><br>{{username3}}发布于{{date3}}</span></span>
                <div v-for="(reply,index) in ReplyItems" :key="index" v-show="index<showNum3">
                  <div class="comment" style="display:flex;">
                    <div><span style="font-size:12px;line-height:2px;background-color:#e8f4e2">{{reply.role}}</span>{{reply.user_name}}:{{reply.content}}<div style="font-size:12px">{{reply.time}}</div></div>
                  </div>
                </div>
          
                <div class="comment-view" style="design:flex">
                  <el-button type="primary" icon="el-icon-more" @click="showMore(3)">
                    <span>{{isShow3?'查看全部':'收起评论'}}</span></el-button>
                  <el-button type="primary" icon="el-icon-plus" @click="addCommentVisible = true">添加评论</el-button>
                </div>
              </el-collapse-item>

              <el-collapse-item name="4" v-show="wheShow4">
                <span class="collapse-title" slot="title" v-on:click="getReply(3)"><span style="font-size:14px;line-height:2px;background-color:#e8f4e2">{{role4}}</span>
                {{quesDescription4}}<span style="font-size:12px"><br>{{username4}}发布于{{date4}}</span></span>
                <div v-for="(reply,index) in ReplyItems" :key="index" v-show="index<showNum4">
                  <div class="comment" style="display:flex;">
                    <div><span style="font-size:12px;line-height:2px;background-color:#e8f4e2">{{reply.role}}</span>{{reply.user_name}}:{{reply.content}}<div style="font-size:12px">{{reply.time}}</div></div>
                  </div>
                </div>
              
                <div class="comment-view" style="design:flex">
                  <el-button type="primary" icon="el-icon-more" @click="showMore(4)">
                    <span>{{isShow4?'查看全部':'收起评论'}}</span></el-button>
                  <el-button type="primary" icon="el-icon-plus" @click="addCommentVisible = true">添加评论</el-button>
                </div>
              </el-collapse-item>
            </el-collapse>
            </div>

            <div style="margin-top:1%;margin-bottom:1%">
              <el-pagination layout="prev, pager, next" :total=this.pages*10 @current-change="onPageChange">
              </el-pagination>
            </div>
            <!-- Form 添加问题-->
            <el-button type="primary" icon="el-icon-edit-outline" @click="addQuestionVisible = true"
                       style="font-size: 18px;">添加问题</el-button>
      
            <el-dialog title="添加问题" :visible.sync="addQuestionVisible">
              <el-form>
                <el-form-item>
                  <div style="text-align:left;font-size:16px;">问题描述</div>
                  <el-input type="textarea" :rows="6" placeholder="请输入具体的问题描述"
                            style="font-size: 15px;" maxlength="180" @input="descInput"></el-input><br>
                  <span class="text" style="float:right;color:#909399;margin-right:8px;">输入{{180-remnant}}/180字</span>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="addQuestionVisible = false">取 消</el-button>
                <el-button type="primary" @click="addQuestionVisible = false">完 成</el-button>
              </div>
            </el-dialog>

            <el-dialog title="添加评论" :visible.sync="addCommentVisible">
              <el-form>
                <el-form-item>
                  <div style="text-align:left;font-size:16px;">回复内容</div>
                  <el-input type="textarea" :rows="6" placeholder="请输入具体的回复内容" 
                            style="font-size: 15px;" maxlength="180" @input="descInput">
                  </el-input><br>
                  <span class="text" style="float:right;color:#909399;margin-right:8px;">输入{{180-remnant}}/180字</span>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="addCommentVisible = false">取 消</el-button>
                <el-button type="primary" @click="addCommentVisible = false">完 成</el-button>
              </div>
            </el-dialog>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
import ClassNav from "../components/ClassNav"

export default {
  name: 'Discussion',
  components: {
    ClassNav
  },
  data() {
    return {
      addCommentVisible: false,
      addQuestionVisible: false,

      username:'ABB',date:'2019年07月07日',quesDescription:'我是一段问题描述',respDescription:'我是一段回复',

      role1:'',username1:'',quesDescription1:'',date1:'',wheShow1:true,isShow1:true, showNum1:3,
      role2:'',username2:'',quesDescription2:'',date2:'',wheShow2:true,isShow2:true, showNum2:3,
      role3:'',username3:'',quesDescription3:'',date3:'',wheShow3:true,isShow3:true, showNum3:3,
      role4:'',username4:'',quesDescription4:'',date4:'',wheShow4:true,isShow4:true, showNum4:3,
      
      commentNum:5,
      remnant:180,
      input:'',
      pages:0,
      currentpage:1,
      discussionShow:[],
    }
  },

  methods: {
    Myrole(data){
      for(var i=0;i<data.length;i++){
        if(data[i].role=="student") data[i].role='学生';
        else data[i].role='教师';
      }
    },
    descInput(){
      var txtVal=this.desc.length;
      this.remnant=180-txtVal;
    },
    showMore(val){
      if(val==1){
        this.isShow1=!this.isShow1;
        this.showNum1=this.isShow1?3:this.commentNum;
      }
      else if(val==2){
        this.isShow2=!this.isShow2;
        this.showNum2=this.isShow2?3:this.commentNum;
      } 
      else if(val==3){
        this.isShow3=!this.isShow3;
        this.showNum3=this.isShow3?3:this.commentNum;
      } 
      else{
        this.isShow4=!this.isShow4;
        this.showNum4=this.isShow4?3:this.commentNum;
      } 
    },
    onPageChange(pagenum){
      this.currentpage=pagenum;
      this.DiscussionRes();
    },

    getReply(val){
      var discussion_id=this.MyDiscussionItems[val].discussion_id;
      this.$store.dispatch("discussion/getDiscussionReply",discussion_id)
    },

    setMessage(){
      var remain=this.MyDiscussionItems.length-(this.currentpage-1)*4;      //remain是最后一页问题数
      if(remain>=1||this.currentpage!=this.pages){
        this.username1=this.discussionShow[0].user_name;this.quesDescription1=this.discussionShow[0].content;
        this.date1=this.discussionShow[0].time;this.wheShow1=true;this.role1=this.discussionShow[0].role;
      }else{this.wheShow1=false;}
      if(remain>=2||this.currentpage!=this.pages){
        this.username2=this.discussionShow[1].user_name;this.quesDescription2=this.discussionShow[1].content;
        this.date2=this.discussionShow[1].time;this.wheShow2=true;this.role2=this.discussionShow[1].role;
      }else{this.wheShow2=false;}
      if(remain>=3||this.currentpage!=this.pages){
        this.username3=this.discussionShow[2].user_name;this.quesDescription3=this.discussionShow[2].content;
        this.date3=this.discussionShow[2].time;this.wheShow3=true;this.role3=this.discussionShow[2].role;
      }else{this.wheShow3=false;}
      if(remain>=4||this.currentpage!=this.pages){
        this.username4=this.discussionShow[3].user_name;this.quesDescription4=this.discussionShow[3].content;
        this.date4=this.discussionShow[3].time;this.wheShow4=true;this.role4=this.discussionShow[3].role;
      }else{this.wheShow4=false;}
    },
  },
  computed: {
    DiscussionRes(){
      this.pages= Math.ceil(this.MyDiscussionItems.length/4);
      this.remain=this.MyDiscussionItems.length-(this.pages-1)*4;
      this. Myrole(this.MyDiscussionItems);
      this.discussionShow=[];
      for(var i=(this.currentpage-1)*4;i<4+(this.currentpage-1)*4;i++){
        this.discussionShow.push(this.MyDiscussionItems[i]);
      }
      this.setMessage();
    },
    ReplyItems(){
      this.commentNum=this.MyQuestionReply.length;
      this. Myrole(this.MyQuestionReply);
      return this.MyQuestionReply;
    },
    MyDiscussionItems(){
      return this.$store.state.discussion.DiscussionItems;
    },
    MyQuestionReply(){
      return this.$store.state.discussion.ReplyItems;
    },
  },
  mounted:function(){
    this.$store.dispatch("discussion/getAllDiscussions",this.UserId);
  }
}
</script>

<style>
#discussHome
.el-collapse-item__header{
    flex: 1 0 auto;
    order: -1;
    height:85px;   
    font-size:14px;
    line-height:26px;
    text-align:left;
}
#discussHome
.el-dialog{
  min-width: 500px;
  width:35%;
}
#discussHome
.el-dialog__header{
  text-align:center;
  font-size:22px;
}
#discussHome
.el-dialog__body{
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom:10px;
}
</style>

<style lang="scss" scoped>
.collapse-title{
  flex: 1 0 90%;
  order: 1;
}
.el-main{
    margin-top: 1%;
    margin-left:15px;
    margin-right:10%;
}
.comment{
    text-align: left;
    margin-top: 6px;
    margin-left:25px;
    padding-left:10px;
    padding-right:10px;
    font-size:14px;
    line-height:24px;
    height:70px;
    background-color:#ecf5ff
}
.comment-view{
  margin-top:8px;
  justify-content: center;
  height:30px;
}
.container{
    color:#333;
    text-align:center;
}

</style>
