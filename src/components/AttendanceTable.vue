<template><!--有两个地方调用api送数据-->
  <div class="table">
    <el-card style="width: 850px; margin:20px auto 20px auto" shadow="never">
      <!--上右下左-->
      <div
        class="add"
        style=" vertical-align:middle; text-align:center;margin-left: auto;margin-right: auto;"
      >
        <el-button icon="el-icon-plus" circle @click="InsertAttendance"></el-button>
        <br />
        <br />
        <hr style="border:1 dashed #409eff " width="95%" color="#292961" size="1" />
      </div>
      <div>
        <el-table
          :data="tableData"
          stripe
          style="width: 800px"
          :row-class-name="tableRowAttendance"
        >
          <el-table-column prop="time_id" label="课时" width="375px" sortable></el-table-column>
          <!-- TODO: sum -> absent_num & present_num -->
          <el-table-column prop="sum" label="统计" width="325px"></el-table-column>
          <el-table-column prop="detail" label="具体信息" width="100px">
            <template slot-scope="scope">
              <el-popover placement="left" width="550px" trigger="click">
                <el-table :data="scope.row.students" height="500px" @cell-dbclick="celledit">
                  <!-- @cell-dblclick="tableDbEdit" @cell-click="cellClick"-->
                  <el-table-column width="180px" prop="student_id" label="学生ID" sortable>
                    <template slot-scope="scope">
                      <span>{{scope.row.student_id}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column width="150px" prop="student_name" label="学生姓名">
                    <template slot-scope="scope">
                      <span>{{scope.row.student_name}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column width="240px" prop="attendance_status" label="出席状态">
                    <!-- <template slot-scope="scope">
                    <el-radio v-model="scope.row.attendance_status" label="1" size="small"> 出席</el-radio>
                    <el-radio v-model="scope.row.attendance_status" label="2" size="small"> 无故缺席</el-radio>
                    <el-radio v-model="scope.row.attendance_status" label="3" size="small"> 请假</el-radio>
                    <el-radio v-model="scope.row.attendance_status" label="4" size="small"> 迟到</el-radio>
                    </template>-->
                    <template slot-scope="scope">
                      <el-radio-group v-model="scope.row.status" @change="changeHandler(scope.row)">
                        <el-radio :label="1">出席</el-radio>
                        <el-radio :label="2">无故缺席</el-radio>
                        <el-radio :label="3">请假</el-radio>
                        <el-radio :label="4">迟到</el-radio>
                      </el-radio-group>
                    </template>
                  </el-table-column>
                </el-table>
                <el-button type="text" size="medium" slot="reference">详细</el-button>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
import api from '../api/index.js'
export default {
  name: "AttendanceTable",
  components: {},
  data() {
    return {
      course_sec_info: {}
    };
  },

  methods: {
    InsertAttendance() {
      // TODO:
      this.$prompt("请输入点名课时", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^[+]{0,1}(\d+)[\S]*$/,
        // 输入格式要求:数字
        inputErrorMessage: "格式不正确"
      })
        .then(({ value }) => {
          var request_body = {
            course_id: this.$store.state.classinfo.classinfo.course_id,
	          sec_id: this.$store.state.classinfo.classinfo.sec_id,
	          semester: this.$store.state.classinfo.classinfo.semester,
	          year: this.$store.state.classinfo.classinfo.year,
	          time_id: value
          }
          api.createAttenRecords(request_body)
            .then(res => {
              console.log(res);
              if (res.status == 200) {

                this.$store.dispatch("attendance/getAttendance", this.course_sec_info);
                this.$message({
                  type: "success",
                  message: "成功发布" + value + "考勤"
                  //增加time_id=value的出席记录表!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                });
              }
            })


        })
        .catch(er => {
          console.log(er);
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    celledit(row, column, cell, event) {
      if (row[column.property]) {
        row[column.property].edit = true;
        setTimeout(() => {
          this.$refs[column.property].focus();
        }, 20);
      }
    },
    changeHandler(row) {
      console.log(row);
      console.log("改变后的值为" + row);
      //把value送到后端!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11
      // document.write("改变后的值为"+value)

      var update_info = this.course_sec_info
      update_info.user_id = row.student_id
      update_info.status = row.status
      update_info.time_id = row.time_id
      api.updateAtten(update_info)
      .then(() => {
        this.$store.dispatch("attendance/getAttendance", this.course_sec_info);
      })
    },
    //发布动态时点击发布调用的代码
    // emit() {
    //   if (!this.textarea) {
    //     return;
    //   }
    //   this.$emit(
    //     "send",
    //     Object.assign(
    //       {},
    //       this.dialogImageUrl
    //         ? {
    //             img: this.dialogImageUrl
    //           }
    //         : {},
    //       this.textarea ? { content: this.textarea } : {}
    //     )
    //   );
    //   this.reset();
    // }
  },

  computed: {
    tableData() {
      return this.$store.state.attendance.classattendancelist;
    }
  },
  mounted() {
    this.course_sec_info.sec_id = this.$store.state.classinfo.classinfo.sec_id
    this.course_sec_info.course_id = this.$store.state.classinfo.classinfo.course_id
    this.course_sec_info.semester = this.$store.state.classinfo.classinfo.semester
    this.course_sec_info.year = this.$store.state.classinfo.classinfo.year
    this.$store.dispatch("attendance/getAttendance", this.course_sec_info);

    //this.$stor.dispatch(actionType,playload)
    //要触发的action类型，所携带的数据
  }
};
</script>

<style>
.el-card.box-card {
  width: 480px;
}
</style>
