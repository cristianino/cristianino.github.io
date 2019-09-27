<template>
  <v-card>
    <v-card-title>
      <h4>{{ title }}</h4>
    </v-card-title>
    <v-switch
      v-model="expand"
      :label="expand ? 'Cerrar' : 'Expandir'"
      class="pl-4 mt-0"
    ></v-switch>
    <v-divider></v-divider>
    <v-list v-show="expand" dense>
      <v-list-item>
        <v-list-item-content>Coindesk:</v-list-item-content>
        <v-list-item-content class="align-end">COP: {{ prices.coindesk.COP.rate }} |  USD: {{ prices.coindesk.USD.rate }} </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>Coinbase:</v-list-item-content>
        <v-list-item-content class="align-end">COP: {{ prices.coinbase.COP.rate }} |  USD: {{ prices.coinbase.USD.rate }} </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script >
const axios = require('axios')
export default {
  created () {
    this.getcoinDesk()
    this.getcoinBase()
  },
  data: () => ({
    expand: true,
    title: 'Precios de referencia',
    prices: {
      coindesk: {
        COP: {
          rate: 'cargando..'
        },
        USD: {
          rate: 'cargando..'
        }
      },
      coinbase: {
        COP: {
          rate: 'cargando..'
        },
        USD: {
          rate: 'cargando..'
        }
      }
    }
  }),
  methods: {
    getcoinDesk: function () {
      let url = 'https://api.coindesk.com/v1/bpi/currentprice/COP.json'
      axios.get(url)
      .then( res => {
        this.prices.coindesk = res.data.bpi
      })
    },
    getcoinBase: function () {
      let urlCop = 'https://api.coinbase.com/v2/prices/spot?currency=COP'
      let urlUSD = 'https://api.coinbase.com/v2/prices/spot?currency=USD'
      axios.get(urlCop)
      .then( res => {
        this.prices.coinbase.COP.rate = res.data.data.amount
      })
      axios.get(urlUSD)
      .then( res => {
        this.prices.coinbase.USD.rate = res.data.data.amount
      })
    }
  }
}
</script>
