<template>
  <div class="questionCardBox">
    <div class="title">
      {{questionInfo.content}}&nbsp;&nbsp;({{questionInfo.score}}分)
    </div>

    <el-radio-group v-model="select">
      <el-radio 
        v-for="s in selects"
        :key="s.label"
        :label="s.content"
        :disabled="showAnswer&&s.content!=questionInfo.answer"
        class="optionRadio">{{s.content}}</el-radio>
    </el-radio-group>

    <el-divider></el-divider>
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
    questionInfo: Object,
    showAnswer: Boolean
  },

  methods: {
    getData() {
      var options = this.questionInfo.options.split("_")
      for (let i = 0; i < options.length; ++i) {
        this.selects.push({
          label: i,
          content: options[i]
        })
      }
      if (this.showAnswer) {
        this.select = this.questionInfo.answer
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
  margin-bottom: 5px;
}

.questionCardBox .title {
  margin-bottom: 5px;
}

.questionCardBox .optionRadio{
  display: block;
  margin: 5px 0;
}
</style>
