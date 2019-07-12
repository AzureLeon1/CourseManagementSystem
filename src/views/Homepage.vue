<template>
  <el-container class="home">
    <el-aside width="260px">
      <user-nav :activeIndex="0"></user-nav>
    </el-aside>
    <el-main>
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
import UserNav from "../components/UserNav"

export default {
  name: 'Homepage',
  components: {
    UserNav
  },
  data () {
    return {
      msg: 'Welcome to CCMS'
    }
  }
}
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
