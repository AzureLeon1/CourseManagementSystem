<template>
  <div id="discussHome">
    <div class="container">

      <el-collapse v-model="activeName" accordion>
        <el-collapse-item name="1">
          <span class="collapse-title" slot="title">
            {{quesDescription}}<span style="font-size:12px"><br>{{username}}发布于{{date}}</span>
          </span>
          <div v-for="num in commentNum" :key="num" v-show="num<showNum+1">
            <div class="comment" style="display:flex;">
              <div style="width:96%">{{username}}:{{respDescription}}
                <div style="font-size:12px">{{date}}</div>
              </div>
              <el-button type="text" style="float:right;width:4%" @click="addCommentVisible = true">回复</el-button>
            </div>
          </div>
          
          <div class="comment-view" style="design:flex">
            <el-button type="primary" icon="el-icon-more" @click="showMore">
              <span>{{isShow?'查看全部':'收起评论'}}</span></el-button>
            <el-button type="primary" icon="el-icon-plus" @click="addCommentVisible = true">添加评论</el-button>
          </div>
        </el-collapse-item>
     
        <el-collapse-item name="2">
          <span class="collapse-title" slot="title">
            {{quesDescription}}<span style="font-size:12px"><br>{{username}}发布于{{date}}</span>
          </span>
          <div v-for="num in commentNum" :key="num" v-show="num<showNum+1">
            <div class="comment" style="display:flex;">
              <div style="width:96%">{{username}}:{{respDescription}}
                <div style="font-size:12px">{{date}}</div>
              </div>
              <el-button type="text" style="float:right;width:4%" @click="addCommentVisible = true">回复</el-button>
            </div>
          </div>
          <div class="comment-view" style="design:flex">
            <el-button type="primary" icon="el-icon-more" @click="showMore">
              <span>{{isShow?'查看全部':'收起评论'}}</span></el-button>
            <el-button type="primary" icon="el-icon-plus" @click="addCommentVisible = true">添加评论</el-button>
          </div>
        </el-collapse-item>
        
        <el-collapse-item name="3">
          <span class="collapse-title" slot="title">
            {{quesDescription}}<span style="font-size:12px"><br>{{username}}发布于{{date}}</span>
          </span>
          <div v-for="num in commentNum" :key="num" v-show="num<showNum+1">
            <div class="comment" style="display:flex;">
              <div style="width:96%">{{username}}:{{respDescription}}
                <div style="font-size:12px">{{date}}</div>
              </div>
              <el-button type="text" style="float:right;width:4%" @click="addCommentVisible = true">回复</el-button>
            </div>
          </div>
          <div class="comment-view" style="design:flex">
            <el-button type="primary" icon="el-icon-more" @click="showMore">
              <span>{{isShow?'查看全部':'收起评论'}}</span></el-button>
            <el-button type="primary" icon="el-icon-plus" @click="addCommentVisible = true">添加评论</el-button>
          </div>
        </el-collapse-item>

        <el-collapse-item name="4">
          <span class="collapse-title" slot="title">
            {{quesDescription}}<span style="font-size:12px"><br>{{username}}发布于{{date}}</span>
          </span>
          <div v-for="num in commentNum" :key="num" v-show="num<showNum+1">
            <div class="comment" style="display:flex;">
              <div style="width:96%">{{username}}:{{respDescription}}
                <div style="font-size:12px">{{date}}</div>
              </div>
              <el-button type="text" style="float:right;width:4%" @click="addCommentVisible = true">回复</el-button>
            </div>
          </div>
          <div class="comment-view" style="design:flex">
            <el-button type="primary" icon="el-icon-more" @click="showMore">
              <span>{{isShow?'查看全部':'收起评论'}}</span></el-button>
            <el-button type="primary" icon="el-icon-plus" @click="addCommentVisible = true">添加评论</el-button>
          </div>
        </el-collapse-item>
      </el-collapse>

     </div> 

      <el-dialog title="添加评论" :visible.sync="addCommentVisible">
        <el-form :model="form">
          <el-form-item label="回复内容" :label-width="formLabelWidth">
            <el-input type="textarea" :rows="6" placeholder="请输入具体的回复内容" 
                      style="font-size: 15px;" maxlength="150" @input="descInput" v-model="desc">
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

</template>

<script>
function showTime(){
  //此处需要通过基本信息得到时间
  var y=2019,m=7,d=6;

  if(m<10){
    m="0"+m;
  }
  if(d<10){
    d="0"+d;
  }
  return y+"/"+m+"/"+d;
}

export default {
  name: 'DisscussionHome',
  components: {
  },
  data () {
    return {
      //activeName: '1'
      addCommentVisible: false,
      addQuestionVisible: false,
      isShow:true,

      username:'ABB',
      date:'2019年07月07日',
      quesDescription:'我是一段问题描述',
      respDescription:'我是一段回复',
      showNum:3,
      commentNum:5,
      remnant:180,
      formLabelWidth: '100px'
      }
  },
  props:content=[
     content1['name1','role1','content1','time1','dis_id1'],
     content2['name2','role2','content2','time2','dis_id2'],
     content3['name3','role3','content3','time3','dis_id3'],
     content4['name4','role4','content4','time4','dis_id4'],
    ],

  methods: {
    //倒计数
    descInput(){
      var txtVal=this.desc.length;
      this.remnant=180-txtVal;
    },

    showMore(){
      console.log('1',this.isShow);
      this.isShow=!this.isShow;
      this.showNum=this.isShow?4:this.commentNum;
    }

  },
  mounted () {

  },
  computed: {
   
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

.collapse-title{
  flex: 1 0 90%;
  order: 1;
}

#discussHome
.el-dialog{
  min-width: 500px;
  width:42%;
}

#discussHome
.el-dialog__header{
  text-align:center;
}

#discussHome
.el-dialog__body{
  padding-right: 40px;
}
</style>

<style lang="scss" scoped>


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