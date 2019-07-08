<template>
  <div class="CountDownBox">
    <span
      v-for="(t, index) in countDownArr"
      :key="index"
      ><br v-if="index === 2"/></span>
  </div>
</template>

<script>
import {getNowTime} from '../utils/util'

export default {
  data() {
    return {
      endTimeArr: [],
      countDownArr: []
    }
  },

  props: {
    endTime: String
  },

  methods: {
    getData() {
      this.endTimeArr = this.parseTime(this.endTime)
      this.countDownArr = this.endTimeArr - this.parseTime(getNowTime())
    },

    parseTime(time) {
      var timeArr = new Array(5)
      var date = time.split(" ")[0]
      var clock = time.split(" ")[1]
      var dateArr = date.split(".")
      var clockArr = clock.split(":")
      timeArr[0] = Number(dateArr[0])
      timeArr[1] = Number(dateArr[1])
      timeArr[2] = Number(dateArr[2])
      timeArr[3] = Number(clockArr[0])
      timeArr[4] = Number(clockArr[1])

      return timeArr
    }
  },

  mounted() {
    this.getData()
  }
}
</script>

<style>
.countDownBox {
  width: 100px;
  padding: 10px;
  border-radius: 5%;
  background: #409eff;
  color: white;
  font-size: 16px;
  font-weight: 600;
}
</style>
