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
      <photo-perfil
      align="center"
      width="200"
      />
    </v-row>
    <presentation-personal/>
    <my-history/>
    <project-personal/>
    <experience/>
  </v-container>
</template>

<script>
import photoPerfil from './presentation/PhotoPerfil'
import presentationPersonal from './presentation/Personal'
import myHistory from './presentation/History'
import projectPersonal from './presentation/ProjectPersonal'
import experience from './presentation/Experience'
export default {
  components: {
    photoPerfil,
    presentationPersonal,
    myHistory,
    projectPersonal,
    experience
  },
  data: () => ({
    content: {
      title: 'Presentación'
    }
  })
}
</script>

<style lang="css" scoped>
</style>
