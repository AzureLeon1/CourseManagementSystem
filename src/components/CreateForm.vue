<template>
  <el-dialog :visible.sync="showCreateMsg" width="400px;">
    <div slot="title" class="title">创建班级</div>
    <div class="body" style="padding: 0 15px;">
      <el-form ref="form" :model="form" label-width="80px" label-position="left">
        <el-form-item prop="course_id" label="课程号" :rules="[{required : true}]">
          <el-select v-model="form.course_id" placeholder="请选择课程号">
            <el-option
              v-for="item in course_options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item prop="semester" label="学期" :rules="[{required : true}]">
          <el-select v-model="form.semester" placeholder="请选择学期">
            <el-option
              v-for="item in semester_options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item prop="year" label="年份" :rules="[{required : true}]">
          <el-select v-model="form.year" placeholder="请选择年份">
            <el-option
              v-for="item in year_options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item prop="building" label="教室楼" :rules="[{required : true}]">
          <el-select v-model="form.building" placeholder="请选择教室楼">
            <el-option
              v-for="item in building_options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          prop="room"
          label="教室号"
          :rules="[
      { required: true, message: '教室号不能为空'},]"
        >
          <el-input type="number" v-model="form.room"></el-input>
        </el-form-item>

        <el-form-item
          prop="teacher_id"
          label="教师工号"
          :rules="[
      { required: true, message: '教师工号不能为空'},]"
        >
          <el-input type="number" v-model="form.teacher_id"></el-input>
        </el-form-item>

        <el-form-item :prop="start_week" label="开始周数" :rules="[{required : true}]">
          <el-select v-model="form.start_week" placeholder>
            <el-option
              v-for="item in (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
                  12, 13, 14, 15, 16, 17)"
              :key="item"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item :prop="end_week" label="结束周数" :rules="[{required : true}]">
          <el-select v-model="form.end_week" placeholder>
            <el-option
              v-for="item in (18 - form.start_week)"
              :key="item"
              :label="item + form.start_week - 1"
              :value="item + form.start_week - 1"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item
          v-for="(domain, index) in form.domains"
          :label="'第' + String(index+1) +  '节课'"
          :key="domain.key"
          :prop="'domains.' + index + '.value'"
          :rules="{
                   required:true, trigger:'blur'}"
        >
          <el-form-item label>
            <el-select v-model="domain.week_day" placeholder="星期">
              <el-option
                v-for="item in week_options"
                :prop="'domains.' + index + '.start_sec'"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>

            <el-select v-model="domain.start_sec" placeholder="开始节次">
              <el-option
                v-for="item in (1, 2, 3, 4, 5, 6, 7, 8)"
                :key="item"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>

            <el-select v-model="domain.class_length" placeholder="持续节数">
              <el-option v-for="item in (1, 2, 3, 4)" :key="item" :label="item" :value="item"></el-option>
            </el-select>

            <el-select v-model="domain.odd_even" placeholder="单双周">
              <el-option
                v-for="item in odd_even"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-button @click.prevent="removeDomain(domain)">删除</el-button>
        </el-form-item>

        <el-form-item>
          <el-button @click="addDomain">新增课时</el-button>
        </el-form-item>
        <el-form-item prop="avatar" label="上传头像">
          <template>
            <upload v-on:listenToChildEvent="getAvatarUrl" />
          </template>
        </el-form-item>

        <el-form-item label>
          <el-button type="primary" @click="submitForm(form)">提交</el-button>
          <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-dialog>
</template>

<script>
import Upload from "../components/Upload.vue";
export default {
  name: "CreateForm",
  components: {
    Upload
  },
  props: {
    showCreateMsg: {
      default: false
    }
  },
  data() {
    return {
      flag_true: true,
      form: {
        course_id: null,
        semester: null,
        year: null,
        building: "",
        room: null,
        start_week: null,
        end_week: null,
        teacher_id: null,
        avatar: "",

        domains: [
          {
            week_day: null,
            value: null,
            start_sec: null,
            class_length: null,
            odd_even: null
          }
        ]
      },
      rules: {},
      course_options: [
        {
          value: 1,
          label: "数据库(1)"
        },
        {
          value: 2,
          label: "高等数学(2)"
        },
        {
          value: 3,
          label: "C++(3)"
        },
        {
          value: 4,
          label: "操作系统(4)"
        },
        {
          value: 5,
          label: "计算机系统结构(5)"
        }
      ],
      sec_options: [
        {
          value: 1,
          label: "1"
        },
        {
          value: 2,
          label: "2"
        },
        {
          value: 3,
          label: "3"
        }
      ],
      semester_options: [
        {
          value: "Fall",
          label: "Fall"
        },
        {
          value: "Spring",
          label: "Spring"
        }
      ],
      year_options: [
        {
          value: 2017,
          label: "2017"
        },
        {
          value: 2018,
          label: "2018"
        }
      ],
      building_options: [
        {
          value: "A",
          label: "A"
        },
        {
          value: "B",
          label: "B"
        },
        {
          value: "C",
          label: "C"
        }
      ],
      week_options: [
        {
          value: "1",
          label: "星期一"
        },
        {
          value: "2",
          label: "星期二"
        },
        {
          value: "3",
          label: "星期三"
        },
        {
          value: "4",
          label: "星期四"
        },
        {
          value: "5",
          label: "星期五"
        }
      ],
      odd_even: [
        {
          value: 1,
          label: "单周"
        },
        {
          value: 2,
          label: "双周"
        },
        {
          value: 3,
          lable: "单双周"
        }
      ]
    };
  },
  methods: {
    createMsg() {
      this.$emit("hideCreateMsg");
    },

    submitForm(formName) {
      this.$store.dispatch("allpost/createClass", formName);

      console.log(formName);

      var ids = [];
      for (var i = 0; i < formName.domains.length; i++) {
        console.log(formName.domains[i].week_day);
      }
    },
    resetForm(formName) {
      console.log(this.$refs);
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      var index = this.form.domains.indexOf(item);
      if (index !== -1) {
        this.form.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.form.domains.push({
        value: "",
        key: Date.now()
      });
    },
    getAvatarUrl: function(data) {
      this.form.avatar = data;
    }
  },
  computed: {
    // slot_ids :function()
    // {
    //   ids = []
    //   for(var i = 0; i < this.form.domains.length; i++)
    //   {
    //     ids.push(11111)
    //     console.log(ids[i])
    //   }
    // }
  }
};
</script>

<style scoped>
.wrapper {
  /* position-center */
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* children element */
  display: flex;
  flex-direction: column;
  padding: 20px 40px 40px 40px;
  /* display */
  background: #fff;
  border-radius: 10px;

  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  /* transition */
  transition-property: display;
  transition-duration: 1s;
}

.title {
  text-align: center;
  font-size: 14px;
  letter-spacing: 0.2em;
  color: #888;
}

.close-btn {
  position: absolute;
  right: 10px;
  top: 10px;
}

.hidden {
  display: none;
}
</style>