<template>
  <div>
    <el-container class="home">
      <el-aside width="260px">
        <user-nav :activeIndex="0"></user-nav>
      </el-aside>
      <el-main>
        <p style="text-align: center; margin-top: 20px; margin-bottom: 0">好友管理</p>

        <div class="container">
          <div class="followings">
<div class="title">我的关注</div>
        <div class="friends">
          <div
            v-for="(item, index) in followings"
            :key="index"
            class="friend"
            @click="$router.push({name: 'UserProfile', params: {person_id: 100001}})"
          >
            <Avatar :src="item.avatar" :size="40" :border="false" />
            <div>{{item.name}}</div>
          </div>
        </div>

          </div>

          <div class="followers">
<div class="title">我的粉丝</div>
        <div class="friends">
          <div
            v-for="(item, index) in followers"
            :key="index"
            class="friend"
            @click="$router.push({name: 'UserProfile', params: {person_id: 100001}})"
          >
            <Avatar :src="item.avatar" :size="40" :border="false" />
            <div>{{item.name}}</div>
          </div>
        </div>

          </div>

        </div>


      </el-main>
    </el-container>
  </div>
</template>

<script>
import UserNav from "../components/UserNav";
export default {
  name: "Friends",
  components: {
    UserNav
  },
  data() {
    return {
      followings: {},
      followers: {}
    };
  },
  methods: {},
  computed: {}
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}

.followings {
  flex: 1;
  margin: 0 30px;

}

.followers {
  flex: 1;
  margin: 0 30px;
}

.title {
  position: relative;
  display: inline-block;
  font-size: 14px;
  font-weight: 300;
  transform: translate3d(0, 50%, 0);
  background: white;
  padding: 0 10px;
  left: 6px;
}

.friends {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  padding: 20px 15px 15px;
}
.friend {
  text-align: center;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 1px;
  margin: 10px;
}
</style>




