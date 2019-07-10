<template>
  <div id="team">
    <el-container class="home">
      <el-aside width="238px">
        <class-nav :activeIndex="4"></class-nav>
      </el-aside>
      <el-main style="padding: 20px 15% 0 15%;">
        <Header></Header>
        <div class="team lists">
          <div>
            <TeamList />
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import ClassNav from "../components/ClassNav"
import Header from "../components/Header"
import TeamList from "../components/TeamList";

export default {
  name: "Team",
  components: {
    TeamList,
    ClassNav,
    Header
  },
  data() {
    return {};
  },
  methods: {},
  computed() {}
};
</script>

<style>
</style>
