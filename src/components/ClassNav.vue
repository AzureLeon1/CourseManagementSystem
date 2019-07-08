<template>
  <div class="classNav">
    <el-row style="text-align: center">
      <img :src="classinfo.avatar" class="avatar" @click="routeTo('ClassDetail', {corp_id: 1})" />
      <div style="margin-top: -15px; font-size: 16px; font-weight: 300; ">{{classinfo.name}}</div>
    </el-row>
    <el-row style="margin-top: 10px; margin-bottom: 0px; text-align: center; font-size: 14px;">
      <!-- TODO: 跳转到班内学生 -->
        学生人数：<el-button type="text" @click="routeTo()">{{classinfo.student_count}}</el-button>
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
    <el-row style="text-align: center;">
      <el-button type="danger" size="small" class="logoutBtn" @click="routeTo('MyClass')"><i class="el-icon-back"></i> 返回</el-button>
    </el-row>
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
            routeName: "",
            icon: "el-icon-chat-line-square"
          },
          {
            index: 2,
            title: "课件下载",
            routeName: "",
            icon: "el-icon-folder-opened"
          },
          {
            index: 3,
            title: "我的考试",
            routeName: "",
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
            title: "成员审核",
            routeName: "",
            icon: "el-icon-s-claim"
          },
          {
            index: 2,
            title: "班级消息",
            routeName: "",
            icon: "el-icon-chat-line-square"
          },
          {
            index: 3,
            title: "课件上传",
            routeName: "",
            icon: "el-icon-folder-opened"
          },
          {
            index: 4,
            title: "发布考试",
            routeName: "",
            icon: "el-icon-edit-outline"
          },
          {
            index: 5,
            title: "项目组队",
            routeName: "Team",
            icon: "el-icon-user"
          },
          {
            index: 6,
            title: "考勤管理",
            routeName: "Attendance",
            icon: "el-icon-postcard"
          },
          {
            index: 7,
            title: "题库管理",
            routeName: "",
            icon: "el-icon-document-copy"
          },
          {
            index: 8,
            title: "讨论区",
            routeName: "Discussion",
            icon: "el-icon-microphone"
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


<style>
.classNav {
  margin: 20px 10px 20px 0;
  padding: 0;
  box-shadow: 2px 2px 20px -11px black;
  min-height: 630px;
  /* height: 500px; */

}

.classNav img.avatar {
  background-size: cover;
  width: 120px;
  height: 120px;
  border-radius: 100%;
  cursor: pointer;
  margin: 20px auto;
}

.classNav ul {
  text-decoration-style: none;
  text-align: center;
  user-select: none;
  margin: 0;
  padding: 0;
}

.classNav ul li {
  list-style: none;
  height: 60px;
  line-height: 60px;
  color: #303133;
  font-size: 17px;
  cursor: pointer;
}

.classNav ul li:hover {
  background-color: #ecf5ff;
}

.classNav ul li.active {
  color: #409eff;
}

.classNav .logoutBtn {
  margin: 25px auto;
}
</style>
