<template lang="html">
  <v-row
  >
    <v-col
    cols="12"
    v-show="title"
    >
      <h3>{{title}}</h3>
    </v-col>
    <v-col
    cols="12"
    v-show="content"
    >
      <p v-for="text in content">{{text}}</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    title: String,
    content: Array,
    characteristics: Object
  },
  data: () => ({

  })
}
</script>

<style lang="css" scoped>
</style>
