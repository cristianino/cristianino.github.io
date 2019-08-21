<template lang="html">
  <div>
    <Layout
    :title="title"
    :content="text"
    />
    <v-row>
      <v-col
        v-for="n in 9"
        :key="n"
        class="d-flex child-flex"
        cols="4"
      >
        <v-card flat tile class="d-flex">
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
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
      'En esta área mostraré a través de una breve descripción y screenshots los proyectos propios en los que he trabajado, también pondré algunos en los que he participado, estos estarán debidamente identificados.'
    ]
  })
}
</script>

<style lang="scss" scoped>
</style>
