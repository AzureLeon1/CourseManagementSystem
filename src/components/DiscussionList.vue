<template>
<div id="DiscussList">
    <div class="list" v-show="isShowList">
        <div class="wrapper" v-for="item in showList"
        :key="item.discussion_id">
            <DiscussionSketchy
                :discussion_id="item['discussion_id']"
                :user_name="item['user_name']"
                :avatar_url="item['avatar_url']"
                :role="item['role']"
                :content="item['content']"
                :time="item['time']"
            ></DiscussionSketchy>
        </div>
        <div style="display:flex;align-items: center;justify-content: center;">
            <el-button type="plain" @click="dislogQuestionVisible=true">添加问题</el-button></div>
        
        <el-dialog title="添加问题" :visible.sync="dislogQuestionVisible">
            <el-form>
                <div style="font-size:16px;margin-bottom:2%;">问题描述</div>
                <el-form-item>
                    <el-input type="textarea" placeholder="请在此处填写具体问题描述" rows="7" 
                              v-model="desc" maxlength="200" @input="descInput" ></el-input>
                    <div style="float:right;font-size:12px;color:#cccbc9;">已输入{{200-remain}}/200字</div>
                </el-form-item>
            </el-form>
            <div slot="footer" class="foot">
                <el-button @click="dislogQuestionVisible = false">取 消</el-button>
                <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
    </div>
    <DiscussionDetailed v-show="!isShowList" ref="detail"></DiscussionDetailed>
    
        
</div>
</template>

<script>
import DiscussionSketchy from "../components/DiscussionSketchy"
import DiscussionDetailed from "@/components/DiscussionDetailed"
export default {
  name: 'DiscussionList',
  components: {
      DiscussionSketchy,
      DiscussionDetailed
  },
  data () {
    return {
        isShowList:true,
        // showList:[{
        //         discussion_id:1,
        //         user_name:"张萌萌",
        //         avatar_url:"https://view.moezx.cc/images/2018/06/12/31133259.jpg",
        //         role:"学生",
        //         content:"一个非常长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长的问题。",
        //         time:"2018-7-11 12:30"
        //     },{
        //         discussion_id:2,
        //         user_name:"同济不放假大学",
        //         avatar_url:"https://view.moezx.cc/images/2018/06/12/31133259.jpg",
        //         role:"老师",
        //         content:"我不想参与讨论。",
        //         time:"2018-7-11 12:30"
        //     },
        // ]
      }
  },


  methods: {
      submit(){
          dislogQuestionVisible = false;
      },
      descInput(){
            console.log(this.remain);
            var txtVal=this.desc.length;
            this.remain=200-txtVal;
      },
      showDiscussionDetail(id){
            this.isShowList=!this.isShowList;
            let target=null;
            for(let item in this.showList){
                // console.log(this.showList[item]);
                if(this.showList[item]['discussion_id']==id){
                    target=this.showList[item];
                }
            }
            this.$refs.detail.show(target);
      },
      //调数据库 利用classID得到讨论
      updateList(classID){

      }
  },
  computed: {
      showList()
      {
          return this.$store.state.discussion.DiscussionItems
      }

  },
  mounted () {

    //   updateList(classID);
    this.$store.dispatch("discussion/getAllDiscussions", 
    {course_id:this.$store.state.classinfo.classinfo.course_id,
    sec_id: this.$store.state.classinfo.classinfo.sec_id,
    semester: this.$store.state.classinfo.classinfo.semester,
    year: this.$store.state.classinfo.classinfo.year,})




  },
  computed: {
      showList(){
          return this.MyDiscussionItems;
      },
      MyDiscussionItems(){
          return this.$store.state.twitter.DiscussionItems;
      }
  }
}
</script>

<style scoped>
.wrapper{
    margin-bottom: 15px;
}
</style>