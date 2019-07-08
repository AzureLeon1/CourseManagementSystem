<template>
  <div class="userNav">
    <el-row style="text-align: center">
      <img :src="user.avatar" class="avatar" @click="routeTo('UserProfile', {person_id: user.id})" />
      <div style="margin-top: -15px; font-size: 14px; font-weight: 300; ">{{user.name}}</div>
      <div style="margin-bottom: 15px; font-size: 14px; font-weight: 300;">{{user.email}}</div>
    </el-row>
    <el-row style="margin-bottom: 10px">
      <el-col :span="7" :offset="4">
        <el-button type="primary" size="mini" @click="routeTo('Friends')">关注: {{user.following}}</el-button>
      </el-col>
      <el-col :span="7" :offset="2">
        <el-button type="primary" size="mini" @click="routeTo('Friends')">粉丝: {{user.follower}}</el-button>
      </el-col>
    </el-row>
    <ul>
      <li
        v-for="item in menu"
        :key="item.index"
        :class="item.index == activeIndex ? 'active' : ''"
        @click="routeTo(item.routeName)"
      >
        <i :class="item.icon"></i>
        &nbsp;&nbsp;{{item.title}}
      </li>
    </ul>
    <el-row style="text-align: center">
      <el-button type="danger" class="logoutBtn" @click="logout">登出</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [],
      role: "",
      user: {
        avatar: "static/defaultAvatar.jpg",
        role: "student",
        following: 0,
        follower: 0
      }
    };
  },

  props: {
    activeIndex: Number
  },

  methods: {
    getData() {
      this.user = this.$store.state.profile.user;
      if (this.user.role == "student" || this.user.role == "teacher") {
        this.menu.push(
          {
            index: 1,
            title: "我的班级",
            routeName: "MyClass",
            icon: "el-icon-school"
          },
          {
            index: 2,
            title: "好友动态",
            routeName: "Twitter",
            icon: "el-icon-chat-line-square"
          },
          {
            index: 3,
            title: "我的消息",
            routeName: "MessageHome",
            icon: "el-icon-message"
          },
          {
            index: 4,
            title: "课程表",
            routeName: "",
            icon: "el-icon-date"
          },
          {
            index: 5,
            title: "期末总结",
            routeName: "",
            icon: "el-icon-data-analysis"
          }
        );
      } else if (this.user.role == "jwteacher") {
        this.menu.push({
          index: 1,
          title: "发布动态",
          routeName: ""
        });
      }
    },
    routeTo(name, params) {
      this.$router.push({ name, params });
    },
    logout() {
      this.$store.dispatch('profile/logout')
    }
  },

  mounted() {
    this.getData();
  },

  computed: {
  }
};
</script>


<style>
.userNav {
  margin: 20px 10px 20px 0;
  padding: 0;
  box-shadow: 2px 2px 20px -11px black;
  min-height: 630px;
}

.userNav img.avatar {
  background-size: cover;
  width: 120px;
  height: 120px;
  border-radius: 100%;
  cursor: pointer;
  margin: 20px auto;
}

.userNav ul {
  text-decoration-style: none;
  text-align: center;
  user-select: none;
  margin: 0;
  padding: 0;
}

.userNav ul li {
  list-style: none;
  height: 60px;
  line-height: 60px;
  color: #303133;
  font-size: 17px;
  cursor: pointer;
}

.userNav ul li:hover {
  background-color: #ecf5ff;
}

.userNav ul li.active {
  color: #409eff;
}

.userNav .logoutBtn {
  margin: 25px auto;
}
</style>
