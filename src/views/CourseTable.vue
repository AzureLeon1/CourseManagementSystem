<template>
    <div class="createTable">
        <div class="button-wrapper">
            <el-button circle icon="el-icon-arrow-left"></el-button>
        </div>
        <TimeTable></TimeTable>
        <div class="button-wrapper">
            <el-button circle icon="el-icon-arrow-right"></el-button>
        </div>
    </div>
</template>

<script>
import TimeTable from '@/components/TimeTable';
export default {
  name: 'CourseTable',
  components: {
      TimeTable
  },
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style scoped>
    .createTable{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
    }

    .button-wrapper{
        margin: 0 40px;
    }
</style>