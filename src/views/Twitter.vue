<template>
  <div id="twitter">
    <el-container class="home">
      <el-aside width="260px">
        <user-nav :activeIndex="2"></user-nav>
      </el-aside>
      <el-main>
        <div class="twitter_list">
        <transition-group name="list-complete" tag="div">
          <SendTwitter @send="handleSend" v-if="!see" key="SendTwitter" class="list-complete-item" />
          <div
            v-for="(item) in twitterResult"
            :key="item.twitter_id"
            class="list-complete-item"
            @click="toUserPage(item.user_id)"
            :style="{cursor: item.user_id == userId ? '' : 'pointer'}"
          >
            <TwitterCard
              :name="item.user_name"
              :message="item.content"
              :time="item.time"
              :icon="item.avatar"
              :image="item.image"
              :id="item.twitter_id"
              @remove="handleRemove"
              :show-remove="item.user_id == userId"
            />
          </div>
        </transition-group>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import TwitterCard from "@/components/Twittercard";
import SendTwitter from "@/components/SendTwitter";
import UserNav from "../components/UserNav";
export default {
  name: "Twitter",
  components: {
    UserNav,
    TwitterCard,
    SendTwitter
  },
  data() {
    return {
      see: false,
      current: 1,
      pageSize: 0
    };
  },
  methods: {
    syncTwitterItem(TwitterItems) {
      this.apiTwitterItems = TwitterItems;
    },
    handleRemove(id) {
      this.$store.dispatch("alldelete/deletePost", {
        id,
        person_id: this.userId
      });
    },
    handleSend(form) {
      this.$store.dispatch("allpost/broadcastStudent", {
        form,
        person_id: this.userId
      });
    },
    handleChange(val) {
      console.log(val);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.current = val;
    },
    toUserPage(person_id) {
      if (person_id != this.userId) {
        this.$router.push({ name: "UserProfile", params: { person_id } });
      }
    }
  },
  computed: {
    twitterResult() {
      // TODO: 对mergedTwitters排序
      console.log(this.MergedTwitterItems);

      // 当前页面的twitter内容
      const val = this.current;
      return this.MergedTwitterItems.slice(
        (val - 1) * this.pageSize,
        val * this.pageSize
      );
    },
    MergedTwitterItems() {
      return this.$store.state.twitter.mergedTwitterItems;
    },
    MyTwitterItems() {
      return this.$store.state.twitter.myTwitterItems;
    },
    FriendTwitterItems() {
      return this.$store.state.twitter.friendTwitterItems;
    },
    userId() {
      return this.$store.state.profile.user.id;
    },
    total() {
      return this.twitterList.length;
    }
  },
  mounted: function() {
    this.$store.dispatch("twitter/getUserTwitter", this.userId);
    this.pageSize = 10;
    this.current = 1;
  },
  watch: {
    MergedTwitterItems: {
      deep: true,
      handler(MergedTwitterItems) {
        this.syncTwitterItem(MergedTwitterItems);
      }
    }
  }
};
</script>

<style lang="scss" <style lang="scss" scoped>
.list-complete-item {
  transition: all 0.3s;
  margin-bottom: 10px;
}
.twitter_list {
  margin-left: auto;
  margin-right: auto;
  width: 600px;
}
</style>



