<template>
  <div id="attendance">
    <div class="attendance form">
      <div></div>
      <div>
        <AttendanceTable />
      </div>
    </div>

  </div>
</template>

<script>
import AttendanceTable from "../components/AttendanceTable"
export default {
  name: 'Attendance',
  components: {
    AttendanceTable
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
