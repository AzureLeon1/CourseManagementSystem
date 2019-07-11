<template>
<div id="DiscussionSketchy">
    <div class="user">
        <div class="user-avatar-wrapper">
            <img class="user-avatar" :src="avatar_url" @click="hh"/>
        </div>
        <div class="user-message">
            <div class="user-name">{{user_name}}</div>
            <div class="user-identity">{{role}}</div>
        </div>
        <div class="time">{{time}}</div>
    </div>
    <div class="content">{{content}}</div>
    <div class="button-wrapper">
        <slot>
            <button @click="dialogCommentVisible=true"><i class="el-icon-chat-line-square btn-logo"></i>评论</button>
            <button @click="readMore(discussion_id)"><i class="el-icon-more btn-logo"></i>更多</button>
        </slot>
    </div>
        
    <el-dialog title="添加评论" :visible.sync="dialogCommentVisible">
        <el-form>
            <div style="font-size:16px;margin-bottom:2%;">评论内容</div>
                <el-form-item>
                    <el-input type="textarea" placeholder="请在此处填写具体评论内容" rows="7" 
                              v-model="desc" maxlength="200" @input="descInput" ></el-input>
                    <div style="float:right;font-size:12px;color:#cccbc9;">已输入{{200-remain}}/200字</div>
                </el-form-item>
        </el-form>
        <div slot="footer" class="foot">
          <button @click="dialogCommentVisible = false" style="font-size:16px;">取 消</button>
          <button type="primary" @click="submitComment" style="font-size:16px;">确 定</button>
      </div>
    </el-dialog>
  </div>
  
</template>

<script>
import api from '../api';
import { getNowTime } from '../utils/util.js'

export default {
    name: 'DiscussionSketchy',
    components: {
    },
    data () {
    return {
        dialogCommentVisible:false,
        remain:200,
        desc:"",
        inputComment:'',
        // user_name:"张萌萌",
        // avatar_url:"https://view.moezx.cc/images/2018/06/12/31133259.jpg",
        // role:"学生",
        // content:"一个非常长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长的问题。",
        // time:"2018-7-11 12:30"
        }
    },
    props: [
        'discussion_id',
        'user_name',
        'avatar_url',
        'role',
        'content',
        'time'
    ],
    methods: {
        descInput(){
            console.log(this.remain);
            var txtVal=this.desc.length;
            this.remain=200-txtVal;
        },
        readMore(id){
            this.$parent.showDiscussionDetail(id);
        },
        submitComment() {
            api.sendComment({
                course_id: this.$store.state.classinfo.classinfo.course_id,
                sec_id: this.$store.state.classinfo.classinfo.sec_id,
                semester: this.$store.state.classinfo.classinfo.semester,
                year: this.$store.state.classinfo.classinfo.year,
                user_id: this.$store.state.profile.user.id,
                content: this.desc,
                time: getNowTime(),
                question_id: this.discussion_id
            }).then(res => {
                this.$message.success("发布成功")
                this.dialogCommentVisible = false
            })
        },
        hh() {
            console.log(this.avatar_url)
        }
    },
    mounted () {
        switch (this.role) {
        case "student":
            this.role = "学生"
            break
        case "teacher_edu":
            this.role = "教师"
            break
        case "teacher_manage":
            this.role = "教务老师"
            break
        default:
            this.role = "error"
        }
    },
    computed: {

    }
}
</script>

<style>
#DiscussionSketchy
.el-dialog__body{
    padding-top: 5px;
    padding-bottom:10px;
}
#DiscussionSketchy
.el-dialog{
    width:40%;
}
</style>

<style scoped>
#DiscussionSketchy{
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
}

.user{
    display: flex;
    align-items: center;
    position: relative;
}

.user-avatar-wrapper{
    display: flex;
    align-items: center;
}

.user-avatar{
    height: 35px;
    width: 35px;
    border-radius: 50%;
    margin: 0 10px;
}

.user-name{
    font-size: 15px;
    color: #555555;
}

.user-identity{
    font-size: 13px;
    color: #555555;
}

.time{
    font-size: 12px;
    position: absolute;
    right: 5px;
    color: #555555;
}

.content{
    /* padding: 5px; */
    margin: 17px 10px;
    font-size: 15px;
    word-wrap: break-word;
}

.button-wrapper{
    display: flex;
    justify-content: flex-end;
}

button{
    display:flex;
    margin-left: 10px;
    align-items: center;
    justify-content: center;
    border: 1px solid #dcdfe6;
    /* border: none; */
    width: 65px;
    height: 28px;
    background: #fff;
    border-radius: 4px;
    outline: none;
    transition: .1s;
    cursor: pointer;
    font-size: 13px;
    letter-spacing: .2em;
}

.btn-logo{
  font-size: 20px;
  width: 30px;
}

.foot{
    display:flex;
    flex:1;
    justify-content:center;
    align-items:center;
}
button:hover{
  border: 1px solid #b9b9b9;
  background: #dddddd;
  color: #5a5a5a;
}

button:active{
  background: #fcfcfc;
  border: 1px solid #aaaaaa;
}
</style>