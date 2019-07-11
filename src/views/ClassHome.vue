<template>
  <el-container class="home">
    <el-aside width="260px">
      <class-nav :activeIndex="0"></class-nav>
    </el-aside>
    <el-main>
      <!-- <h1 style="text-align: center">ClassHome Page</h1> -->
      <div class="hi">
        <div>Welcome to CCMS! :)</div>
        <div class="intro">
          Simple, easy, and fast.
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import ClassNav from "../components/ClassNav";

export default {
  name: "ClassHome",
  components: {
    ClassNav
  },
  props: ["class_id"],
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("classinfo/getClassInfo", {
      form: this.$store.state.classlistitem.clickedclass,
      role: this.$store.state.profile.user.role
    });
    this.$store.dispatch(
      "classinfo/getJoinStatus",
      this.$store.state.classlistitem.clickedclass
    );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hi{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  text-align: center;
  font-size: 28px;
  font-family: 'Ruihei';
  color: #555;
  margin: 80px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #ddd;
}

.intro{
  margin: 20px;
  font-size: 60%;
}
</style>
