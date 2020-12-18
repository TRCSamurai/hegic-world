<template>
  <a :href="url" class="text-center text-white hover:text-primary px-2">
      <span class="img-wrap flex items-center justify-center border border-primary mb-1">
        <img :src="require(`@/assets/${icon}`)" class="mx-auto block" v-if="icon">
      </span>
    <span class="text-xs text-center w-full block">{{ name }}</span>
  </a>
</template>

<script>
export default {
  name: "SocialItem",
  props: ['name', 'url', 'icon'],
  methods: {}
}
</script>

<style lang="scss" scoped>

.img-wrap {
  height: 44px;
  width: 44px;
  background: #105367;
  transition: box-shadow 300ms;
  &:hover {
    background: radial-gradient(50% 50% at 50% 50%, #07646e 52.6%, #0f5266 100%);
    box-shadow: 0 0 10px #45fff4;
  }
}

img {
  width: 100%;
  max-width: 28px;
  height: auto;
}
</style>
