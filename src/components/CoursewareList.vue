<template>
    <el-card shadow="never">
        <div>
            <el-input v-model="searchkey" placeholder="请输入课件名称" class="input-with-select">
                <el-button slot="append" icon="el-icon-search" @click="searchCourseware()"></el-button>
            </el-input>
        </div>

         <div style="text-align: left">
            <el-table :data="listdata">
                <el-table-column prop="name" label="名称"></el-table-column>
                <el-table-column  prop="location" label="下载地址"></el-table-column>
               <el-table-column label="下载" width="150px">

                   <template slot-scope="scope">
                       <el-button size="mini" @click="handledownload(scope.row)">ttt</el-button>
                   </template>
               </el-table-column>
            </el-table>
        </div>

    </el-card>
</template>
<script>
export default {
    name: 'Coursewarelist',
    data(){
        return{
            listdata: [
                {name : '课件1', location : 'www.baidu.com'},
                {name : '课件2', location : 'url2'},
                {name : '课件3', location : 'url3'}
            ],
            searchkey: ""
        }
    },
    methods: {
        searchCourseware(){
            console.log(this.searchkey);
        },
        handledownload(row){
           
        }
    }

}
</script>

