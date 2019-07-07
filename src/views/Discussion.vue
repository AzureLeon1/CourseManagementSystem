<template>
  <el-container class="discussion">
    <el-aside width="270px">
      <h>班级导航栏</h>
    </el-aside>
    <el-container>
      <el-header >
        <div class="search">
          <el-form :model="formInline" class="demo-form-inline" style="display: flex;">
            <el-form-item class="inputarea" style="flex-grow:1;">
              <el-input placeholder="请输入内容" v-model="input"></el-input>
            </el-form-item>
            <el-form-item >
              <el-button type="primary" icon="el-icon-search" @click="onSubmit">搜索</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-header>
      <el-main>
        <discussion-home></discussion-home>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
import DiscussionHome from "../components/DiscussHome"
export default {
  name: 'Discussion',
  components: {
    DiscussionHome

  },
  data() {
    return {
      input:''
    }
  },
  methods: {
    onSubmit(){

    }

  },
  computed() {

  }
}
</script>

<style>
.el-aside{
    color: #333;
    text-align: center;
    line-height: 400px;
}

.search{
    margin-top:2%;
    margin-left:15px;
    margin-right:10%;
}

.inputarea{
  margin-right:1%;
}

.el-main{
    margin-top: 1%;
    margin-left:15px;
    margin-right:10%;
}

</style>