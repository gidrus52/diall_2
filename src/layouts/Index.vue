<template>
      <component :is="currentLayout">
        <slot></slot>
      </component>
</template>

<script>
export default {
  name: "index",
  computed: {
    currentLayout() {
      const layout = this.$route.meta.layout != undefined ? this.$route.meta.layout : 'Default'
      return () => import (`@/layouts/${layout}`)
    }
  }
}
</script>

<style scoped>

</style>