<template>
  <h3 class="text-white text-2xl md:text-3xl font-title relative uppercase mb-6 md:mb-10">
    <slot></slot>
  </h3>
</template>

<script>
export default {
  name: "CategoryTitle"
}
</script>

<style lang="scss" scoped>
h3 {
  padding-left: 76px;
  text-shadow: 0 0 1px #1b1b1b;
  &:before {
    content: '';
    position: absolute;
    width: 61px;
    height: 36px;
    background: url("./../assets/cat-icon.svg");
    background-position-x: 0%;
    background-position-y: 0%;
    -webkit-background-size: contain;
    -moz-background-size: contain;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    left: 0;
    @screen md {
      width: 61px;
      height: 36px;
    }
  }
}
</style>
