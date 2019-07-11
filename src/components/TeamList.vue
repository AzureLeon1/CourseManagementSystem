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
    JoinClick(mes) {
      console.log(mes);
      let form={
        team_id:mes['team_id'],
        user_id:this.$store.state.profile['user']['id']
      };
      console.log(this.$store.state.profile);
      console.log(form);
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
            this.$store.dispatch('team/joinTeam',form).then(res=>{
              console.log('afteradd')
              this.updateTable();
            });
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
      })
    },
    updateTable(){
      let form1={
        course_id:this.$store.state.classinfo.classinfo.course_id,
        sec_id:this.$store.state.classinfo.classinfosec_id,
        semester:this.$store.state.classinfo.classinfosemester,
        year:this.$store.state.classinfo.classinfo.year
      };
      // console.log(this.$store.state.profile['user']['id']);
      let form2={
        user_id:this.$store.state.profile['user']['id']
      };

      // alert("!")
      // console.log(this.$store.state.classinfo);
      // console.log('form1',form1);
      // console.log('form2',form2);
      this.$store.dispatch('team/getClassteam',form1);
      this.$store.dispatch('team/getMyteam',form2);
    }

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
    },
    classinfo() {
      return this.$store.state.classinfo.classinfo;
    }
  },
  mounted() {
    this.updateTable();
    // this.table_Select_Data = this.tableData;
    //this.$stor.dispatch(actionType,playload)
    //要触发的action类型，所携带的数据
  }
};
</script>


<style>
</style>
