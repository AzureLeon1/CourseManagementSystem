<template>
  <div class="UserNavWrapper">
    <div class="userNav">
      <img class="avatar" :src="user.avatar" @click="routeTo('UserProfile'+ {person_id:user.id})">
      <div class="name">{{user.name}}</div>
      <div class="email">{{user.email}}</div>
      <div class="btn-wrapper">
        <el-button type="primary" size="mini" @click="routeTo('Friends')">关注：{{user.following}}</el-button>
        <el-button type="primary" size="mini" @click="routeTo('Friends')">粉丝：{{user.follower}}</el-button>
      </div>
      <div class="menu-item" v-for="item in menu" @click="routeTo(item.routeName)">
        <i :class="item.icon"></i>
        <span>{{item.title}}</span>
      </div>
      <div class="logout-btn">
        <el-button plain @click="logout">登 出</el-button>
      </div>
    </div>
    <div class="react-area"></div>
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
      if (this.user.role == "student" || this.user.role == "teacher_edu") {
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
      } else if (this.user.role == "teacher_manage") {
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

<style scoped>
.userNav {
  position: absolute;
  z-index: 1;
  height: 100%;
  left: 0;
  top: 0;
  padding-top: 50px;
  width: 238px;
  min-height: 630px;
  background: #fafafa;
  border: #d0d0d0 1px solid;
  /* transform: translateX(-100%); */

  display: flex;
  flex-direction: column;
  align-items: center;

  color: #666;
  font-size: 15px;
}

/* 感应区 */
.react-area{
  position: absolute;
  height: 100%;
  width: 30px;
  left: 0;
  top: 0;
  background-color: red;
  opacity: 0.2;
}

.avatar {
  display: block;
  background-size: cover;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: 1px #fff solid;
  cursor: pointer;
  margin: 40px auto 15px auto;
}

.name{
  font-size: 16px;
  font-weight: bold;
  color: #555555;
  margin-bottom: 5px;
}

.email{
  font-size: 13px;
  color:#888888;
  margin-bottom: 15px;
}

.btn-wrapper{
  margin-bottom: 20px;
}

.menu-item{
  height: 50px;
  width: 100%;
  line-height: 50px;
  text-align: center;
}

.menu-item:hover{
  box-sizing: border-box;
  border-left: #292961 3px solid;
  background-color: #ebebeb;
  transition: .1s;
}

.logout-btn{
  margin-top: 25px;
}
</style>
