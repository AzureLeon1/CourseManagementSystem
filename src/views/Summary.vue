<template>
  <el-card style="width: 900px; margin:20px auto 20px auto">
    <div style=" vertical-align:middle; text-align:center;margin-left: auto;margin-right: auto;">
        <!-- 期末总结 -->
    </div><br>
    <el-carousel :interval="4000" type="card" height="500px" weigth="500px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </el-card>
</template>


<script>
export default {
  name: "Summary"
};
</script>
>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #b4bbc5;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3d7db;
}
</style>