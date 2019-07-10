<template>
  <div class="myteamlist">
    <el-card style="width: 850px; margin:20px auto 20px auto">
        <div slot="header" class="clearfix">
            <span>我的队伍</span>
            <el-button style="float:right; padding: 5px 8px" icon="add"  size="medium" circle @click="InsertTeam">+</el-button>
        </div>
        <div>
          <el-table :data="tableData" height="300" :border="false" :show-header="false">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="队伍ID：">
                    <span>{{ props.row.team_id }}</span>
                  </el-form-item><br>                  
                  <el-form-item label="队伍名称：">
                    <span>{{ props.row.team_name }}</span>
                  </el-form-item><br>
                  <el-form-item label="队员：">
                    <span>{{ props.row.team_member }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column prop="team_id" width="300"></el-table-column>
            <el-table-column prop="team_name" width="450"></el-table-column>
          </el-table>
        </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Myteam",
  data(){
      return{
          
      }
  },
   methods: {
      InsertTeam() {
        this.$prompt('请输入要创建的队伍名称', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern:/^[\s\S]*.*[^\s][\s\S]*$/ ,
          inputErrorMessage: '队伍名称格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '成功创建队伍' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      }
   },
   computed:{
    tableData(){
      return this.$store.state.team.myownteamlist
    },
  },
  mounted(){
    this.$store.dispatch("team/getTeam")
    
    //this.$stor.dispatch(actionType,playload)
    //要触发的action类型，所携带的数据
  }
};
</script>
