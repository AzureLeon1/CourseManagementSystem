
<template>
    <div class="personal">
        <div class="left">
            <div v-if="isCurrentUser">
                <div class="title">我的班级</div>
                <div class="class_es">
                    <div v-for="(item, index) in claes" :key="index" class="a_class"
                        @click="$router.push({name: 'CorpInfo', params: {corp_id: 1}})">
                        <Avatar :src="item.avatar" :size="40" :border="false"/>
                        <div>{{item.name}}</div>
                    
                     </div>
                     <div class="a_class" @click="$router.push({name: 'AddClass'})">
                        <Avatar :src="addimg" :size="40" :border="false"/>

                     </div>


                    <div v-for="(item, index) in unauditClasses" :key="'u' + index" class="class unaudit">
                        <Avatar :src="item.avatar" :size="40" :border="false"/>

                    <div>{{item.name}}</div>
                    </div>

                </div>
            </div>
        </div>
           
  
    </div>



</template>
<script>
import Avatar from '@/components/Avatar'
export default {
    name: 'AllClass',
    components: {
        Avatar
    },
    props: ['person_id'],
    data(){
       return{
           addimg : '../static/add.png'
          
       }

    },
    computed: {
        claes(){
            return [{name: '同济大学谷歌俱乐部', avatar: '../static/defaultAvatar.jpg'}]

        },
        unauditClasses() {

        },
        isCurrentUser() {
            return true

        },
        user() {

        }
    }
}
</script>
<style lang="scss" scoped>
.personal {
    width: 100%;
    max-width: 800px;
    display: flex;
    margin: 30px auto;
}
.left {
    flex: 2;
    margin-right: 20px;
    position: relative;

    .el-input, .el-card {
        margin: 15px 0;
    }

    .title {
        position: relative;
        display: inline-block;
        font-size: 14px;
        font-weight: 300;
        transform: translate3d(0, 50%, 0);
        background: white;
        padding: 0 10px;
        left: 6px;
    }
}
.class_es {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    padding: 20px 15px 15px;
}
.a_class{
    text-align: center;
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 1px;
    margin: 10px;
}
.club.unaudit .avatar {
    opacity: .5;
}

</style>


