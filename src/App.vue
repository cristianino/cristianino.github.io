<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      src="./assets/logo.png"
    >
      <v-list dense>
        <v-list-item @click.stop="$router.push('home')">
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <menu-guest v-if="!$store.state.userInfo.state"/>
        <menu-auth v-else />

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
      <v-avatar>
        <v-img
          src="./assets/logo.png"
          lazy-src="../public/img/icons/apple-touch-icon-60x60.png"
          class="grey lighten-2"
          width="35"
        ></v-img>
      </v-avatar>
      </v-toolbar-title>
    </v-app-bar>
    <v-content>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </v-content>
    <v-bottom-navigation
      :value="activeBtn"
      app
      color="amber darken-2"
      v-if="$store.state.userInfo.state"
    >
      <v-btn>
        <span>Recents</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn>
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-footer
      color="amber darken-2"
      padless
    >
    <v-card
      flat
      tile
      class="amber darken-2 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in footerIcons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Este sitio es para expocición del trabajo de Cristian Niño y uso de algunos de sus desarrollos
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy; {{ new Date().getFullYear() }} — <strong>Tecnovulario</strong>
      </v-card-text>
    </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import menuGuest from './components/menu/Guest'
import menuAuth from './components/menu/Auth'
export default {
  components: {
    menuGuest,
    menuAuth
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
    drawer: null,
    footerIcons: [
        'android',
        'thumb_up',
        'favorite',
        'touch_app',
        'security',
    ],
    activeBtn: 1
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
