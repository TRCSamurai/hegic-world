<template>
  <a :href="url" class="border border-primary wrap p-8 flex items-center">
      <img src="@/assets/doc-icon.svg" class="block flex-shrink-0 mr-8">
      <span class="text-center w-full block">{{ title }}</span>
  </a>
</template>

<script>
export default {
  name: "Document",
  props: ['title', 'url'],
  methods: {}
}
</script>

<style lang="scss" scoped>

.wrap {
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
