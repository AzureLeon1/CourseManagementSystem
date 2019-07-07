<template>
  <div id="friends">
    <el-container class="home">
    <el-aside width="260px">
      <user-nav :activeIndex="0"></user-nav>
    </el-aside>
    <el-main>
      <h1 style="text-align: center">Friends Page</h1>
    </el-main>
  </el-container>

  </div>
</template>

<script>
import UserNav from "../components/UserNav"
export default {
  name: 'Friends',
  components: {
    UserNav
  },
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style>

</style>




