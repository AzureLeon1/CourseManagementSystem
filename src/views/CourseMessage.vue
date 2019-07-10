<template>
    <div class="CourseMessage">
        <div class="tagWrapper">
            <div class="tag" @onclick="select('1')">活动广播</div>
            <div class="tag" @onclick="select('2')">作业广播</div>
        </div>
        <div class="messageWrapper">
            <Message></Message>
        </div>
    </div>
</template>

<script>
import UserNav from "@/components/UserNav";
import Message from "@/components/Message";
import api from "@/store/modules/message.js";
// import api from "@/api/index.js";

export default {
  name: "MessageHome",
  components: {
    Message,
    UserNav
  }
};
</script>

<style scoped>
.CourseMessage{
    display: flex;
    width: 100%;
    /* align-items: flex-start; */
    justify-content: center;
}
.tagWrapper{
    width: 30px;
    margin-top: 60px;
}
.tag{
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    margin-bottom: 1px;
    background: #7d7dc7;
    color: #ffffff;
    font-size: 14px;
}

.tag:hover{
    background: #4c4c9e;
    transition: .2s;
}
.messageWrapper{
    width: 70%;
}

</style>