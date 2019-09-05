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
        sm="12"
        md="3"
        lg="4"
      >
        <v-card
        flat
        tile
        class="d-flex"
        @click="showProject(project)"
        >
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
    <div
    class="show-project-info-card"
    v-if="projectShow.show"
    transition="scroll-y-transition"
    >
      <v-btn
      icon
      class="close-buttom"
      @click="projectShow.show = false"
      >
        <v-icon class="amber--text darken-2">close</v-icon>
      </v-btn>
      <v-card
      class="mx-auto"
      width="100%"
      >
        <v-card-title>{{projectShow.data.name}}</v-card-title>
        <v-card-text>{{projectShow.data.description}}</v-card-text>
        <v-carousel
        :cycle="projectShow.carouselProp.cycle"
        >
          <v-carousel-item
            v-for="(image,i) in projectShow.data.images"
            :key="i"
            :src="image.url"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
        <v-list>
          <v-subheader>Tecnologias:</v-subheader>
          <v-list-item-group color="primary">
            <v-list-item
              v-for="(item, i) in projectShow.data.tecnologies"
              :key="i"
            >
              <v-list-item-content>
                <v-list-item-title>{{item}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </div>
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
        description: 'Este programa permite hacer transferecias bajo un token propio, sin blockchain, genera una wallet aleatoria además de permitir alojar una wallet de bitcoin, una de bitcoin cash, y una de ethereum. Las transacciónes son atomicas. Tiene un sistema de roles: Admin, gestor y usuario.',
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
            url: '/img/proyectos/pagos/recibir-transferencia.png',
            name: 'recibir transferencia',
            primary: true
          },
          {
            url: '/img/proyectos/pagos/recibir-con-camara.png',
            name: '',
            primary: false
          },
          {
            url: '/img/proyectos/pagos/recibir-transferecnai.png',
            name: '',
            primary: false
          },
          {
            url: '/img/proyectos/pagos/Registro.png',
            name: '',
            primary: false
          }
        ]
      },
      {
        id: 2,
        name: 'Pagos por Qr2',
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
            url: '/img/proyectos/pagos/recibir-transferencia.png',
            name: 'recibir transferencia',
            primary: true
          },
          {
            url: '/img/proyectos/pagos/recibir-con-camara.png',
            name: '',
            primary: false
          },
          {
            url: '/img/proyectos/pagos/recibir-transferecnai.png',
            name: '',
            primary: false
          },
          {
            url: '/img/proyectos/pagos/Registro.png',
            name: '',
            primary: false
          }
        ]
      }
    ],
    projectShow: {
      show: false,
      data: null,
      carouselProp: {
        cycle: true
      }
    }
  }),
  methods: {
    showProject: function (data) {
      this.projectShow.show = true
      this.projectShow.data = data
      console.log(this.projectShow.data)
    }
  }
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
      visibility:hidden;
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
        visibility: visible;
      }
    }
  }
}
.show-project-info-card{
  z-index: 1000;
  position: fixed;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.7);
  top: 0;
  left: 0;
  z-index: 1100;
  padding: 2% 5%;
  overflow: auto;

  .close-buttom{
    top: 0;
    right: 0;
    margin-top: 0.3em;
    margin-right: 0.3em;
    position: absolute;
    z-index: 1001;
    background: rgba(0,0,0,0.7);
  }
}
</style>
