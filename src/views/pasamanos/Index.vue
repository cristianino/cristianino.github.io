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
      xs="12"
      sm="4"
      md="6"
      >
        <Prices />
      </v-col>
      <v-col
      cols="12"
      align="center"
      xs="12"
      sm="8"
      md="6"
      >
        <localBitcoinCalculator />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Prices from '../../components/pasamanos/Prices'
import localBitcoinCalculator from '../../components/pasamanos/localBitcoinCalculator'

export default {
  components: {
    Prices,
    localBitcoinCalculator,
  },
  data: () => ({
    content: {
      title: 'Herramientas de pasamanos'
    }
  })
}
</script>
