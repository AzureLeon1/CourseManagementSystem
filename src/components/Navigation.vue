<template>
    <div class="container">
      <div id="title" @click="routeTo('Homepage')">课程班级管理系统</div>

      <div id="home_btn">
        <el-button class="btn" @click="routeTo('Homepage')" circle> <i class="fas fa-home"></i> </el-button>
      </div>


    </div>

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
  .container {
    position: absolute;
    z-index: 2;

    margin: 0;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    height: 50px;

    box-shadow: 0 2px 20px -11px black;
    background: #292961;
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
