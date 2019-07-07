<template>
  <div class="table">
    <el-card style="width: 850px; margin:20px auto 20px auto">
      <!--上右下左-->
      <el-table :data="tableData" stripe style="width: 800px" :row-class-name="tableRowAttendance">
        <el-table-column prop="LessonNum" label="课时" width="375px"></el-table-column>
        <el-table-column prop="sum" label="统计" width="325px"></el-table-column>
        <el-table-column prop="detail" label="具体信息" width="100px">
          <template slot-scope="scope">
            <el-popover placement="left" width="550px" trigger="click">
              <el-table :data="scope.row.student_ids" height="500px" @cell-dbclick="celledit">
                <!-- @cell-dblclick="tableDbEdit" @cell-click="cellClick"-->
                <el-table-column width="225px" prop="student_id" label="学生ID" sortable>
                  <template slot-scope="scope">
                    <span>{{scope.row.student_id}}</span>
                  </template>
                </el-table-column>
                <el-table-column width="225px" prop="student_name" label="学生姓名">
                  <template slot-scope="scope">
                    <span>{{scope.row.student_name}}</span>
                  </template>
                </el-table-column>
                <el-table-column width="100px" prop="attendance_status" label="出席状态">
                  <template slot-scope="scope">
                    <!-- <el-input size="small" style="width=10px height=5px"
                    v-model="scope.row.attendance_status"
                    v-if="scope.row.seen"
                    @blur="loseFcous(scope.$index,scope.row)">            
                    </el-input>
                    <span v-else>
                    {{scope.row.attendance_status}}</span>-->
                    <el-input
                      v-if="scope.row.attendance_status.edit"
                      ref="name"
                      v-model="scope.row.attendance_status.value"
                      style="width: 100%"
                      @blur="scope.row.attendance_status.edit = false"
                    ></el-input>
                    <span v-else>{{ scope.row.attendance_status.value }}</span>
                  </template>
                </el-table-column>
              </el-table>
              <el-button type="text" size="medium" slot="reference">详细</el-button>
            </el-popover>
          </template>
        </el-table-column>
      </el-table>

      <div
        class="add"
        style=" vertical-align:middle; text-align:center;margin-left: auto;margin-right: auto;"
      >
        <br />
        <el-button icon="el-icon-plus" circle @click="InsertAttendance"></el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import AttendanceReference from "../components/AttendanceReference";
export default {
  name: "AttendanceTable",
  components: {
    AttendanceReference
  },
  data() {
    return {
      tableData: [
        {
          LessonNum: "2019-05-04",
          sum: "45/60",
          detail: "--",
          student_ids: [
            {
              student_id: "123",
              student_name: "一二三",
              attendance_status: "check",
              seen: false
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "null",
              seen: false
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "check",
              seen: false
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "null",
              seen: false
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "check",
              seen: false
            },
            {
              student_id: "089",
              student_name: "一二三",
              attendance_status: "null",
              seen: false
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "check",
              seen: false
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "null",
              seen: false
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "check",
              seen: false
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "null",
              seen: false
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "check",
              seen: false
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "null",
              seen: false
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "check",
              seen: false
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "null",
              seen: false
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "check",
              seen: false
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "null",
              seen: false
            }
          ]
        },
        {
          LessonNum: "2019-06-03",
          sum: "20/60",
          detail: "--"
        },
        {
          LessonNum: "2019-06-27",
          sum: "60/60",
          detail: "--"
        },
        {
          LessonNum: "2019-07-02",
          sum: "57/60",
          detail: "--"
        },
        {
          LessonNum: "2019-06-03",
          sum: "20/60",
          detail: "--"
        },
        {
          LessonNum: "2019-06-03",
          sum: "20/60",
          detail: "--"
        },
        {
          LessonNum: "2019-06-03",
          sum: "20/60",
          detail: "--"
        },
        {
          LessonNum: "2019-06-03",
          sum: "20/60",
          detail: "--"
        },
        {
          LessonNum: "2019-06-03",
          sum: "20/60",
          detail: "--"
        },
        {
          LessonNum: "2019-06-03",
          sum: "20/60",
          detail: "--",
          student_ids: [
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "check"
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "null"
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "check"
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "null"
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "check"
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "null"
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "check"
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "null"
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "check"
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "null"
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "check"
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "null"
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "check"
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "null"
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "check"
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "null"
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "check"
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "null"
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "check"
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "null"
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "check"
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "null"
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "check"
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "null"
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "check"
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "null"
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "check"
            },
            {
              student_id: "asd",
              student_name: "一二三",
              attendance_status: "null"
            }
          ]
        }
      ]
    };
  },
  //!
  created(){
      this.formatData()
    },

  methods: {
    InsertAttendance() {
      this.$prompt("请输入点名课时", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^[0-9]*$/,
        // 输入格式要求？
        inputErrorMessage: "格式不正确"
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: value + "成功创建点名"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    loseFcous(index, row) {
      debugger;
      row.seen = false;
    },
    cellClick(row, column) {
      debugger;
      row.seen = true;
    },
    //!
    formatData(){
          this.tableData.forEach(item => {
            for(key in item) {
              item[key] = {
                value: item[key],
                edit: false
              }
            }
          })
          console.log(this.tableData)
        },
    celledit(row, column, cell, event){
      if(row[column.property]){
        row[column.property].edit = true
        setTimeout(() => {
          this.$refs[column.property].focus()
        }, 20)
      }


    // tableDbEdit(row, column, cell, event) {
    //   console.log(row, column, cell, event);
    //   if (column.label != "学生姓名" && column.label != "学生ID") {
    //     event.target.innerHTML = "";
    //     let cellInput = document.createElement("input");
    //     cellInput.value = "";
    //     cellInput.setAttribute("type", "text");
    //     cellInput.style.width = "80%";
    //     cell.appendChild(cellInput);
    //     cellInput.onblur = function() {
    //       cell.removeChild(cellInput);
    //       event.target.innerHTML = cellInput.value;
    //     };
      }
    }
  }

</script>

<style>
.el-card.box-card {
  width: 480px;
}
</style>