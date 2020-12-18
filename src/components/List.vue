<template>
  <div class="flex grid gap-8 gap-y-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    <item v-for="(item, key) in items" :item="item" :key="key"/>
  </div>
</template>

<script>
import Item from "@/components/Item";
export default {
  name: "List",
  components: {Item},
  props: ['items']
}

</script>

<style scoped>

</style>
