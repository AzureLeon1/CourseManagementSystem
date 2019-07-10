<template>
  <el-container class="home">
    <el-aside width="260px">
      <user-nav :activeIndex="0"></user-nav>
    </el-aside>
    <el-main>
      <div class="createTable">
        <div class="topic"></div>
        <div class="button-wrapper" >
          <el-button circle icon="el-icon-arrow-left"></el-button>
        </div>
        <!-- <div @click="parentMethod"> -->
        <TimeTable v-bind:tableData="coursetableData" 
        ></TimeTable>
        <!-- </div> -->
        <div class="button-wrapper">
          <el-button circle icon="el-icon-arrow-right" @click="this.coursetableData= 'change';"></el-button>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import UserNav from "../components/UserNav";
import TimeTable from "@/components/TimeTable";
export default {
  name: "CourseTable",
  components: {
    TimeTable,
    UserNav,
  },
  data() {
    return {
        
    };
  },
  methods: {},
  computed: {
      coursetableData(){
            alert("sss")
            return this.$store.state.coursetable.myCourselist;
      }
  },
  mounted() {
      this.$store.dispatch("coursetable/getCoursetable");
    //   alert("hi");
    //   console.log(this.$refs.time);
    //   this.$refs.time.setCourse(1, 1, 2, "ad", "adf");    
  },
};
</script>

<style scoped>
.createTable {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px - 10px);
  width: 100%;
}

.button-wrapper {
  margin: 0 40px;
}
</style>