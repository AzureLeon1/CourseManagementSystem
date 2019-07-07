<template>
  <i class="avatar" :style="style" />
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
    }
  },
  computed: {
    style () {
      const { src, size, border } = this
      return {
        backgroundImage: src && `url(${src})`,
        width: `${size}px`,
        height: `${size}px`,
        border: border ? null : 'none'
      }
    }
  },
  props: {
    size: Number,
    src: String,
    border: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .avatar {
    $w: 40px;
    width: $w;
    height: $w;

    display: inline-block;
    background: url('../assets/logo.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border: 1px solid black;
    border-radius: 50%;
  }
</style>
