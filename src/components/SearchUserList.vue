<template>
  <div class="search-user-list">
    <el-input v-model="searchcondition" placeholder="请输入查询用户的名字">
      <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
    </el-input>

    <div
      v-for="item in result"
      @click="$router.push({name: 'UserProfile', params: {person_id: item.user_id}})"
      :key="item.user_id"
    >
      <UserCard :name="item.name" :role="item.role" :avatar="item.avatar" :department="item.department" style="margin: 10px 0;"/>
    </div>
  </div>
</template>

<script>
import UserCard from "../components/UserCard";
export default {
  name: "SearchUserList",
  components: {
    UserCard
  },
  data() {
    return {
      searchcondition: "",
      current: 1,
      pageSize: 0
    };
  },
  methods: {
    search() {
      this.$store.dispatch(
        "userlistitem/getUserListItem",
        this.searchcondition
      );
    }
  },
  mounted() {
    this.pageSize = 10;
    this.current = 1;
  },
  computed: {
    result() {
      return this.$store.state.userlistitem.SearchResult;
    }
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
.search-user-list {
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
}
</style>
