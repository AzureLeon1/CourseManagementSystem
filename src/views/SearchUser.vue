<template>
  <div id="search_user">
    <el-container class="home">
      <el-aside width="260px">
        <user-nav :activeIndex="0"></user-nav>
      </el-aside>
      <el-main>
        <SearchUserList style="margin-top: 20px;"/>

      </el-main>
    </el-container>
  </div>
</template>

<script>
import SearchUserList from "../components/SearchUserList"
import UserNav from "../components/UserNav";
export default {
  name: "SearchUser",
  components: {
    UserNav,
    SearchUserList
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




