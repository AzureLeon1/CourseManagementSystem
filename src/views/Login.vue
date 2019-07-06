<template>
  <div class="login">
    <div class="login-container">
      <div class="container">
        <span>
          <div class="desc">
            <img src="../../static/logo.png" style="width:150px;" alt="CCMS" />
          </div>
        </span>

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
              <div class="code">
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
              <el-button type="primary" style="flex: 2" @click="login">登录</el-button>
              <el-button style="flex: 1" @click="routeTo('Register')">注册</el-button>
            </div>
          </el-form>
        </el-card>
      </div>
    </div>
    <Footer id="footer" />
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
            user_ID: this.ruleForm.name,
            password: this.ruleForm.password
          };
          this.$store.dispatch("profile/getAuthority", form);
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
.login {
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
}
.login-container {
  background: lightyellow;
  flex: 1;
}
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  height: 600px;
  max-width: 800px;
  margin: auto;
}
.el-card {
  width: 320px;
}
.code {
  margin: 0 5px 0 10px;
}
.s-canvas {
  overflow: hidden;
  border-radius: 3px;
  border: 1px solid #dcdfe6;
}
.btns {
  display: flex;
}
.desc {
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
  font-size: 20px;
  letter-spacing: 1px;
}
</style>
