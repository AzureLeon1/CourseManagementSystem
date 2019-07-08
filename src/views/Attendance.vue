<template>
  <div id="attendance">
    <el-container class="home">
    <el-aside width="260px">
      <class-nav :activeIndex="7"></class-nav>
    </el-aside>
    <el-main>
      <div class="attendance form">
      <div></div>
      <div>
        <!-- <AttendanceReference /> -->
        <AttendanceTable />
      </div>
    </div>
    </el-main>
  </el-container>
  </div>
</template>

<script>
import ClassNav from "../components/ClassNav"
import AttendanceReference from "../components/AttendanceReference"

import AttendanceTable from "../components/AttendanceTable"
export default {
  name: 'Attendance',
  components: {
    AttendanceTable,
    AttendanceReference,
    ClassNav
  },
  data() {
    return {

    }
  },
  methods: {

  },
  computed() {

  }
}
</script>

<style>
.validate-code .el-form-item__content {
  display: flex;
  align-items: center;
  line-height: 0;
}
#footer {
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;
}
</style>
