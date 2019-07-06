<template>
    <el-container style="min-height: 500px; width: 80%; margin:20px auto 20px auto;">
        <el-head></el-head>
        <el-main style="padding: 15px; border: 1px solid #eee">
            <el-table :data="tableData" >
                <el-table-column prop="message" label="消息" min-width="200px;">
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
    
</template>

<script>
import MessageShortcut from '@/components/MessageShortcut';
export default {
    name: 'MessageHome',
    components: {
        MessageShortcut
    },
    data() {
        const simData={
            message:"我是一条很长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长的广播",
            from:"计算机系统结构",
            time:"2019-6-19"
        };
        return {
            tableData: Array(3).fill(simData)
        }
    },
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

</style>