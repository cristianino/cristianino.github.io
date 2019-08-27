<template lang="html">
  <div>
    <Layout
    :title="title"
    :content="text"
    />
    <v-row>
      <v-col
        v-for="project in projects"
        :key="project.id"
        class="d-flex child-flex project-col"
        cols="4"
      >
        <v-card flat tile class="d-flex">
          <v-img
            :src="project.imagePrimary"
            class="amber darken-2 project-img"
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
            <template>
              <v-row align="end" class="white--text pa-2 fill-height data-project-front">
                <v-col>
                  <div class="subheading">{{project.name}}</div>
                  <div class="body-1 grey--text" v-if="project.personal.state">Personal</div>
                  <div class="body-3 grey--text" v-else>A la medida</div>
                  <div class="body-1 data-project-description">
                    {{project.personal.description}}
                  </div>
                </v-col>
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
    ],
    projects: [
      {
        id: 1,
        name: 'Pagos por Qr',
        description: 'Este programa permite hacer transferecias bajo un token propio, sin blockchain, genera una wallet aleatoria además de permitir alojar una wallet de bitcoin, una de bitcoin cash, y una de ethereum. Las transacciónes son atomicas. Tiene un sistema de roles: Admun, gestor y usuario.',
        personal: {
          state: false,
          description: 'Este programa se desarrolló para una empresa de marketing, cuyo nombre fue "E Pay".'
        },
        tecnologies: [
          'Laravel',
          'vue',
          'vue-router',
          'bootstrap',
          'vuetify',
          'laravel-mix'
        ],
        imagePrimary: '/img/proyectos/pagos/recibir-transferencia.png',
        images: [
          {
            url: 'recibir-transferencia.png',
            name: 'recibir transferencia',
            primary: true
          },
          {
            url: 'recibir-con-camara.png',
            name: '',
            primary: false
          },
          {
            url: 'recibir-con-camara',
            name: '',
            primary: false
          },
          {
            url: 'recibir-transferecnai.png',
            name: '',
            primary: false
          },
          {
            url: 'Registro.png',
            name: '',
            primary: false
          }
        ]
      },
      {
        id: 2,
        name: 'Pagos por Qr',
        description: 'Este programa permite hacer transferecias bajo un token propio, sin blockchain, genera una wallet aleatoria además de permitir alojar una wallet de bitcoin, una de bitcoin cash, y una de ethereum. Las transacciónes son atomicas. Tiene un sistema de roles: Admun, gestor y usuario.',
        personal: {
          state: false,
          description: 'Este programa se desarrolló para una empresa de marketing, cuyo nombre fue "E Pay".'
        },
        tecnologies: [
          'Laravel',
          'vue',
          'vue-router',
          'bootstrap',
          'vuetify',
          'laravel-mix'
        ],
        imagePrimary: '/img/proyectos/pagos/recibir-transferencia.png',
        images: [
          {
            url: 'recibir-transferencia.png',
            name: 'recibir transferencia',
            primary: true
          },
          {
            url: 'recibir-con-camara.png',
            name: '',
            primary: false
          },
          {
            url: 'recibir-con-camara',
            name: '',
            primary: false
          },
          {
            url: 'recibir-transferecnai.png',
            name: '',
            primary: false
          },
          {
            url: 'Registro.png',
            name: '',
            primary: false
          }
        ]
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.project-col{
  position:relative;
  .project-img{
    transition: all .6s ease;
    .data-project-front{
      position: absolute;
      transition: all .6s ease;
      background-color: rgba(243,148,54, 0.8);
      height: 38%;
      margin-top: 38%;
      width: 100%;
    }
    .data-project-description{
      display:none;
    }
    &:hover{
      cursor: pointer;
      touch-action: auto;
      opacity: 0.6;
      .data-project-front{
        opacity: 1;
        transition: all .8s ease;
        margin-top: 0%;
        height: auto;
        background-color: rgb(243,148,54);
      }
      .data-project-description{
        display: inherit;
      }
    }
  }
}
</style>
