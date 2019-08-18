<template>
  <v-app id="inspire">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="amber darken-3">
                <v-toolbar-title>Accede a {{$store.state.app.title}}</v-toolbar-title>
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
                <v-btn
                color="amber darken-3"
                @click.stop="login"
                class="white--text"
                >Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
  </v-app>
</template>

<script>
import firebase from 'firebase'
export default {
  data: () => ({
    user: '',
    password: ''
  }),
  mounted () {
    setTimeout(() =>{
      if (this.$store.state.userInfo.state == true) {
        this.$router.push('/');
      }
    }, 3000);
  },
  methods: {
    login () {
      if (!this.user) {
        // Toast.fire({
        //   type: 'error',
        //   title: 'El campo del usuario es necesario'
        // })
        return false
      }
      if (!this.password) {
        // Toast.fire({
        //   type: 'error',
        //   title: 'El campo de la contraseña es necesario'
        // })
        return false
      }
      firebase.auth().signInWithEmailAndPassword(this.user, this.password).catch(function(error) {
          console.log(error);
        });
      this.$router.push('/');
    }
  }
}
</script>

<style lang="css" scoped>
</style>
