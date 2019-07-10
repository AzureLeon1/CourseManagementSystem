<template>
<div id="DiscussionComment">
    <div class="user">
        <div class="user-avatar-wrapper">
            <img class="user-avatar" :src="avatar_url"/>
        </div>
        <div class="user-message">
            <div class="user-name">{{user_name}}</div>
            <div class="user-identity">{{role}}</div>
        </div>
        <div class="time">{{time}}</div>
    </div>
    <div class="content">{{content}}</div>
</div>
</template>

<script>

export default {
    name: 'DiscussionComment',
    components: {
    },
    data () {
        return {
            // discussion_id:1,
            // user_id:1,
            // user_name:'name',
            // role:'student',
            // content:"可能是题目有问题吧，按一种理解来的话，答案这样也可以",
            // time: "1997-12-11 15:30",
            // question_id:111
        }
    },
    props: [
        'discussion_id',
        // 'user_id',
        'user_name',
        'avatar_url',
        'role',
        'content',
        'time',
        'question_id',
    ],
    methods: {
    },
    mounted () {
    },
    computed: {

    }
}
</script>

<style scoped>
#DiscussionComment{
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid #e5e5e5;
    border-left: 35px solid #e5e5e5;
    border-radius: 4px;
}

.user{
    display: flex;
    align-items: center;
    position: relative;
}

.user-avatar-wrapper{
    display: flex;
    align-items: center;
}

.user-avatar{
    height: 35px;
    width: 35px;
    border-radius: 50%;
    margin: 0 10px;
}

.user-name{
    font-size: 15px;
    color: #555555;
}

.user-identity{
    font-size: 13px;
    color: #555555;
}

.time{
    font-size: 12px;
    position: absolute;
    right: 5px;
    color: #555555;
}

.content{
    /* padding: 5px; */
    margin: 17px 10px;
    font-size: 15px;
    word-wrap: break-word;
}

.button-wrapper{
    display: flex;
    justify-content: flex-end;
}
</style>