<template>
  <el-card shadow="hover" :body-style="{
        padding: '10px',
        margin: '0 40px'

    }">
    <!-- <Avatar :src="imageURL" :size="80" :border="false"/>
    <div>
        <div class="name">{{classname}}</div>
        <div class="content">{{role}}</div>
    </div>-->

    <div class="person_info">
      <el-row>
        <el-col :span="6">
          <div>
            <Avatar :src="avatar" :size="60" :border="false" />
          </div>
        </el-col>
        <el-col :span="18">
          <div>
            <div class="name">{{name}}</div>
            <div class="info">{{identityZh(role)}} {{department}}</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
import Avatar from "@/components/Avatar";
export default {
  name: "UserCard",
  components: {
    Avatar
  },
  data() {
    return {};
  },
  methods: {
    enter() {
      const h = this.$createElement;
      this.$router.push({ name: "ClassInfo" });
    },
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
    }
  },
  props: ["name", "role", "avatar", "department"],
  mounted() {

  }
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: conter;
  font-size: 18px;
}
.name {
  font-size: 18px;
  line-height: 1;
  margin-bottom: 10px;
}
.content {
  font-size: 12px;
  opacity: 1;
  line-height: 1.4;
  font-weight: 300;
  letter-spacing: 0.5px;
}
.person_info {
  margin: 5px;
}

.name {
  margin-top: 12px;
  margin-bottom: 10px;
  font-size: 18px;
}

.info {
  font-size: 12px;
}
</style>


