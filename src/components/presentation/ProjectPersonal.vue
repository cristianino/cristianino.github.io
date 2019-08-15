<template lang="html">
  <Layout
  :title="title"
  :content="text"
  />
</template>

<script>
import Layout from './Layout'
export default {
  components: {
    Layout
  },
  data: () => ({
    title: 'Proyectos Personales',
    text: [
      ''
    ]
  })
}
</script>

<style lang="scss" scoped>
</style>
