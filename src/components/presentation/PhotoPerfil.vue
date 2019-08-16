<template lang="html">
  <v-img
  src="../../assets/img/fotoPerfil.jpg"
  lazy-src="../../assets/img/fotoPerfil.jpg"
  aspect-ratio="1"
  class="grey lighten-2"
  :max-width="width"
  ></v-img>
</template>

<script>
export default {
  props: {
    width: String
  }
}
</script>

<style lang="css" scoped>
</style>
