<template>
<div id="discussHome">
<el-container class="discussion">
  <el-aside width="238px">
    <class-nav :activeIndex="5"></class-nav>
  </el-aside>
  <el-main style="padding: 20px 15% 0 15%;">
    <Header></Header>
    <DiscussionList v-show="showAll"></DiscussionList>
    <!-- <DiscussionDetailed v-show="!showAll"></DiscussionDetailed> -->
  </el-main>
</el-container>
</div>
</template>

<script>
import ClassNav from "../components/ClassNav"
import Header from "../components/Header"
import DiscussionList from "@/components/DiscussionList"
import DiscussionDetailed from "@/components/DiscussionDetailed"

export default {
  name: 'Disscussion',
  components: {
    ClassNav,
    Header,
    DiscussionList,
    DiscussionDetailed
  },
  data () {
    return {
      showAll: true
      }
  },


  methods: {

  },
  mounted () {
    // console.log(!this.showAll)
  },
  computed: {
    
  }
}
</script>

<style scoped>

</style>