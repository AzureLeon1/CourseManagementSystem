<template>
  <div class="table">
    <el-card  style="width: 850px; margin:50px 150px auto auto"><!--上右下左-->
        <el-table :data="tableData" stripe style="width: 800px" :row-class-name="tableRowAttendance">
        <el-table-column prop="LessonNum" label="课时" width="310px"></el-table-column>
        <el-table-column prop="sum" label="统计" width="310px"></el-table-column>
        <el-table-column prop="detail" label="具体信息" width="180px"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "AttendanceTable",
  data(){
        return {
          tableData: [{
            LessonNum: '2019-05-04',
            sum: '45/60',
            detail: '--'
          },
          {
            LessonNum: '2019-06-03',
            sum: '20/60',
            detail: '--'
          },
          {
            LessonNum: '2019-06-27',
            sum: '60/60',
            detail: '--'
          },
          {
            LessonNum: '2019-07-02',
            sum: '57/60',
            detail: '--'
          }
          ]
        }
      },
 
  methods: {
   }
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
.el-table.center
{
    align-items:center;
}


</style>