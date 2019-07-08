<template>
  <div id="search_user">
    <el-container class="home">
      <el-aside width="260px">
        <user-nav :activeIndex="0"></user-nav>
      </el-aside>
      <el-main>
        <h1 style="text-align: center">Search User Page (施工中...)</h1>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import UserNav from "../components/UserNav";
export default {
  name: "SearchUser",
  components: {
    UserNav
  },
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>

<style>
</style>




