<template>
<div>
    <!-- float: Detailed Message -->
    <el-dialog
    :visible.sync="showMessageDetailed"
    width="50%;">
        <div id="messageDetail" style="padding-right: 15px;">
            <div class="message-part">
                <div class="label">
                    来 自<i class="el-icon-caret-right"></i>
                </div>
                <div style="flex-grow: 1; padding: 5px;">{{from}}</div>
            </div>
            <div class="message-part">
                <div class="label">
                    时 间<i class="el-icon-caret-right"></i>
                </div>
                <div style="flex-grow: 1; padding: 5px;">{{start_time}} - {{end_time}}</div>
            </div>
            <div class="message-part">
                <div class="label">
                    广播内容<i class="el-icon-caret-right"></i>
                </div>
                <div style="flex-grow: 1; padding: 5px;">{{content}}</div>
            </div>
            <div class="message-part">
                <div class="publish-time">发布于 <i class="el-icon-time"></i>{{publish_time}}</div>
            </div>
        </div>

        <div slot="footer" class="dialog-footer" style="text-align: center;">
            <el-button v-if="limit()" style="font-size: 70%; padding: 8px 12px; margin: 0 10px; background-color: #ff7675; border-color: #ff7675;" type="primary" @click="deleteBro">删 除 广 播</el-button>
            <el-button style="font-size: 70%; padding: 8px 12px; margin: 0 10px;" type="primary" @click="hideReadMsg">我 知 道 了</el-button>
        </div>
    </el-dialog>
</div>
</template>

<script>
import api from '../api/index.js'
export default {
    name: 'MessageDetailed',
    props: {
        showMessageDetailed:{
            default: false
        },
        broadcast_id:{
            default: 0
        },
        type:{
            default: 2
        },
        scope:{
            default: 1
        },
        content:{
            default: ""
        },
        from:{
            default: ""
        },
        publish_time:{
            default: ""
        },
        start_time:{
            default: ""
        },
        end_time:{
            default: ""
        },
        position: {
          default: ""
        }
    },
    data () {
        return {
        }
    },
    methods: {
      limit() {
        if (this.$store.state.profile.user.role == 'teacher_manage') {
          return true
        }
        else if (this.$store.state.profile.user.role == 'teacher_edu' && this.position == 'class') {
          return true
        }
        else {
          return false
        }
      },
        deleteBro(){
            api.deleteBro( {broadcast_id: this.broadcast_id} )
              .then(res => {
                console.log(res);
                this.$emit("hideReadMsg");
                this.$parent.initial()
              })
        },
        hideReadMsg(){
            this.$emit("hideReadMsg");
        }
    }
}
</script>

<style scoped>
    .message-part{
        display: flex;
        flex-direction: row;
        margin-bottom: 15px;
    }
    .label{
        padding: 3px;
        color: #8d8d8d;
        font-weight: bold;
        font-size: 110%;
        height: 100%;
        min-width: 86px;
        margin:0 10px;
        /* text-align: center; */
    }
    .publish-time{
        width: 100%;
        text-align: right;
        padding: 0 20px;
        color: #aaa;
        font-size: small;
        letter-spacing: .1em;
    }
</style>
