<template>
    <el-card shadow="hover" :body-style="{
        display: 'flex',
    }">
    <Avatar :src="imageURL" :size="80" :border="false"/>
    <div>
        <div class="name">{{classname}}</div>
        <div class="content">{{content}}</div>
    </div>


    </el-card>
</template>

<script>
import Avatar from '@/components/Avatar'
export default {
    name: 'ClassCard',
    components: {
        Avatar
    },
    data(){
        return {

        }
    },
    methods: {
        enter() {
            const h = this.$createElement;
            this.$router.push({name: 'ClassInfo'});
        }
    },
    props: ['classname', 'content', 'imageURL']

}
</script>
<style lang="scss" scoped>
.header {
    display:flex;
    align-items: conter;
    font-size: 18px;
}
.avatar{
    margin-right: 15px;
    flex-shrink: 0;
}
.name{
    font-size: 18px;
    line-height: 1;
    margin-bottom: 10px;
}
.content{
    font-size: 12px;
    opacity: 1;
    line-height: 1.4;
    font-weight: 300;
    letter-spacing: 0.5px;
}
</style>


