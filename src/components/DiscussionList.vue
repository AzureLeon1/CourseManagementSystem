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
        showList:[{
                discussion_id:1,
                user_name:"张萌萌",
                avatar_url:"https://view.moezx.cc/images/2018/06/12/31133259.jpg",
                role:"学生",
                content:"一个非常长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长的问题。",
                time:"2018-7-11 12:30"
            },{
                discussion_id:2,
                user_name:"同济不放假大学",
                avatar_url:"https://view.moezx.cc/images/2018/06/12/31133259.jpg",
                role:"老师",
                content:"我不想参与讨论。",
                time:"2018-7-11 12:30"
            },
        ]
      }
  },


  methods: {
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
  mounted () {
    //   updateList(classID);
  },
  computed: {

  }
}
</script>

<style scoped>
.wrapper{
    margin-bottom: 15px;
}
</style>