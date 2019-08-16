<template>
  <v-app id="inspire">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Acceder a {{$store.state.app.name}}</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Usuario" type="email" v-model="user" v-on:keyup.enter="login"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Contraseña" type="password" v-model="password" v-on:keyup.enter="login"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click.stop="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
  </v-app>
</template>

<script>
const axios = require('axios')
const Swal = require('sweetalert2')
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})
export default {
  data: () => ({
    user: '',
    password: ''
  }),
  mounted () {

  },
  methods: {
    login () {
      if (!this.user) {
        Toast.fire({
          type: 'error',
          title: 'El campo del usuario es necesario'
        })
        return false
      }
      if (!this.password) {
        Toast.fire({
          type: 'error',
          title: 'El campo de la contraseña es necesario'
        })
        return false
      }
      axios.post(this.$store.state.api.url + 'oauth/token', {
        client_id: this.$store.state.grantToken.id,
        client_secret: this.$store.state.grantToken.key,
        grant_type: this.$store.state.grantToken.grantType,
        username: this.user,
        password: this.password,
        scope: ''
      }).then(res => {
        if (res.data.access_token) {
          this.$store.state.access_token = res.data.access_token
          this.$store.state.auth = true
          sessionStorage.setItem('access_token', this.$store.state.access_token)
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Accediste con exito',
            showConfirmButton: false,
            timer: 1000
          })
          this.getUserData()
          this.$router.push('/')
        }
      }).catch(e => {
        Swal.fire({
          position: 'top-end',
          type: 'error',
          title: 'El usuario y la contraseña no coinciden',
          showConfirmButton: false,
          timer: 1000
        })
        console.log(e)
      })
    },
    getUserData () {
      axios.get(this.$store.state.api.url + 'api/v1/user', {
        headers: {
          Authorization: 'Bearer ' + this.$store.state.access_token
        }
      }).then(res => {
        this.$store.state.app.user = res.data
      }).catch(e => {
        console.log('error', e)
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
