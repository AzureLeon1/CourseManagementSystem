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
            <div
              style="margin-left:50%; transform: translate(-30%, 0); margin-bottom: 30px; margin-top: 20px;"
            >
              <Avatar :src="userinfo.avatar" :size="120" :border="true" />
            </div>

            <div style="margin-left: auto; margin-right: auto; display: table;">
              <el-button
              size="mini"
              style="font-weight: 300; "
              v-if="!isCurrentUser && !followed"
              @click="follow"
            >关 注</el-button>
            <el-button
              size="mini"
              style="font-weight: 300"
              v-if="!isCurrentUser && followed"
              @click="unfollow"
            >取 关</el-button>
            </div>


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
      </el-main>
    </el-container>

    <!-- FIXME: 点击表单周围让表单消失时无法重置userinfo -->
    <el-dialog :visible.sync="dialogVisible" width="50%">
      <el-form label-width="80px">
        <el-form-item label="头像">
          <div style="display: flex; align-items: center;">
            <i class="avatar" :style="style" />
            <span v-if="progress && progress - 100">上传进度 {{progress}}%</span>
            <el-upload
              v-else
              :show-file-list="false"
              :action="action"
              :data="{ token: token() }"
              :on-success="handleSuccess"
              :on-progress="handleProgress"
            >
              <el-button size="small">上传头像</el-button>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="userinfo.id" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="身份">
          <el-input v-model="identity_zh" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="名字">
          <el-input v-model="userinfo.name"></el-input>
        </el-form-item>
        <el-form-item label="学院">
          <el-input v-model="userinfo.college"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="userinfo.phone_number"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="userinfo.email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="changeInfo">确认修改</el-button>
          <el-button @click="cancel">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import UserNav from "../components/UserNav";
import { token, action, domain } from "../plugins/qiniuToken";
import Avatar from "../components/Avatar";
export default {
  name: "UserProfile",
  components: {
    UserNav,
    Avatar
  },
  props: ["person_id"],
  data() {
    return {
      userinfo: {
        id: null,
        email: "",
        phone_number: null,
        name: "",
        avatar: "",
        college: "",
        role: ""
      },
      dialogVisible: false,
      token,
      action,
      domain,
      progress: 0
    };
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
    },
    handleProgress(event, file, fileList) {
      this.progress = parseInt(event.percent);
    },
    handleSuccess(response, file, fileList) {
      this.progress = 100;
      this.userinfo.avatar = this.domain + response.hash;
      this.$message({
        message: "图片上传成功~",
        type: "success"
      });
    },
    changeInfo() {
      // TODO: 测试更新用户信息的接口
      this.$store.dispatch("allput/changeUserInfo", {
        user_id: this.userinfo.id,
        form: {
          name: this.userinfo.name,
          email: this.userinfo.email,
          college: this.userinfo.college,
          phone_number: this.userinfo.phone_number,
          avatar: this.userinfo.avatar,
          user_id: this.userinfo.id,
          role: this.userinfo.role,
        }
      });
      this.dialogVisible = false;
    },
    cancel() {
      this.dialogVisible = false;
      // 撤销表单中的修改，重置 userinfo
      this.syncUser(this.user);
    },
    // 把本页面中的userinfo重置为vuex.store中的personinfo.personinfo
    syncUser(user) {
      this.userinfo.id = user.id;
      this.userinfo.email = user.email;
      this.userinfo.phone_number = user.phone_number;
      this.userinfo.name = user.name;
      this.userinfo.avatar = user.avatar;
      this.userinfo.college = user.college;
      this.userinfo.role = user.role;
      this.userinfo = Object.assign({}, this.userinfo);
    },
    follow() {
      this.$store.dispatch("twitter/followUser", {
        id: this.person_id,
        user: this.userId
      });
    },
    unfollow() {
      this.$store.dispatch("twitter/unfollowUser", {
        id: this.person_id,
        user: this.userId
      });
    }
  },
  mounted() {
    this.$store.dispatch("personinfo/getPersonInfo", this.person_id);
    this.syncUser(this.user);
  },
  computed: {
    style() {
      const src = this.userinfo.avatar;
      const size = "40";
      return {
        backgroundImage: src && `url(${src})`,
        width: `${size}px`,
        height: `${size}px`
      };
    },
    user() {
      return this.$store.state.personinfo.personinfo;
    },
    isCurrentUser() {
      return this.$store.state.profile.user.id == this.person_id;
    },
    identity_zh() {
      return this.identityZh();
    },
    followed() {
      const f = this.$store.state.twitter.followPeopleItems;
      console.log(f, this.person_id);
      return f.filter(x => x.user_id == this.person_id).length === 1;
    },
    userId() {
      return this.$store.state.profile.user.id;
    }
  },
  watch: {
    user: {
      deep: true,
      handler(user) {
        this.syncUser(user);
      }
    },
    person_id: {
      handler(person_id) {
        this.$store.dispatch("personinfo/getPersonInfo", this.person_id);
        this.syncUser(this.user);
      }
    }
  }
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
  font-size: 18px;
  font-weight: 300;
  left: 10%;
  top: -25px;
  transform: translate3d(-50%, 50%, 0);
  background: white;
  padding: 0 15px;
}
.btns {
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  width: 100px;
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
    margin-left: 10%;
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

.avatar {
  $w: 40px;
  width: $w;
  height: $w;

  display: inline-block;
  background: url("../../static/defaultAvatar.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid black;
  border-radius: 50%;
  margin-right: 10px;
}

.el-select {
  width: 100%;
}
</style>




