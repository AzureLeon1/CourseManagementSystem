<template>
  <div class="Login">
    <div class="container">
      <div class="show-container">
        <img class="logo" src="/static/img/logo.06ab52f.png">
        <div class="ccms ccms-english">ccms</div>
        <!-- <div class="ccms">同济大学课程班级管理系统</div> -->
      </div>
      <div class="card-container">
        <el-card>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px">
            <el-form-item prop="name">
              <el-input v-model="ruleForm.name" placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" placeholder="密码" v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item prop="validate" class="validate-code">
              <el-input v-model="ruleForm.validate" placeholder="验证码"></el-input>
              <div class="code" @click="setValidate">
                <s-identify :identifyCode="identifyCode"></s-identify>
              </div>
              <el-button
                icon="el-icon-refresh"
                size="mini"
                style="padding: 13px 0px;"
                @click="setValidate"
              ></el-button>
            </el-form-item>
            <div class="btns">
              <el-button type="primary" style="flex: 1" @click="login">登录</el-button>
              <el-button style="flex: 1" @click="routeTo('Register')">注册</el-button>
            </div>
          </el-form>
        </el-card>
      </div>
    </div>
    <!-- <Footer id="footer" /> -->
  </div>
</template>

<script>
import SIdentify from "../components/Identify";
import Footer from "../components/Footer";
export default {
  name: "login",
  components: {
    SIdentify,
    Footer
  },
  data() {
    var checkImage = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
        return;
      } else if (value !== this.identifyCode) {
        callback(new Error("验证码错误"));
        this.setValidate();
        return;
      } else {
        callback();
      }
    };
    return {
      identifyCode: "",
      errorInfo: false,
      ruleForm: {
        name: null,
        password: null,
        validate: null
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        validate: [
          {
            required: true,
            trigger: "blur",
            validator: checkImage
          }
        ]
      }
    };
  },
  computed: {
    // userId () {
    //     return this.$store.state.profile.user.id
    // }
  },
  mounted() {
    // console.log(this.$route.params.course_id);
    this.setValidate();
    // TODO: 已登录状态下直接跳转
    // if (this.userId) {
    //     this.routeTo('PersonInfo', {person_id: this.userId})
    // }
  },
  methods: {
    setValidate() {
      const rand = ("" + parseInt((1 + Math.random()) * Math.PI * 10000)).slice(
        -4
      );
      this.identifyCode = rand;
    },
    routeTo(name, params) {
      this.$router.push({ name, params });
    },
    login() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          const form = {
            user_id: this.ruleForm.name,
            password: this.ruleForm.password
          };
          this.$store.dispatch('profile/getAuthority', form)

        } else {
          console.log("error submit!!");
          return false;
        }
      });
      this.setValidate();
    }
  }
};
</script>

<style>
.validate-code .el-form-item__content {
  display: flex;
  align-items: center;
  line-height: 0;
}
#footer {
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;
}
</style>

<style scoped>
.Login *{
  box-sizing: border-box;
}

.Login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 50px);
  background-color: #292961;
}

.el-card {
  width: 100%;
}

.code {
  margin: 0 5px 0 10px;
  cursor: pointer;
}
.s-canvas {
  overflow: hidden;
  border-radius: 3px;
  border: 1px solid #dcdfe6;
}
.btns {
  display: flex;
}
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vh;
}
.show-container{
  flex-grow: 1;
  text-align: center;
  margin-bottom: 30px;
}
.logo{
  width: 200px;
  margin-bottom: 20px;
}
.ccms{
  font-size: 20px;
  font-family: "HwXihei";
  color: #fff;
  /* font-weight: bold; */
  letter-spacing: .2em;
  margin-bottom: 5px;
}
.ccms-english{
  font-size: 40px;
  font-weight: bold;
}
.card-container{
  width: 35%;
}
</style>
