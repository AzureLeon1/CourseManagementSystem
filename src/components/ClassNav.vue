<template>
  <!-- <div class="classNav">
    <el-row style="text-align: center">
      <img :src="classinfo.avatar" class="avatar" @click="routeTo('ClassDetail', {corp_id: 1})" />
      <div style="margin-top: -15px; font-size: 16px; font-weight: 300; ">{{classinfo.name}}</div>
    </el-row>
    <el-row style="margin-top: 10px; margin-bottom: 0px; text-align: center; font-size: 14px;">

        学生人数：<el-button type="text" @click="routeTo()">{{classinfo.student_count}}</el-button>
    </el-row>
    <ul>
      <li
        v-for="item in menu"
        :key="item.index"
        :class="item.index == activeIndex ? 'active' : ''"
        @click="routeTo(item.routeName,
          {class_id: '1'})"
      >
        <i :class="item.icon"></i>
        &nbsp;&nbsp;{{item.title}}
      </li>
    </ul>
    <el-row style="text-align: center;">
      <el-button type="danger" size="small" class="logoutBtn" @click="routeTo('MyClass')"><i class="el-icon-back"></i> 返回</el-button>
    </el-row>
  </div> -->
  <div class="ClassNavWrapper">
    <div class="classNav">
      <img class="avatar" :src="classinfo.avatar" @click="routeTo('ClassDetail', {corp_id: 1})">

      <div class="name">{{classinfo.name}}</div>
      <div class="intro">学生人数：{{classinfo.student_count}}</div>

      <div class="menu-item" v-for="item in menu" @click="routeTo(item.routeName)">
        <i :class="item.icon"></i>
        <span>{{item.title}}</span>
      </div>
      <div class="logout-btn">
        <el-button plain @click="routeTo('MyClass')">
          返 回
        </el-button>
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
      user: {
      },
    };
  },

  props: {
    activeIndex: Number
  },

  methods: {
    getData() {
      this.user = this.$store.state.profile.user;
      if (this.user.role == "student") {
        this.menu.push(
          {
            index: 1,
            title: "班级消息",
            routeName: "CourseMessage",
            icon: "el-icon-chat-line-square"
          },
          {
            index: 2,
            title: "课件下载",
            routeName: "Courseware",
            icon: "el-icon-folder-opened"
          },
          {
            index: 3,
            title: "我的考试",
            routeName: "Exam",
            icon: "el-icon-edit-outline"
          },
          {
            index: 4,
            title: "项目组队",
            routeName: "Team",
            icon: "el-icon-user"
          },
          {
            index: 5,
            title: "讨论区",
            routeName: "Discussion",
            icon: "el-icon-microphone"
          }
        );
      } else if (this.user.role == "teacher_edu") {
        this.menu.push(
          {
            index: 1,
            title: "班级消息",
            routeName: "CourseMessage",
            icon: "el-icon-chat-line-square"
          },
          {
            index: 2,
            title: "课件管理",
            routeName: "Courseware",
            icon: "el-icon-folder-opened"
          },
          {
            index: 3,
            title: "查看考试",
            routeName: "Exam",
            icon: "el-icon-edit-outline"
          },
          {
            index: 4,
            title: "项目组队",
            routeName: "Team",
            icon: "el-icon-user"
          },
          {
            index: 5,
            title: "讨论区",
            routeName: "Discussion",
            icon: "el-icon-microphone"
          },
          {
            index: 6,
            title: "成员审核",
            routeName: "MembershipAudit",
            icon: "el-icon-s-claim"
          },
          {
            index: 7,
            title: "考勤管理",
            routeName: "Attendance",
            icon: "el-icon-postcard"
          },
          {
            index: 8,
            title: "题库管理",
            routeName: "QuestionBank",
            icon: "el-icon-document-copy"
          }
        );
      }
    },
    routeTo(name, params) {
      this.$router.push({ name, params });
    }
  },

  mounted() {
    this.getData();
  },

  computed: {
    classinfo() {
      return this.$store.state.classinfo.classinfo;
    }
  },

};
</script>


<style scoped>
.classNav {
  position: fixed;
  z-index: 1;
  height: 100vh;
  left: 0;
  top: 0;
  padding-top: 50px;
  width: 238px;
  box-sizing: border-box;
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
  margin: 40px auto 20px auto;
}

.name{
  font-size: 16px;
  font-weight: bold;
  color: #555555;
  margin-bottom: 5px;
}

.intro{
  font-size: 13px;
  color:#888888;
  margin-bottom: 25px;
}

.btn-wrapper{
  margin-bottom: 20px;
}

.menu-item *{
  cursor: pointer;
}

.menu-item{
  height: 50px;
  width: 100%;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
}

.menu-item:hover{
  box-sizing: border-box;
  border-left: #292961 3px solid;
  background-color: #ebebeb;
  color: #292961;
  transition: .1s;
}

.menu-item:active{
  box-sizing: border-box;
  border-left: #292961 3px solid;
  background-color: #d3d3d3;
  color: #292961;
  transition: .1s;
}

.logout-btn{
  margin-top: 25px;
}

</style>
