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
    <div class="wrapper">
        <DiscussionComment></DiscussionComment>
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
        }
      }
  },


  methods: {
        show(input){
            this.item=input;
        },
        turnBack(){
            this.$parent.isShowList=!this.$parent.isShowList;
        },
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