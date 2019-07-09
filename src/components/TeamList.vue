<template>
  <div class="teamlist">
    <div class="classteams">
      <el-card style="width: 850px; margin:20px auto 20px auto">
        <div slot="header" class="clearfix">
          <span>班级队伍</span>
        </div>
        <div>
          <el-input placeholder="请输入关键字" v-model="searchkey" class="input-with-select" clearable>
            <el-button slot="append" icon="el-icon-search" @click="searchClassTeam()"></el-button>
          </el-input>
        </div>
        <div>
          <el-table :data="tableData" height="300px" :border="false" :show-header="false">
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
            <el-table-column prop="team_id" width="300px"></el-table-column>
            <el-table-column prop="team_name" width="350px"></el-table-column>
            <el-table-column prop="team_btn" width="100px">
              <template slot-scope="scope">
                <el-button @click="JoinClick(scope.row)" type="text" size="small">加入</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </div>
    <!-- 老师不显示-->
    <div class="myteams">
      <Myteam />
    </div>
  </div>
</template>

<script>
import Myteam from "../components/Myteam";
export default {
  name: "TeamList",
  components: {
    Myteam
  },
  data() {
    return {
      searchkey: "",
      tableData: [
        {
          team_id: "1234",
          team_name: "一二三四",
          team_member:"sad  sdf asdf"
        },
        {
          team_id: "1234",
          team_name: "一二三四",
          team_member:"sad  sdf asdf"
        },
        {
          team_id: "1234",
          team_name: "一二三四",
          team_member:"sad  sdf asdf"
        },
        {
          team_id: "1234",
          team_name: "一二三四",
          team_member:"sad  sdf asdf"
        },
        {
          team_id: "1234",
          team_name: "一二三四",
          team_member:"sad  sdf asdf"
        },
        {
          team_id: "1234",
          team_name: "一二三四",
          team_member:"sad  sdf asdf"
        }
      ]
    };
  },
  methods: {
    JoinClick() {
      const h = this.$createElement;
      this.$msgbox({
        message: h("p", null, [
          h("span", null, "确定加入？"),
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
    }
  }
};
</script>


<style>

</style>
