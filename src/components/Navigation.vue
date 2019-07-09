<template>
    <div class="container">
      <div id="title" @click="routeTo('Homepage')">课程班级管理系统</div>

      <div class="btn" @click="routeTo('Homepage')">
        <i class="fas fa-home"></i>
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

<style scoped>
  .container {
    position: absolute;
    top: 0;

    display: flex;
    align-items: center;

    margin: 0;
    padding: 0 10px;
    z-index: 2;
    height: 50px;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    border: #ffffffff 1px solid;
    background: #292961;
    color: #ffffff;
  }

  #title {
    font-size: 1em;
    /* font-weight: bold; */
    letter-spacing: .2em;
    margin-left: 40px;
    cursor: pointer;
  }

  .btn {
    position: absolute;
    right: 0;
    transform: translateX(-70%);
    
    text-align: center;
    height: 70%;
    line-height: 33px;
    width: 45px;
    border-radius: 4px;
    cursor: pointer;
    color: #dddddd;

    transition: .2s;
  }

  /* .btn:focus {
     background: white;
     color: #606266;
     border-color: #dcdfe6;
  } */

  .btn:hover {
    background: #ffffff28;
    color: #f3f3f3;
  }

  .btn:active {
    background: #ffffff56;
    color: #ffffff;
  }
</style>
