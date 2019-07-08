<template>
  <div class="countDownBox">
    {{leftHours}}时{{leftMins}}分{{leftSeconds}}秒
  </div>
</template>

<script>
export default {
  data() {
    return {
      endHours: -1,
      endMins: -1,
      leftHours: -1,
      leftMins: -1,
      leftSeconds: -1,
      leftTotalSeconds: -1
    }
  },

  props: {
    endTime: String
  },

  methods: {
    getData() {
      var time = this.endTime.split(" ")[1]
      this.endHours = Number(time.split(":")[0])
      this.endMins = Number(time.split(":")[1])
      var date = new Date()
      this.leftHours = this.endHours - date.getHours()
      this.leftMins = this.endMins - date.getMinutes()
      this.leftSeconds = date.getSeconds()
      if (date.getMinutes() > this.endMins) {
        this.leftHours -= 1
        this.leftMins += 60
      }
      this.leftTotalSeconds = this.leftHours*3600 + 
        this.leftMins*60 + this.leftSeconds
      // ser interval
      let clock = window.setInterval(() => {
        --this.leftTotalSeconds;
        if (this.leftTotalSeconds == 0) {
          window.clearInterval(clock)
          this.$emit('timeOver')
          return
        }
        this.leftHours = Math.floor(this.leftTotalSeconds / 3600)
        this.leftMins = Math.floor(this.leftTotalSeconds % 3600 / 60)
        this.leftSeconds = this.leftTotalSeconds % 60
      }, 1000)
    }
  },

  mounted() {
    this.getData()
  }
}
</script>

<style>
.countDownBox {
  width: 120px;
  padding: 12px 10px;
  border-radius: 5px;
  background: #409eff;
  color: white;
  font-size: 16px;
  font-weight: 600;
  position: fixed;
  right: 40px;
  top: 100px;
}
</style>
