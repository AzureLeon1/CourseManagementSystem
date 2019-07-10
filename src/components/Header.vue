<template>
    <div class="header">
        <div class="tag">{{routeType}}</div>
        <div class="tag" style="cursor: pointer;" @click="">{{routeName}}</div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return {
            routeType:" ",
            routeName:" "
        }
    },
    methods: {
        getRoute(){
            this.routeName=this.$route.path;
            if(this.routeName.search('/myclass')!=-1){
                // console.log("匹配myclass");
                this.routeName="我的班级";
                this.routeType="个人主页";
            }
            else if(this.routeName.search('/messageHome')!=-1){
                this.routeName="我的消息";
                this.routeType="个人主页";
            }
            else if(this.routeName.search('/twitter')!=-1){
                this.routeName="好友动态";
                this.routeType="个人主页";
            }
            else if(this.routeName.search('/coursetable')!=-1){
                this.routeName="课程表";
                this.routeType="个人主页";
            }
            else if(this.routeName.search('/coursemessage')!=-1){
                this.routeName="班级消息";
                this.routeType="课程主页";
            }
        }
    },
    mounted(){
        this.getRoute();
    }
}
</script>

<style scoped>
.header{
    display: flex;
    align-items: center;
    padding: 10px 0;
    margin: 0 0 30px 0;
    border-bottom: 1px solid #cccccc;
    letter-spacing: .1em;
    font-size: 13px;
    color: #555555;
}

.header :not(:last-child):after{
    content: ">";
    font-size: 80%;
    vertical-align: middle;
    margin: 0 5px;
    /* background-color: red; */
    /* border-bottom: 1px solid red; */
}

.header .tag{
    vertical-align: baseline;
    /* border-bottom: 1px solid red; */
}

.header :last-child{
    font-weight: bold;
    font-size: 105%;
    color: #777777;
    /* border-bottom: 1px solid black; */
}

.header :last-child:hover{
    text-decoration: underline;
}

.partition{
    /* height: 1px; */
    content:">>";
    border-bottom: 1px #294e70;
}
</style>