<template>
  <div class="info">
    <div class="title">班级详情</div>

    <div class="items">


      <div
        style="margin-left:50%; transform: translate(-30%, 0); margin-bottom: 30px; margin-top: 20px;"
      >
        <Avatar :src="the_class.avatar" :size="120" :border="true" />
      </div>


     
 
    <div class="item">
      <div class="key">
        <i class="el-icon-s-home"></i> &nbsp; 课程
      </div>
      <div class="value">{{ the_class.course_name }}</div>
    </div>

    <div class="item">
      <div class="key">
        <i class="el-icon-user"></i> &nbsp; 教师
      </div>
      <div class="value">{{ the_class.user_name }}</div>
    </div>

    <div class="item">
      <div class="key">
        <i class="el-icon-location"></i> &nbsp; 教室楼
      </div>
      <div class="value">{{the_class.building}}</div>
     
    </div>

    <div class="item">
      <div class="key">
        <i class="el-icon-location"></i> &nbsp; 教室
      </div>
      
      <div class="value">{{the_class.room_number}}</div>
    </div>

    <div class="item">
      <div class="key">
        <i class="el-icon-date"></i> &nbsp; 学期
      </div>
       <div class="value">{{the_class.semester}}</div>
    
    
    </div>

    <div class="item">
      <div class="key">
        <i class="el-icon-date"></i> &nbsp; 年份
      </div>
       <div class="value">{{the_class.year}}</div>
    
   
    </div>

  

    <div class="item">
      <div class="key">
        <i class="el-icon-s-custom"></i> &nbsp; 人数
      </div>
      <div class="value">{{the_class.student_number}}</div>
    </div>

       <div class="item">
      <div class="key">
        <i class="el-icon-tickets"></i> &nbsp; 简介
      </div>
      <br/>
      <div class="value2">{{the_class.course_description}}</div>
    </div>


    <div class="btns">
      <template v-if="isStudent">
        <el-button
          class="status_btn"
          size="primary"
          style="font-weight: 300; "
          v-if="joinStatus === 0"
          @click="join"
        >申请加入</el-button>
        <el-button
          class="status_btn"
          size="primary"
          style="font-weight: 300; "
          v-if="joinStatus === 1"
          disabled
        >待审核</el-button>
        <el-button
          class="status_btn"
          size="primary"
          style="font-weight: 300; "
          v-if="joinStatus === 2"
          disabled
        >已加入</el-button>
      </template>

      <template v-if="isTeacherEdu">
        <el-button
          type="primary"
          size="small"
          class="edit"
          v-if="isCurrentUser"
          @click="dialogVisible = true"
        >修改</el-button>
      </template>
    </div>



</div>
  </div>

  

</template>



<script>
import Avatar from "@/components/Avatar";
export default {
  name: "ClassInfo",
  components: {
    Avatar
  },
  props: [],
  data() {
    return {
      foldInfo: true,
      current: 1,
      pageSize: 10,
      star: 0
    };
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
    joinStatus() {
      return this.$store.state.classinfo.joinStatus;
    },

    the_class() {
        console.log('这是classinfo', this.$store.state.classinfo.classinfo)
      return this.$store.state.classinfo.classinfo;
    },

    isCurrentUser() {
      return this.$store.state.profile.user.id == this.person_id;
    }
  },

  methods: {
    isStudent() {
      return this.userinfo.role == "student";
    },
    isTeacherEdu() {
      return this.userinfo.role == "teacher_edu";
    },
    isTeacherManage() {
      return this.userinfo.role == "teacher_manage";
    },
    join() {
      this.$store.dispatch("classinfo/join", this.$store.state.classlistitem.clickedclass);
    }
  },

  mounted() {
      console.log("这是班级跳转参数", this.$route.params)
      console.log("这是班级跳转参数", this.$route.params.class_id)

console.log(this.$route.params.class_id, this.$store.state.classinfo.classinfo)
    if(this.$route.params.class_id != this.$store.state.classinfo.classinfo.course_id)
       { this.$store.dispatch("classinfo/getClassInfo", this.$store.state.classlistitem.clickedclass);
    this.$store.dispatch("classinfo/getJoinStatus", this.$store.state.classlistitem.clickedclass);}
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
    text-overflow: ellipsis;
  }
  .value2{
       flex: 4;
    margin-left: -25%;
    text-align: center;
    text-overflow: ellipsis;

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
