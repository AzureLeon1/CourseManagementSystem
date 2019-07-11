<template>
<div id="DiscussionDetailed">
    <DiscussionSketchy
        :discussion_id="item['discussion_id']"
        :user_name="item['user_name']"
        :avatar_url="item['avatar_url']"
        :role="item['role']"
        :content="item['content']"
        :time="item['time']"
    >
    <button @click="turnBack"><i class="el-icon-caret-left btn-logo"></i>返回</button>
    </DiscussionSketchy>
    <div class="wrapper" v-for="i in commentList"
    :key="i.discussion_id">
        <DiscussionComment
            :discussion_id="i['discussion_id']"
            :user_name="i['user_name']"
            :avatar_url="i['avatar_url']"
            :role="i['role']"
            :content="i['content']"
            :time="i['time']"
            :question_id="i['question_id']"
        ></DiscussionComment>
    </div>
</div>
</template>

<script>
import DiscussionSketchy from "../components/DiscussionSketchy"
import DiscussionComment from "../components/DiscussionComment"

export default {
  name: 'DiscussionDetailed',
  components: {
      DiscussionSketchy,
      DiscussionComment,
  },
  data () {
    return {
        item:{
            discussion_id:1,
            user_name:"default",
            avatar_url:"https://view.moezx.cc/images/2018/06/12/31133259.jpg",
            role:"default",
            content:"default",
            time:"default"
        },
        commentList:[
            {
                discussion_id:159,
                user_id:131,
                avatar_url:'https://view.moezx.cc/images/2018/06/12/31133259.jpg',
                user_name:'xixixiix',
                role:'student',
                content:"我觉得答案没有问题，但是第二问本身的描述不够准确有一定歧义",
                time: "1997.12.11,15.30",
                question_id:111
            },
            {
                discussion_id:168,
                avatar_url:'https://view.moezx.cc/images/2018/06/12/31133259.jpg',
                user_id:141,
                user_name:'lalala',
                role:'student',
                content:"可能是题目有问题吧，按一种理解来的话，答案这样也可以",
                time: "1997.12.11 15.30",
                question_id:111
            },
        ]
      }
  },


  methods: {
        show(input){
            this.item=input;
            this.updateComments(input['discussion_id']);
        },
        turnBack(){
            this.$parent.isShowList=!this.$parent.isShowList;
        },
        //调数据库 找到数据库中回复id的评论
        updateComments(id){
            
            
        }
  },
  mounted () {






    
  },
  computed: {
   
  }
}
</script>

<style scoped>
.wrapper{
    margin: 10px 0;
}
</style>