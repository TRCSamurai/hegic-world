<template>
  <div class="py-8 md:py-12" :id="category.category">
    <div class="flex flex-wrap items-center">
      <category-title>
        {{ category.title }}
      </category-title>
      <p v-if="category.description">- {{ category.description }}</p>

    </div>
    <list :items="category.list"/>
  </div>
</template>

<script>
import CategoryTitle from "@/components/CategoryTitle";
import List from "@/components/List";

export default {
  name: "Category",
  components: {List, CategoryTitle},
  props: ['category']
}
</script>

<style lang="scss" scoped>

</style>
