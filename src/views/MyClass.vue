<template>
  <el-container class="home">
    <el-aside width="260px">
      <user-nav :activeIndex="1"></user-nav>
    </el-aside>
    <el-main>
        <AllClass>

        </AllClass>
<<<<<<< HEAD
     
     
=======

>>>>>>> master
    </el-main>
  </el-container>
</template>

<script>
import UserNav from "../components/UserNav"
import AllClass from "../components/AllClass"
import CreateForm from "../components/CreateForm"

export default {
  name: 'MyClass',
  components: {
    UserNav,
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
