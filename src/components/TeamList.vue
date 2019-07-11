<template>
  <div class="teamlist">
    <div class="classteams">
      <el-card style="width: 100%; margin:20px auto 20px auto;" shadow="never">
        <div slot="header" class="clearfix">
          <span>班级队伍</span>
        </div>
        <!-- <div>
          <el-input
            v-focus
            placeholder="请输入关键字"
            v-model="searchkey"
            class="input-with-select"
            clearable
            autofocus
          ></el-input>
        </div> -->
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
                    <span>{{ props.row.students }}</span>
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
      <Myteam ref="myteam"/>
    </div>
  </div>
</template>

<script>
import api from "../api/index.js";
import Myteam from "../components/Myteam";
import temp from "@/store/modules/team.js";
export default {
  name: "TeamList",
  components: {
    Myteam
  },
  data() {
    return {
      searchkey: "",
      sec_data: {},
      all_teams: [],
      my_teams: [],
      tableData: [],
      table_Select_Data: [],
    };
  },
  methods: {
    getData() {
      api.getAllTeams(this.sec_data).then(res => {
        this.all_teams = res;
        console.log(eval(res[0].students));
        this.tableData = res;

        // 把队员json数组处理成字符串
        this.tableData.forEach(ele => {
          ele.students_array = eval(ele.students)
          ele.students = ""
          ele.students_array.forEach(stu => {
            ele.students = ele.students + stu.student_name + " "
          })
        })
        // 根据team_id排序
        this.tableData.sort(function(x,y){return x.team_id-y.team_id;})
        this.table_Select_Data = this.tableData;
        console.log(this.tableData);

        api
        .getMyTeams({ user_id: this.$store.state.profile.user.id })
        .then(res => {
          console.log(res);
          this.my_teams = res;
          // 从全部队伍中删除已加入的队伍
          this.my_teams.forEach(ele => {
            this.tableData.forEach(a => {
              if(a.team_id == ele.team_id) {
                this.tableData.splice(this.tableData.indexOf(a), 1)
              }
            })
          })
        });

      });


    },
    JoinClick(row) {
      const h = this.$createElement;
      this.$msgbox({
        message: h("p", null, [
          h("span", null, "确定加入？")
        ]),
        showCancelButton: true,
        confirmButtonText: "加入",
        cancelButtonText: "取消",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = "执行中...";
            api.joinTeam({team_id: row.team_id, user_id: this.$store.state.profile.user.id})
              .then(res => {
                console.log(res.data);
                if (res.data.code == 200){
                  done()
                  instance.confirmButtonLoading = false;
                  this.getData()
                  this.$refs.myteam.getData()
                }
              })
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
    // tableData() {
    //   return this.tableData;
    // },
    // table_Select_Data() {
    //   return this.tableData;
    // },
    isShow() {
      if (this.$store.state.profile.role == "student") {
        return true;
      } else {
        return false;
      }
    },
    table_Select_Data: function() {
      var _search = this.searchkey;
      if (_search) {
        console.log(_search);
        return this.tableData.filter(function(tableData) {
          return Object.keys(tableData).some(function(key) {
            return (
              String(tableData[key])
                .toLowerCase()
                .indexOf(_search) > -1
            );
          });
        });
      } else {
        return this.tableData;
      }
    }
  },
  mounted() {
    this.sec_data.course_id = this.$store.state.classinfo.classinfo.course_id;
    this.sec_data.sec_id = this.$store.state.classinfo.classinfo.sec_id;
    this.sec_data.semester = this.$store.state.classinfo.classinfo.semester;
    this.sec_data.year = this.$store.state.classinfo.classinfo.year;

    this.getData()

    // this.$store.dispatch("team/getTeam");
    this.table_Select_Data = this.tableData;
    //this.$stor.dispatch(actionType,playload)
    //要触发的action类型，所携带的数据
  }
};
</script>


<style>
</style>
