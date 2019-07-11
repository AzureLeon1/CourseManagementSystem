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
import api from "../api"

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
        item: {},
        commentList: []
    }
  },


  methods: {
        show(input){
            this.item=input;
            console.log("input",input)
            this.updateComments(input['discussion_id']);
        },
        turnBack(){
            this.$parent.isShowList=!this.$parent.isShowList;
        },
        //调数据库 找到数据库中回复id的评论
        updateComments(id){
            api.getDiscussionReply(id)
            .then(res => {
                this.item = res
                this.commentList = res.reply
            })
            
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