<template>
  <el-card :body-style="{
    display: 'flex',
    flexDirection: 'column',
    padding: 0
  }">
    <div class="container">
      <Avatar :src="icon" :size="50" :border="false" />
      <div style="flex: 1;">
        <div class="name">{{name}}</div>
        <div class="time">{{new Date(time).toLocaleString()}}</div>
        <div class="content">{{message}}</div>
      </div>
      <i class="el-icon-delete" @click="remove" v-if="showRemove"></i>
    </div>
    <img :src="image" alt="此处有配图" v-if="image && image !== 'NO'">
  </el-card>
</template>

<script>
import Avatar from '@/components/Avatar'
export default {
  name: 'twittercard',
  components: {
    Avatar
  },
  data () {
    return {
    }
  },
  props:['name', 'message', 'icon', 'image', 'time', 'showRemove'],
  methods: {
    remove () {
      this.$emit('remove')
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    align-items: center;
    font-size: 18px;
  }
  .avatar {
    margin-right: 12px;
    flex-shrink: 0;
  }
  .name {
    font-size: 18px;
    line-height: 1;
    margin-top: 8px;
  }
  .time {
    font-size: 12px;
    opacity: 1;
    line-height: 1.4;
    font-weight: 300;
    letter-spacing: 0.5px;
    margin: 5px 0;
  }
  .container {
    display: flex;
    padding: 20px;
    padding-bottom: 10px;
  }
  .content {
    font-size: 14px;
    opacity: 1;
    line-height: 1.4;
    font-weight: 300;
    letter-spacing: 0.5px;
  }
  img {
    margin-top: 0px;
    margin-bottom: 10px;
    border-radius: 0 0 4px 4px;
    width: 90%;
    margin-left: auto;
  margin-right: auto;
  }
  .el-icon-delete {
    color: #c0c4cc;
    cursor: pointer;
    transition: .2s;

    &:hover {
      color: #606266;
    }
  }
</style>
