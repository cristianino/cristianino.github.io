<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      src="./assets/logo.png"
    >
      <v-list dense>
        <menuGuest v-if="!$store.state.userInfo.state"/>
        <v-list-item @click.stop="$router.push('home')">
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- <v-list-item @click="">
          <v-list-item-action>
            <v-icon>contact_mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="amber darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
      @click.stop="$router.push('/')"
      class="logo"
      >
      <v-img
        src="./assets/logo.png"
        lazy-src="./assets/logo.png"
        aspect-ratio="1"
        class="grey lighten-2"
        width="35"
      ></v-img>
      </v-toolbar-title>
    </v-app-bar>
    <v-content>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </v-content>
    <v-footer
      color="amber darken-2"
      app
    >
      <span class="white--text">&copy; Tecnovulario 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import menuGuest from './components/menu/Guest'
export default {
  components: {
    menuGuest
  },
   created: () => {
  //   let promesa = new Promise((res, rej) => {
  //     if (true) {
  //       res('La operación fue exitosa!')
  //     }
  //     rej('Algo falló...')
  //   })
  //
  //   promesa.then( res => {
  //     console.log(res);
  //   }).catch( e => {
  //     console.error(e)
  //   })
  //   Promise.all([promesa])
  //   .then( res => {
  //     console.log(res);
  //   })
  //   .catch( e => {
  //     console.log(e);
  //   })
  //   Promise.race([promesa])
  //   .then( res => {
  //     console.log(res);
  //   })
  //   .catch( e => {
  //     console.log(e);
  //   })
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
}
</script>
<style media="screen" lang="scss">
  .logo{
    cursor: pointer;
    &:hover{
      opacity: 0.8;
    }
  }
</style>
