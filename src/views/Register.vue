<template>
	<div class="register">
		<div class="container">
			<el-card>
				<el-form ref="form" :model="form" :rules="rules" label-width="80px">
					<el-form-item prop="username" label="用户名称">
						<el-input v-model="form.username" placeholder="请输入用户名称"></el-input>
					</el-form-item>
					<el-form-item prop="student_id" label="学工号">
						<el-input v-model="form.student_id" placeholder="请输入学号/工号"></el-input>
					</el-form-item>
					<el-form-item prop="pass" label="密码">
						<el-input v-model="form.pass" type="password" placeholder="请输入密码"></el-input>
					</el-form-item>
					<el-form-item prop="checkPass" label="确认密码">
						<el-input v-model="form.checkPass" type="password" placeholder="请再次输入密码"></el-input>
					</el-form-item>
					<el-form-item prop="email" label="邮箱">
						<el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
					</el-form-item>
					<el-form-item prop="phone" label="手机">
						<el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
					</el-form-item>
					<el-form-item prop="college" label="学院">
						<el-input v-model="form.college" placeholder="请输入所在学院"></el-input>
					</el-form-item>
					<el-form-item prop="role" label="身份">
						<template>
  							<el-radio v-model="form.role" label="teacher">老师</el-radio>
  							<el-radio v-model="form.role" label="student">学生</el-radio>
						</template>
					</el-form-item>
					<el-form-item prop="avatar" label="上传头像">
						<template>
  							<upload v-on:listenToChildEvent="getAvatarUrl"/>
						</template>
					</el-form-item>
					<el-form-item>
						<div class="btns">
							<el-button type="primary" @click="onSubmit('form')" style="flex: 2">注册</el-button>
							<el-button @click="onCancle()" style="flex: 1">已注册？去登录</el-button>
						</div>
					</el-form-item>
				</el-form>
			</el-card>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
import Footer from '../components/Footer.vue';
import Upload from '../components/Upload.vue'
import { emailReg, idCardReg, phoneReg } from '../utils/util';
export default {
  name: "Register",
  components: {
		Footer,
		Upload
    },
	data() {
		var validatePass = (rule, value, callback) => {
			if(value === '') {
				callback(new Error('请输入密码'));
			} else {
				if(this.form.checkPass !== '') {
					this.$refs.form.validateField('checkPass');
				}
				callback();
			}
		};
		var validatePass2 = (rule, value, callback) => {
			if(value === '') {
				callback(new Error('请再次输入密码'));
			} else if (value !== this.form.pass) {
				callback(new Error('两次输入的密码不一致'));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入邮箱'));
			} else if (!emailReg.test(this.form.email)){
				callback(new Error('请输入正确的邮箱'));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入手机号'));
			} else if (!phoneReg.test(this.form.phone)){
				callback(new Error('请输入正确的手机号'));
			} else {
				callback();
			}
		};
		return {
			radio: '',
			form: {
				username: '',
				student_id: '',
				pass: '',
				checkPass: '',
				email: '',
				phone: '',
				college: '',
				role: '',
				avatar: ''
			},
			rules: {
				username: [
					{ required: true, message: '请输入用户名', trigger: 'blur' }
				],
				student_id: [
					{ required: true, message: '请输入学号', trigger: 'blur' }
				],
				pass: [
					{ required: true, validator: validatePass, trigger: 'blur' }
				],
				checkPass: [
					{ required: true,validator: validatePass2, trigger: 'blur' }
				],
				email: [
					{ required: true, validator: validateEmail, trigger: 'blur' }
				],
				phone: [
					{ required: true, validator: validatePhone, trigger: 'blur' }
				],
				college: [
					{ trigger: 'blur' }
				]
			}
		}
	},
	methods:{
		onSubmit(formName) {
			console.log(this.form);
			this.$refs[formName].validate((valid) => {
				if (valid) {
					const { student_id: user_ID, username: name, email, pass: password,
          phone: phone_number, college,role,avatar } = this.form
          // TODO: 提交注册请求，本地保存
					// this.$store.dispatch('profile/register', {
					// 	user_ID,
					// 	name,
					// 	email,
					// 	password,
					// 	phone_number,
					// 	college,
					// 	role,
					// 	avatar
					// })
				} else {
					console.log('error submit!!');
					return false;
				}
			});

		},
		onCancle() {
			this.$router.push({ name: 'Login' });
		},
		getDateTimes(str) {
			var str = new Date(str);
			return str;
		},
		getAvatarUrl:function(data){
			this.form.avatar = data;
		}
	}
}
</script>

<style lang="scss" scoped>
	.register {
		position: relative;
		&:before {
			content: "";
			position: absolute;
			width: 100vw;
			height: 100%;
			background: lightcoral;
			left: 0;
			top: -40px;
			z-index: -1;
		}
	}

	.container {
		 width: 100%;
		// max-width: 800px;
		margin: 40px auto 80px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.el-card {
		width: 500px;
		padding-top: 40px;
	}
	.btns {
		display: flex;
		width: 60%;
	}
</style>
