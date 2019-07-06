<template>
<div id="MessageHome">
    <el-container style="min-height: 500px; width: 70%; margin:20px auto 20px auto;">
        <el-head></el-head>
        <el-main style="padding: 15px; border: 1px solid #eee">
            <el-table :data="tableData" @row-click="readDetail">
                <el-table-column prop="message" label="广播消息" min-width="200px;">
                    <template slot-scope="scope">
                        <p class="message">{{scope.row.message}}</p>
                    </template>
                </el-table-column>
                <el-table-column prop="from" label="来自" width="150px">
                    <template slot-scope="scope">
                        <el-link class="from">{{scope.row.from}}</el-link>
                    </template>
                </el-table-column>
                <el-table-column prop="time" label="时间" width="150px">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span>{{scope.row.time}}</span>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
        <el-footer style="text-align: center; margin: 10px auto;">
            <el-pagination
            layout="prev, pager, next"
            :total="1000">
            </el-pagination>
        </el-footer>
    </el-container>

    <div class="addbutton-wrapper formanager">
        <el-button style="height: 50px; width:50px; text-align: center; border-radius:50%; padding: 17px 0;">
            <i class="el-icon-plus"></i>
        </el-button>
    </div>

    <el-dialog 
    :visible.sync="messageVisible"
    width="60%">
    <div id="messageDetail">
        
    </div>
    <div slot="footer" class="dialog-footer" style="text-align: center;">
        <el-button style="font-size: 70%; padding: 8px 12px;" type="primary" @click="messageVisible = false">我 知 道 了</el-button>
    </div>
    </el-dialog>
</div>
</template>

<script>
import Message from '@/components/Message';
export default {
    name: 'MessageHome',
    components: {
        Message,
    },
    data() {
        const simData={
            id:123123,  //广播的ID
            message:"我是一条很长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长的广播",
            from:"计算机系统结构",
            time:"2019-6-19"
        };
        return {
            message: "",
            from: "",
            time: "",
            messageVisible: false,
            tableData: Array(3).fill(simData)
        }
    },
    methods: {
        readDetail(row){
            this.messageVisible = true;
            //update content
            this.message=row.message;
            this.from=row.from;
            this.time=row.time;
        }

        
    }
}
</script>

<style scoped>
.message{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    text-overflow:ellipsis; 
    overflow: hidden;
}

.addbutton-wrapper{
    position: absolute;
    right: 12%;
    bottom: 25%;
}
</style>