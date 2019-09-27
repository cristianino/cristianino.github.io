<template lang="html">
  <span>
    <v-list-item @click.stop="$router.push('pasamanos')">
      <v-list-item-action>
        <v-icon>exit_to_app</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Pasamanos</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item @click.stop="logout()">
      <v-list-item-action>
        <v-icon>exit_to_app</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Salir</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </span>
</template>

<script>
import firebase from 'firebase'
export default {
  methods: {
    logout () {
      this.$router.push('home')
      firebase.auth().signOut().catch(function (error) {
        // Handle Errors here.
        console.log(error)
        // ...
      })

      console.log('logout')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
