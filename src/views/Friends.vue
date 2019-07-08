<template>
  <div>
    <el-container class="home">
      <el-aside width="260px">
        <user-nav :activeIndex="0"></user-nav>
      </el-aside>
      <el-main>
        <div style="margin-left: 70px; margin-top: 10px;">
          <el-button type="text" @click="routeTo('SearchUser')">
            <i class="el-icon-search">搜索用户</i>
          </el-button>
        </div>
        <div class="container">
          <div class="followings">
            <div class="title">我的关注</div>
            <div class="friends">
              <div
                v-for="(item, index) in followings"
                :key="index"
                class="friend"
                @click="$router.push({name: 'UserProfile', params: {person_id: item.user_id}})"
              >
                <div class="person_info">
                  <el-row>
                    <el-col :span="6">
                      <div class="grid-content bg-purple">
                        <Avatar :src="item.avatar" :size="60" :border="false" />
                      </div>
                    </el-col>
                    <el-col :span="18">
                      <div class="grid-content bg-purple-light">
                        <div class="name">{{item.name}}</div>
                        <div class="info">{{identityZh(item.role)}} {{item.department}}</div>
                      </div>
                    </el-col>
                  </el-row>
                </div>
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
                <div class="person_info">
                  <el-row>
                    <el-col :span="6">
                      <div class="grid-content bg-purple">
                        <Avatar :src="item.avatar" :size="60" :border="false" />
                      </div>
                    </el-col>
                    <el-col :span="18">
                      <div class="grid-content bg-purple-light">
                        <div class="name">{{item.name}}</div>
                        <div class="info">{{identityZh(item.role)}} {{item.department}}</div>
                      </div>
                    </el-col>
                  </el-row>
                </div>
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
import Avatar from "../components/Avatar";
export default {
  name: "Friends",
  components: {
    UserNav,
    Avatar
  },
  data() {
    return {
      followings: [
        {
          role: "student",
          user_id: "100002",
          name: "施程航",
          department: "软件学院",
          phone_number: 13365445687,
          mail: "chenghang_shi@gmail.com",
          avatar: "https://view.moezx.cc/images/2018/06/06/_35588639.md.png",
          grade: 2017
        },
        {
          role: "student",
          user_id: "100002",
          name: "施程航",
          department: "软件学院",
          phone_number: 13365445687,
          mail: "chenghang_shi@gmail.com",
          avatar: "https://view.moezx.cc/images/2018/06/06/_35588639.md.png",
          grade: 2017
        },
        {
          role: "student",
          user_id: "100002",
          name: "施程航",
          department: "软件学院",
          phone_number: 13365445687,
          mail: "chenghang_shi@gmail.com",
          avatar: "https://view.moezx.cc/images/2018/06/06/_35588639.md.png",
          grade: 2017
        }
      ],
      followers: [
        {
          role: "student",
          user_id: "100002",
          name: "施程航",
          department: "软件学院",
          phone_number: 13365445687,
          mail: "chenghang_shi@gmail.com",
          avatar: "https://view.moezx.cc/images/2018/06/06/_35588639.md.png",
          grade: 2017
        },
        {
          role: "student",
          user_id: "100002",
          name: "施程航",
          department: "软件学院",
          phone_number: 13365445687,
          mail: "chenghang_shi@gmail.com",
          avatar: "https://view.moezx.cc/images/2018/06/06/_35588639.md.png",
          grade: 2017
        },
        {
          role: "student",
          user_id: "100002",
          name: "施程航",
          department: "软件学院",
          phone_number: 13365445687,
          mail: "chenghang_shi@gmail.com",
          avatar: "https://view.moezx.cc/images/2018/06/06/_35588639.md.png",
          grade: 2017
        }
      ]
    };
  },
  methods: {
    identityZh(role) {
      switch (role) {
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
    routeTo(name, params) {
      this.$router.push({ name, params });
    },
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  margin-top: 0px;
}

.followings {
  flex: 1;
  margin: 0 30px 0 60px;
}

.followers {
  flex: 1;
  margin: 0 60px 0 30px;
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
  width: 100%;
}

.person_info {
  margin: 5px;
}

.name {
  margin-top: 8px;
  margin-bottom: 5px;
  font-size: 14px;
}

.info {
  font-size: 12px;
}
</style>




