<template>
  <div class="personal">
    <div class="left">
      <div v-if="isCurrentUser">
        <div class="title">我的班级
          <div style="float:right;">
            <button @click="jump()"><i class="el-icon-plus"></i></button>
          </div>
        </div>
        <div class="class_es">
          <div
            v-for="(item, index) in claes"
            :key="index"
            class="a_class"
            @click="toClassHome(item.course_id, item.sec_id, item.semester, item.year)"
          >
            <Avatar :src="item.avatar" :size="40" :border="false" />
            <div>{{item.course_name}}</div>
          </div>

          <transition name="el-fade-in-linear">
            <CreateForm ref="msc"></CreateForm>
          </transition>
      </div>
      <div v-if="this.$store.state.profile.user.role == 'student'" class="title">待审核班级</div>
          <div class="class_es">
       
          <div v-for="(item, index) in unauditClasses" :key="'u' + index" class="a_class"
            @click="toClassDetail(item.course_id, item.sec_id, item.semester, item.year)">

            <Avatar :src="item.avatar" :size="40" :border="false" />

            <div>{{item.course_name}}</div>
          </div>

          <transition name="el-fade-in-linear">
            <CreateForm ref="msc"></CreateForm>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Avatar from "@/components/Avatar";
import CreateForm from "@/components/CreateForm";

export default {
  name: "AllClass",
  components: {
    Avatar,
    CreateForm
  },
  props: ["person_id"],
  data() {
    return {
      addimg: "../static/add.png"
    };
  },
  methods: {
    jump() {
      if (this.$store.state.profile.user.role == "student")
        this.$router.push({ name: "GlobalClass" });
      else if (this.$store.state.profile.user.role == "teacher_edu") {
        this.msc = this.$refs.msc;
        this.msc.showCreateMsg = true;
      }
    },

    toClassHome(course_id, sec_id, semester, year) {
      console.log("wofole", course_id, sec_id)
      this.$store.dispatch("classlistitem/getclickclass", {
        course_id: course_id,
        sec_id: sec_id,
        semester: semester,
        year: year,
      });
      this.$router.push({
        name: "ClassHome",
        params: {
          class_id: course_id
        }
      });
     },

     toClassDetail(course_id, sec_id, semester, year){
       console.log("我要去details了", semester)

         this.$store.dispatch("classlistitem/getclickclass", {
        course_id: course_id,
        sec_id: sec_id,
        semester: semester,
        year: year,
      });
      this.$router.push({
        name: "ClassDetail",
        params: {
          class_id: course_id,
          sec_id: sec_id
        }
      });


     }
  },
  computed: {
    claes() {
      return this.$store.state.profile.joinedclasslist;

      console.log("已经已经加入到列表", this.$store.state.profile.joinedclasslist)
    },
    unauditClasses() {
    //  console.log("查看有无正确返回", this.$store.state.profile.checkingclasslist)
      return this.$store.state.profile.checkingclasslist;
    },
    isCurrentUser() {
      return true;
    },
    user() {}
  },
  mounted() {
    this.$store.dispatch(
      "profile/getClassList",
      this.$store.state.profile.user.id
    );

    if(this.$store.state.profile.user.role != 'teacher_edu')
    this.$store.dispatch(
      "profile/getCheckingClassList",
      this.$store.state.profile.user.id
    );
  }
}
</script>
<style lang="scss" scoped>
.personal {
  width: 100%;
  // max-width: 800px;
  display: flex;
  // margin: 30px auto;
}
.left {
  flex: 2;
  // margin-right: 20px;
  position: relative;

  .el-input,
  .el-card {
    margin: 15px 0;
  }

  .title {
    margin:0;
    height: 35px;
    line-height: 35px;
    vertical-align: middle;
    font-size: 14px;
    color: #555555;
    box-sizing: border-box;
    background-color: #f5f5f5;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border: 1px solid #dcdfe6;
    padding: 0px 6px 0 15px;;
  }
}
.class_es {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  flex-wrap: wrap;
  border-bottom: 1px solid #dcdfe6;
  border-left: 1px solid #dcdfe6;
  border-right: 1px solid #dcdfe6;
  padding: 20px 15px 15px;
  margin-bottom: 15px;
}
.a_class {
  text-align: center;
  width: 100px;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 1px;
  margin: 10px;
}

.add-class-button{
  border: 1px solid #dcdfe6;
  width: 40px;
  height: 40px;
  border-radius: 50%;

}

.class.unaudit .avatar {
    
  opacity: 0.5;
}

button{
  border: 1px solid #dcdfe6;
  width: 23px;
  height: 23px;
  background: #fff;
  border-radius: 4px;
  outline: none;
  transition: .1s;
}

button:hover{
  border: 1px solid #c9c9c9;
}

button:active{
  background: #fcfcfc;
  border: 1px solid #aaaaaa;
}
</style>


