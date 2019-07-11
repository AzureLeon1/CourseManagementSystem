<template>
  <div class="class-list">
    <div class="left">
      <el-input v-model="searchcondition" placeholder="请输入查询的班级"></el-input>
      <div
        v-for="item in result"
        @click="toClassInfo(item.course_id,
            item.sec_id, item.semester, item.year)"
        :key="item.name"
      >
        <ClassCard :classname="item.course_name" :content="item.course_description" :imgURL="item.avatar" />
      </div>
    </div>
  </div>
</template>
<script>
import ClassCard from "../components/ClassCard";
export default {
  name: "ClassList",
  components: {
    ClassCard
  },
  data() {
    return {
      searchcondition: "",
      current: 1,
      pageSize: 0,
      apidata: []
    };
  },
  methods: {
    toClassInfo(course_id, sec_id, semester, year) {
      this.$store.commit("classinfo/setClassDetailUseClassNav", false)
      this.$router.push({
        name: "ClassDetail",
        params: {
          class_id: course_id,
          sec_id: sec_id,
          semester: semester,
          year: year,
        }
      });
    },
    syncItem(items) {
      this.apidata = items;
    },
    handleCurrentChange(val) {
      const self = this;

      console.log(`当前页: ${val}`);
      this.current = val;
    }
  },
  mounted() {
    console.log("test");
    this.$store.dispatch("classlistitem/getClassListItem");
    this.syncItem(this.items);
    console.log(this.items);

    const self = this;
    self.pageSize = 10;
    self.current = 1;
  },
  computed: {
    items() {
      return this.$store.state.classlistitem.Items;
    },
    classList() {
      return this.apidata.filter(a_class => {
        const text = Object.values(a_class)
          .join("____")
          .toLowerCase();
        return text.search(this.searchcondition.toLowerCase()) >= 0;
      });
      // return this.apidata
    },
    result() {
      if (this.searchcondition) this.current = 1;
      const val = this.current;
      return this.classList.slice(
        (val - 1) * this.pageSize,
        val * this.pageSize
      );
      // return this.classList
    },
    total() {
      return this.classList.length;
    }
  },
  watch: {
    items: {
      deep: true,
      handler(items) {
        this.syncItem(items);
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.class-list {
  width: 100%;
  max-width: 800px;
  display: flex;
  margin: 30px auto;
}
.left {
  flex: 2;
  margin-right: 20px;

  .el-input,
  .el-card {
    margin: 10px 0;
  }
  .el-card {
    cursor: pointer;
  }
}
.right {
  flex: 1;
}
.create {
  background-color: lightcoral;
  color: white;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.5;
  .el-button {
    margin-top: 10px;
    width: 100%;
    font-weight: 300;
  }
}

.list {
  display: flex;
  justify-content: center;
}

.createButton {
  font-family: Microsoft JhengHei;
  font-size: 15px;
  font-weight: bold;
}

.block {
  display: flex;
  justify-content: center;
}
.el-pagination {
  margin: 15px 0 23px;
  text-align: center;
}
.sticky {
  position: sticky;
  top: 25px;
}
</style>
