<template>
<el-dialog 
:visible.sync="showCreateMsg"
width="400px;">
    <div slot="title" class="title">创建广播</div>
    <div class="body" style="padding: 0 15px;">
        <el-form ref="form" :model="form" label-width="70px" label-position="left">
            <el-form-item label="广播范围">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="全局广播" value="beijing"></el-option>
                <el-option label="计算机系统结构" value="shanghai"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="起始时间">
                <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.start_date" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2" style="text-align: center;">-</el-col>
                <el-col :span="11">
                <el-time-picker placeholder="选择时间" v-model="form.start_time" style="width: 100%;"></el-time-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="结束时间">
                <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.end_date" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2" style="text-align: center;">-</el-col>
                <el-col :span="11">
                <el-time-picker placeholder="选择时间" v-model="form.end_time" style="width: 100%;"></el-time-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="广播类型">
                <el-radio-group v-model="form.type">
                <el-radio label="作业广播"></el-radio>
                <el-radio label="活动广播"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="广播内容">
                <el-input type="textarea" maxlength="200" :rows="6" show-word-limit v-model="form.content"></el-input>
            </el-form-item>
            <el-form-item>
                <el-col :span="11" style="text-align: center;">
                    <el-button type="primary" @click="createMsg">立即创建</el-button>
                </el-col>
                <el-col :span="7" style="text-align: center;">
                    <el-button @click="cancelWindow">取消</el-button>
                </el-col>
            </el-form-item>
        </el-form>
    </div>
</el-dialog>
</template>

<script>
import api from "@/store/modules/message.js";
export default {
    name: 'MessageCreate',
    props:{
        showCreateMsg:{
            default: false
        }
    },
    data() {
      return {
        flag_true: true,
        form: {
            region:'',
            start_date:'',
            start_time:'',
            end_date:'',
            end_time:'',
            type:'',
            content:''
        }
      }
    },
    methods: {
        cancelWindow(){
            // console.log("click cancelwindow()");
            this.$emit('hideCreateMsg');
        },
        createMsg(){
            // console.log("click createMsg()");
            //隐藏
            this.$emit("hideCreateMsg");
            //调用数据库
            // console.log(api);
            // console.log(this.form);
            api.createMessage(this.form);
        }
    }
}
</script>

<style scoped>
    .wrapper{
        /* position-center */
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        /* children element */
        display: flex;
        flex-direction: column;
        padding: 20px 40px 40px 40px;
        /* display */
        background: #fff;
        border-radius: 10px;
    }

    .title{
        text-align: center;
        font-size: 14px;
        letter-spacing: .2em;
        color: #888;
    }

    .close-btn{
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .hidden{
        display: none;
    }
</style>