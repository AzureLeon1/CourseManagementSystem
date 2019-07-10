<template>
  <el-container class="home">
    <el-aside width="238px">
      <user-nav :activeIndex="1"></user-nav>
    </el-aside>
    <el-main>
      <Header></Header>
      <AllClass></AllClass>
    </el-main>
  </el-container>
</template>

<script>
import UserNav from "../components/UserNav"
import Header from "../components/Header"
import AllClass from "../components/AllClass"
import CreateForm from "../components/CreateForm"

export default {
  name: 'MyClass',
  components: {
    UserNav,
    Header,
    AllClass,
    CreateForm
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
