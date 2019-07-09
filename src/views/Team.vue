<template>
  <div id="team">
    <el-container class="home">
      <el-aside width="260px">
        <class-nav :activeIndex="4"></class-nav>
      </el-aside>
      <el-main>
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
import TeamList from "../components/TeamList";

export default {
  name: "Team",
  components: {
    TeamList,
    ClassNav
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
