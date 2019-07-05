<template>
  <el-header id="header">
    <div class="container">
      <div id="title" @click="routeTo('Homepage')">课程班级管理系统</div>

      <div id="home_btn">
        <el-button class="btn" @click="routeTo('Homepage')" circle> <i class="fas fa-home"></i> </el-button>
      </div>


    </div>
  </el-header>

</template>

<script>
export default {
  name: 'Navigation',
  components: {
  },
  data () {
    return {

    }
  },
  methods: {
    routeTo(name, params) {
      this.$router.push({ name, params })
    }
  },
  mounted () {
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>

  #header, .container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
  #header {
    position: relative;
    box-shadow: 0 2px 20px -11px black;
  }
  .container {
    max-width: 800px;
    margin-left: 7%;

    & > #title {
      cursor: pointer;
    }

  }
  #title {
    font-size: 1.2em;
    margin-right: 20px;
  }

  #home_btn {
    position: absolute;
    right: 10%;
  }

  .btn:focus {
    background: white;
    color: #606266;
    border-color: #dcdfe6;
  }

  .btn:active {
    background: #edf5ff;
    color: #559ffd;
    border-color: #559ffd;
  }
</style>
