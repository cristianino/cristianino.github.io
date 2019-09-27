<template>
  <v-card>
    <v-card-title>
      <h4>{{ title }}</h4>
    </v-card-title>
    <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="priceLocal"
            label="Precio en localbitcoin"
            @change="priceLocalCalculator"
            type="number"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="porcentaje"
            label="Porcentaje %"
            type="number"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="priceComition"
            label="Precio con comición"
            type="number"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="ganancia"
            label="Ganancia"
            type="number"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="priceLocalBTC"
            label="Precio en localbitcoin BTC"
            type="number"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="priceComitionBTC"
            label="Precio con comición BTC"
            type="number"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="gananciaBTC"
            label="Ganancia BTC"
            type="number"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  </v-card>
</template>
<script >
const axios = require('axios')
export default {
  created () {
  },
  updated () {
    console.log('actualizado');
  },
  data: () => ({
    title: 'Calculadora para LocalBitcoin',
    comicionLocal: 0.00015,
    priceLocal: 0,
    porcentaje: 0,
    priceComition: 0,
    ganancia: 0,
    priceLocalBTC: '1.00000000',
    priceComitionBTC: 0,
    gananciaBTC: 0
  }),
  methods: {
    getcoinDesk: function () {
      let url = 'https://api.coindesk.com/v1/bpi/currentprice/COP.json'
      axios.get(url)
      .then( res => {
        this.prices.coindesk = res.data.bpi
      })
    },
    priceLocalCalculator: function () {
      console.log('price upd');
      this.priceLocalBTC = this.priceLocalBTC - 0.005
    }
  }
}
</script>
