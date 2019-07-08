<template>
  <el-container class="home">
    <el-aside width="260px">
      <user-nav :activeIndex="0"></user-nav>
    </el-aside>
    <el-main>
    <ClassList>
        
    </ClassList>
    </el-main>
  </el-container>
</template>

<script>
import UserNav from "../components/UserNav"
import ClassList from "../views/ClassList"

export default {
  name: 'Homepage',
  components: {
    UserNav,
    ClassList
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
