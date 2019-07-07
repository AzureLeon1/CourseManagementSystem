<template>
<div>
    <!-- float: Detailed Message -->
    <el-dialog 
    :visible.sync="messageVisible"
    width="50%;">
        <div id="messageDetail" style="padding-right: 15px;">
            <div class="message-part" style="display: flex; flex-direction: row; margin-bottom: 15px;">
                <div style="width: 80px; max-width:70px; min-width:70px; margin:0 10px; text-align: center;">
                    <el-tag effect="dark" color="#62b1ff">内容</el-tag>
                </div>
                <div style="flex-grow: 1; padding: 5px;">{{content}}</div>
            </div>
            <div class="message-part" style="display: flex; flex-direction: row; margin-bottom: 15px;">
                <div style="width: 80px; max-width:70px; min-width:70px; margin:0 10px; text-align: center;">
                    <el-tag effect="dark" color="#62b1ff">类型</el-tag>
                </div>
                <div style="flex-grow: 1; padding: 5px;">
                    <i class="el-icon-success" style="color: #98c379;"></i>
                    {{type}}
                </div>
                <div style="flex-grow: 1; padding: 5px;">
                    <i class="el-icon-error" style="color: #98c379;"></i>
                    {{type}}
                </div>
            </div>
            <div class="message-part" style="display: flex; flex-direction: row; margin-bottom: 15px;">
                <div style="width: 80px; max-width:70px; min-width:70px; margin:0 10px; text-align: center;">
                    <el-tag effect="dark" color="#62b1ff">开始时间</el-tag>
                </div>
                <div style="flex-grow: 1; padding: 5px;">{{start_time}}</div>
                
                <div style="width: 80px; max-width:70px; min-width:70px; margin:0 10px; text-align: center;">
                    <el-tag effect="dark" color="#62b1ff">结束时间</el-tag>
                </div>
                <div style="flex-grow: 1; padding: 5px;">{{end_time}}</div>
            </div>

            <div class="message-part" style="display: flex; flex-direction: row-reverse; align-items: center; margin-bottom: 15px; font-size: small;">
                <div style="margin: 0 10px; line-height: 100%; vertical-align: middle;color: #aaa;">
                    <i class="el-icon-time"></i>
                    {{publish_time}}
                </div>
                <div style="margin: 0 10px; line-height: 100%; vertical-align: middle;"><el-link href="#"  type="info" style="font-size: small">from：{{from}}</el-link></div>
            </div>
        </div>

        <div slot="footer" class="dialog-footer" style="text-align: center;">
            <el-button style="font-size: 70%; padding: 8px 12px; margin: 0 10px;" type="primary" @click="readMore">查 看 详 情</el-button>
            <el-button style="font-size: 70%; padding: 8px 12px; margin: 0 10px;" type="primary" @click="messageVisible = false">我 知 道 了</el-button>
        </div>
    </el-dialog>
</div>
</template>

<script>
export default {
    name: 'MessageDetailed',
    props: {
        messageVisible:{
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
        }
    },
    data () {
        return {
        }
    },
    methods: {
        readMore(){
            messageVisible=false;
        }
    }
}
</script>

<style scoped>
    
</style>