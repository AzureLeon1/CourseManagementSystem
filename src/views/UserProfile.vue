<template>
  <div id="user_profile">
    <el-container class="home">
      <el-aside width="260px">
        <user-nav :activeIndex="0"></user-nav>
      </el-aside>
      <el-main>
        <div class="info">
          <div class="title">个人信息</div>

          <div class="items">
            <div class="item">
              <div class="key">
                <i class="el-icon-user"></i> &nbsp; 姓名
              </div>
              <div class="value">{{ userinfo.name }}</div>
            </div>
            <div class="item">
              <div class="key">
                <i class="el-icon-postcard"></i> &nbsp; 学工号
              </div>
              <div class="value">{{ userinfo.id }}</div>
            </div>
            <div class="item">
              <div class="key">
                <i class="el-icon-s-check"></i> &nbsp; 身份
              </div>
              <div class="value">{{ identity_zh }}</div>
            </div>
            <div class="item">
              <div class="key">
                <i class="el-icon-phone"></i> &nbsp; 学院
              </div>
              <div class="value">{{ userinfo.college }}</div>
            </div>
            <div class="item">
              <div class="key">
                <i class="el-icon-phone-outline"></i> &nbsp; 电话
              </div>
              <div class="value">{{ userinfo.phone_number }}</div>
            </div>
            <div class="item">
              <div class="key">
                <i class="el-icon-message"></i> &nbsp; 邮箱
              </div>
              <div class="value">{{ userinfo.email }}</div>
            </div>
          </div>
          <div class="btns">
            <el-button
              type="primary"
              size="small"
              class="edit"
              v-if="isCurrentUser"
              @click="dialogVisible = true"
            >修改</el-button>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import UserNav from "../components/UserNav";
export default {
  name: "UserProfile",
  components: {
    UserNav
  },
  props: ["person_id"],
  data() {
    return {};
  },
  methods: {
    identityZh() {
      switch (this.userinfo.role) {
        case "student":
          return "学生";
          break;
        case "teacher_edu":
          return "任课教师";
          break;
        case "teacher_manage":
          return "教务教师";
          break;
      }
    }
  },
  mounted() {
    this.$store.dispatch("personinfo/getPersonInfo", this.person_id);
  },
  computed: {
    userinfo() {
      return this.$store.state.personinfo.personinfo;
    },
    isCurrentUser() {
      return this.$store.state.profile.user.id === this.person_id;
    },
    identity_zh() {
      return this.identityZh();
    }
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  justify-content: center;
  // flex-direction: column;
  flex-wrap: wrap;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  padding: 10px 0 0;
  position: relative;
  margin-top: 50px;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.title {
  position: absolute;
  display: inline-block;
  font-size: 14px;
  font-weight: 300;
  left: 50%;
  top: -18px;
  transform: translate3d(-50%, 50%, 0);
  background: white;
  padding: 0 15px;
}
.btns {
  width: 180px;
  display: flex;
  .el-button {
    flex: 1;
    border-width: 1px 0 0 0;

    &:first-child {
      border-radius: 4px 4px 4px 4px;
    }

    &:last-child {
      border-radius: 4px 4px 4px 4px;
      margin: 0;
    }
  }
}
.items {
  width: 100%;
  margin: 0 50px;
  padding: 5px 35px;
  text-align: left;
  letter-spacing: 1px;
  font-weight: 300;
  .item {
    display: flex;
    margin: 15px 0;
  }
  .key {
    flex: 1;
    color: #c0c4cc;
  }
  .value {
    flex: 4;
    margin-left: -25%;
    text-align: center;
  }
}
</style>




