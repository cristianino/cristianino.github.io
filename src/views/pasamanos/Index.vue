<template>
  <v-container>
    <v-row
    class="title-container"
    justify="center"
    align="center"
    >
      <v-col
      cols="12"
      align="center"
      >
        <h2>{{content.title}}</h2>
      </v-col>
    </v-row>
    <v-row
    class="title-container"
    justify="center"
    align="center"
    >
      <v-col
      cols="12"
      align="center"
      >
        <Prices />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Prices from '../../components/pasamanos/Prices'

export default {
  components: {
    Prices
  },
  data: () => ({
    content: {
      title: 'Herramientas de pasamanos'
    }
  })
}
</script>
