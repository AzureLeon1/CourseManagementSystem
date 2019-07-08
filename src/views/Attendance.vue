<template>
  <div id="attendance">
    <div class="attendance form">
      <div></div>
      <div>
        <!-- <AttendanceReference /> -->
        <AttendanceTable />
      </div>
    </div>
  </div>
</template>

<script>
//import AttendanceReference from "../components/AttendanceReference"

import AttendanceTable from "../components/AttendanceTable"
export default {
  name: 'Attendance',
  components: {
    AttendanceTable,
   // AttendanceReference
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
