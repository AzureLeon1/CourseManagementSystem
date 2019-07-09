<template>
    <div class="container">
      <div class="ccms item" @click="routeTo('Homepage')">
        <img class="logo" style="height: 70%;" src="../assets/logo.png" alt="">
        <img class="logo" style="height: 46%; margin-left: 4px;" src="../assets/CCMS.png" alt="">
      </div>

      <div class="btn item" @click="routeTo('Homepage')">
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
    width: 100vw;
    box-sizing: border-box;
    /* width: 100%;
    max-width: 100%;
    min-width: 100%; */
    border: #ffffffff 1px solid;
    background: #292961;
    color: #ffffff;
  }

  .ccms {
    height: 70%;
    padding: 0 10px;
    line-height: 33px;
    margin-left: 10px;
    cursor: pointer;
  }

  .logo{
    height: 100%;
    vertical-align: middle;
  }

  .btn {
    position: absolute;
    right: 0;
    transform: translateX(-70%);
    
    text-align: center;
    height: 70%;
    line-height: 33px;
    width: 45px;
    color: #dddddd;
  }

  /* .btn:focus {
     background: white;
     color: #606266;
     border-color: #dcdfe6;
  } */

  .item{
    border-radius: 4px;
    cursor: pointer;
    color: #dddddd;
    transition: .2s;
  }

  .item:hover {
    background: #ffffff28;
    color: #f3f3f3;
  }

  .item:active {
    background: #ffffff56;
    color: #ffffff;
  }
</style>
