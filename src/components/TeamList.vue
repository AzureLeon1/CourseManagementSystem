<template>
  <div class="teamlist">
    <div class="classteams">
      <el-card style="width: 100%; margin:20px auto 20px auto;" shadow="never" >
        <div slot="header" class="clearfix">
          <span>班级队伍</span>
        </div>
        <div>
          <el-input v-focus placeholder="请输入关键字" v-model="searchkey" class="input-with-select" clearable autofocus>
          </el-input>
        </div>
        <div>
          <el-table :data="table_Select_Data" height="300px" :border="false" :show-header="false">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="队伍ID：">
                    <span>{{ props.row.team_id }}</span>
                  </el-form-item>
                  <br />
                  <el-form-item label="队伍名称：">
                    <span>{{ props.row.team_name }}</span>
                  </el-form-item>
                  <br />
                  <el-form-item label="队员：">
                    <span>{{ props.row.team_member }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column prop="team_id" width="250px"></el-table-column>
            <el-table-column prop="team_name"></el-table-column>
            <el-table-column prop="team_btn" width="100px">
              <template slot-scope="scope" v-if="isShow">
                <el-button @click="JoinClick(scope.row)" type="text" size="small">加入</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </div>
    <!-- 老师不显示-->
    <div class="myteams" v-if="isShow">
      <Myteam />
    </div>
  </div>
</template>

<script>
import Myteam from "../components/Myteam";
import temp from "@/store/modules/team.js";
export default {
  name: "TeamList",
  components: {
    Myteam
  },
  data() {
    return {
      searchkey: ""
    };
  },
  methods: {
    JoinClick() {
      const h = this.$createElement;
      this.$msgbox({
        message: h("p", null, [
          h("span", null, "确定加入？")
          // h("i", { style: "color: teal" }, "VNode")
        ]),
        showCancelButton: true,
        confirmButtonText: "加入",
        cancelButtonText: "取消",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = "执行中...";
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 300);
            }, 3000);
          } else {
            done();
          }
        }
      }).then(() => {
        this.$message({
          type: "success",
          message: "action" + action
        });
      });
    },
    searchClassTeam() {}
  },
  watch: {
    table_Select_Data: {
      handler(table_Select_Data) {
        this.table_Select_Data = tableData;
      }
    }
  },

  computed: {
    tableData() {
      return this.$store.state.team.classteamlist;
    },
    table_Select_Data(){
      return this.$store.state.team.classteamlist;
    },
    isShow() {
      if (this.$store.state.profile.role == "student") {
        return true;
      } else {
        return false;
      }
    },
    table_Select_Data:function(){
      
      var _search=this.searchkey
      if(_search){
      return this.tableData.filter(function(tableData){
        return Object.keys(tableData).some(function(key){
          return String(tableData[key]).toLowerCase().indexOf(_search)>-1
        })
      })
      }
      else{
        return this.tableData
      }
    }
  },
  mounted() {
    this.$store.dispatch("team/getTeam");
    this.table_Select_Data = this.tableData;
    //this.$stor.dispatch(actionType,playload)
    //要触发的action类型，所携带的数据
  }
};
</script>


<style>
</style>
