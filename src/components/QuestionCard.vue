<template>
  <div class="questionCardBox">
    <div class="title">
      {{questionInfo.content}}
    </div>

    <el-radio-group v-model="select">
      <el-radio 
        v-for="s in selects"
        :key="s.label"
        :label="s.label"
        class="optionRadio">{{s.content}}</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selects: [],
      select: ""
    }
  },

  props: {
    questionInfo: Object
  },

  methods: {
    getData() {
      var options = this.questionInfo.answer.split("_")
      for (let i = 0; i < options.length; ++i) {
        this.selects.push({
          label: i,
          content: options[i]
        })
      }
    }
  },

  mounted() {
    this.getData()
  }
}
</script>

<style>
.questionCardBox {
  margin-bottom: 15px;
  border-bottom: thin dashed #409eff;
}

.questionCardBox .title {
  margin-bottom: 5px;
}

.questionCardBox .optionRadio{
  display: block;
  margin: 5px 0;
}
</style>
