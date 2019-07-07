<template>
  <div class="table">
    <el-card style="width: 850px; margin:20px auto 20px auto">
      <!--上右下左-->
      <el-table :data="tableData" stripe style="width: 800px" :row-class-name="tableRowAttendance">
        <el-table-column prop="LessonNum" label="课时" width="390px"></el-table-column>
        <el-table-column prop="sum" label="统计" width="310px"></el-table-column>
        <el-table-column prop="detail" label="具体信息" width="100px">
          <template slot-scope="scope">
            <el-popover placement="left" width="550px" trigger="click">
              <el-table :data="scope.row.student_ids" height="500px">
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
                    <span>{{scope.row.attendance_status}}</span>
                  </template>
                </el-table-column>
              </el-table>
              <el-button type="text" size="medium" slot="reference">详细</el-button>
            </el-popover>
          </template>
          <!-- <AttendanceReference ><AttendanceReference /> -->
          <!-- <el-button type="text" size="small" slot="reference">详细</el-button>       -->
        </el-table-column>
      </el-table>
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
              student_id: "089",
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
      ],
      
    };
  },

  methods: {}
};
</script>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.el-card.box-card {
  width: 480px;
}
.el-table.center {
  align-items: center;
}
</style>