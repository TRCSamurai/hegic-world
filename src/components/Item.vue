<template>
  <article class="relative border p-8 border-primary">
    <div class="relative mb-2 cursor-pointer">
      <div class="text-xl text-secondary text-center text-white uppercase mb-4">{{ item.title }}</div>
      <div class="img-wrap mx-auto">
        <img :src="require(`@/assets/${item.image}`)" class="mx-auto block mb-4 rounded-full"  v-if="item.image">
      </div>
      <p class="text-center">{{ item.description }}</p>
      <a :href="item.url" class="absolute inset-0 z-40" target="_blank"></a>
    </div>
    <div class="" v-if="item.authors && item.authors.length > 0">
      <div class="uppercase text-white text-sm flex flex-wrap justify-center items-center">made by:
        <a :href="author.url" v-for="author in item.authors" class="text-primary ml-1 mr-2 outline-none" target="_blank"
           :key="author.name">🧙‍♂️ {{ author.name }}</a>
      </div>
    </div>


  </article>
</template>

<script>
export default {
  name: "Item",
  props: ['item'],
  methods: {}
}
</script>

<style lang="scss" scoped>
article {
  background: #105367;
  transition: box-shadow 300ms;
  &:hover {
    background: radial-gradient(50% 50% at 50% 50%, #07646e 52.6%, #0f5266 100%);
    box-shadow: 0 0 10px #45fff4;
  }
}
.img-wrap {
  width: 100%;
  max-width: 100px;
  min-height: 100px;
}
img {
  width: 100%;
  max-width: 100px;
  height: auto;
}
</style>
