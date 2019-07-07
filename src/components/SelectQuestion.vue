<template>
  
</template>

<script>
export default {
  name: 'SelectQuestion',
  
  data() {
    return {
      totalQuestions: [],
      questions: []
    };
  },

  methods: {
    getData() {
      
    },
    submit() {
      this.$emit("submit")
    }
  },
  
  mounted() {
    this.getData()
  }
}
</script>

<style>

</style>
