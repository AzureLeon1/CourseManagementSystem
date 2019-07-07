<template>
  <div id="discussHome">
    <div class="container">
      <!--搜索框-->

      <el-collapse v-model="activeName" accordion>
        <el-collapse-item class="question" title="问题讨论1" name="1">
          <div class="comment">
            回复回复
            <el-button type="text" style="float:right;line-height:50px;">回复</el-button>
          </div>
          <div class="comment">
            评论评论
             <el-button type="text" style="float:right;line-height:50px;">回复</el-button>
          </div>
          <div class="add-view" style="design:flex">
            <el-button type="primary" icon="el-icon-more">查看更多</el-button>
            <el-button type="primary" icon="el-icon-plus">添加评论</el-button>
          </div>

        </el-collapse-item>
        <el-collapse-item title="问题讨论2" name="2">
          <div class="comment">评论
             <el-button type="text" style="float:right;line-height:50px;">回复</el-button>
          </div>
          <div class="comment">评论
             <el-button type="text" style="float:right;line-height:50px;">回复</el-button>
          </div>
        </el-collapse-item>
        <el-collapse-item title="问题讨论3" name="3">
          <div class="comment">评论
             <el-button type="text" style="float:right;line-height:50px;">回复</el-button>
          </div>
          <div class="comment">评论
             <el-button type="text" style="float:right;line-height:50px;">回复</el-button>
          </div>
          <div class="comment">评论
             <el-button type="text" style="float:right;line-height:50px;">回复</el-button>
          </div>
        </el-collapse-item>
        <el-collapse-item title="问题讨论4" name="4">
          <div class="comment">评论
             <el-button type="text" style="float:right;line-height:50px;">回复</el-button>
          </div>
          <div class="comment">评论
             <el-button type="text" style="float:right;line-height:50px;">回复</el-button>
          </div>
        </el-collapse-item>
      </el-collapse>
      
      <div class="pagechange">
        <el-pagination
          layout="prev, pager, next"
          :total="50">
        </el-pagination>
      </div>
      <!-- Form 添加问题-->
      <el-button type="primary" icon="el-icon-edit-outline" @click="dialogFormVisible = true"
                 style="font-size: 18px;">添加问题</el-button>
    </div>
      
      <el-dialog title="添加问题" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="问题描述" :label-width="formLabelWidth">
            <el-input type="textarea" :rows="6" placeholder="请输入具体的问题描述" v-model="form.region"
                      style="font-size: 15px;">
            </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">完 成</el-button>
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
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '100px'
      }
  },
  methods: {

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
    height:85px;   
    font-size:16px;
    line-height:26px;
    text-align:left;

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
    line-height:70px;
    height:70px;
    background-color:#E9EEF3
}

.add-view{
  margin-top:8px;
  justify-content: center;
  height:30px;
}

.container{
    color:#333;
    text-align:center;
}

.pagechange{
  margin-top:30px;
  margin-bottom:20px;
}

</style>