<template>
  <el-container class="home">
    <el-aside width="260px">
      <user-nav :activeIndex="3"></user-nav>
    </el-aside>
    <el-main>
      <Message></Message>
    </el-main>
  </el-container>
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

</style>