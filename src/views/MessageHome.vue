<template>
  <el-container class="home">
    <el-aside width="238px">
      <user-nav :activeIndex="3"></user-nav>
    </el-aside>
    <el-main style="padding: 20px 15% 0 15%;">
        <Header></Header>
        <Message position="global"></Message>
    </el-main>
  </el-container>
</template>

<script>
import UserNav from "@/components/UserNav";
import Header from "../components/Header"
import Message from "@/components/Message";
import api from "@/store/modules/message.js";
// import api from "@/api/index.js";

export default {
  name: "MessageHome",
  components: {
    Message,
    UserNav,
    Header
  }
};
</script>

<style scoped>
  .set-middle{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10vh;
  }
</style>
