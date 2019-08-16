<template lang="html">
  <v-app id="inspire">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Registro a {{$store.state.app.title}}</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Nombre" clearable type="text" v-model="name.data" v-on:keyup.enter="registro" :rules="nameRules"></v-text-field>
                  <v-text-field prepend-icon="mail" name="login" label="Correo" clearable persistent-hint hint="example@example.com" type="email" v-model="email" v-on:keyup.enter="registro" :rules="emailRules"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Contraseña" type="password" v-model="password.data" v-on:keyup.enter="registro"
                    :append-icon="password.show ? 'visibility' : 'visibility_off'"
                    :rules="passwordRules"
                    :type="password.show ? 'text' : 'password'"
                    @click:append="password.show = !password.show"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Confirma la contraseña" type="password" v-model="verifyPassword.data" v-on:keyup.enter="registro"
                    :append-icon="verifyPassword.show ? 'visibility' : 'visibility_off'"
                    :error-messages='passwordMatchError()'
                    :rules="passwordVerifyRules"
                    :type="verifyPassword.show ? 'text' : 'password'"
                    @click:append="verifyPassword.show = !verifyPassword.show"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click.stop="registro">Guardar</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
  </v-app>
</template>

<script>
// const Swal = require('sweetalert2')
// const Toast = Swal.mixin({
//   toast: true,
//   position: 'top-end',
//   showConfirmButton: false,
//   timer: 3000
// })
import firebase from 'firebase'
export default {
  data: () => ({
    name: {
      data: '',
      show: false,
    },
    email: '',
    password: {
      data: '',
      show: false,
    },
    verifyPassword: {
      data: '',
      show: false,
    },
    nameRules:[
        v => !!v || 'El nombre es requerido.',
    ],
    emailRules:[
        v => !!v || 'El correo es requerido.',
        v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'El email debe ser válido',
    ],
    passwordRules:[
      v => !!v || 'La contraseña es requerida.',
      v => v.length >= 6 || 'Min 6 caracteres',
      v => /(?:.*[A-Z]){1}/.test(v) || 'Debe contener almenos una mayuscula.',
      v => /(?=.*[$@$!%*?&]){1}/.test(v) || 'Debe contener almenos un caracter especial.',
    ],
    passwordVerifyRules:[
        v => !!v || 'La verificación de la contraseña es requerida.'
    ]
  }),
  methods: {
    registro () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password.data).catch(function(error) {
          // Handle Errors here.
          console.log(error);
          // ...
        })
        console.log('enviando');
    },
    passwordMatchError () {
    return (this.password.data === this.verifyPassword.data) ? '' : 'Las contraseñas no coinciden'
    }
  }
}
</script>

<style lang="css" scoped>
</style>
