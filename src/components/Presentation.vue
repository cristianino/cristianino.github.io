<template lang="html">
  <v-container
  grey lighten-5
  >
    <v-row
    class="title-container"
    justify="center"
    >
      <v-col
      cols="12"
      align="center"
      >
        <h2>{{content.title}}</h2>
      </v-col>
    </v-row>
    <v-row
    class="perfil-image-container"
    justify="center"
    >
      <v-img
      src="../assets/img/fotoPerfil.jpg"
      lazy-src="../assets/img/fotoPerfil.jpg"
      aspect-ratio="1"
      class="grey lighten-2"
      max-width="200"
      align="center"
    ></v-img>
    </v-row>
    <v-row
    class="presentation-personal-container"
    v-show="presentationPersonal"
    >
      <v-col
      cols="12"
      >
        <h3>{{presentationPersonal.title}}</h3>
      </v-col>
      <v-col
      cols="12"
      >
        <p>{{presentationPersonal.text}}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    content: {
      title: 'Presentación'
    },
    presentationPersonal: {
      title: 'Presentación personal',
      text: 'Hola, mi nombre es Cristian Niño. Soy programador y Devop web. Soy un gran apasionado por la tecnologia blockchain'
    }
  })
}
</script>

<style lang="css" scoped>
</style>
