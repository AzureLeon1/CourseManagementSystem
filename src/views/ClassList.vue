<template>
    <div class="class-list">
        <div class="left">
            <el-input v-model="searchcondition" placeholder="请输入查询的班级"></el-input>

            <div v-for="(item, index) in result" :key="index">
                <ClassCard :classname="item.name" :content="item.introduction"
                :imgURL="item.avatar"/>

            </div>

        </div>




    </div>
</template>
<script>
import ClassCard from '../components/ClassCard'
export default {
    name: 'ClassList',
    components: {
        ClassCard
    },
    data(){
        return {
            searchcondition: '',
            current: 1,


        }
    },

    mounted(){
        
    }

    
}
</script>

