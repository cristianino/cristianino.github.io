import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

Vue.config.productionTip = false
// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDmXEzXnxAYZcA3hAX_0sQhjmvR_a84Bkk',
  authDomain: 'personal-eb4bc.firebaseapp.com',
  databaseURL: 'https://personal-eb4bc.firebaseio.com',
  projectId: 'personal-eb4bc',
  storageBucket: '',
  messagingSenderId: '694036335968',
  appId: '1:694036335968:web:17d1ec8f4895156b'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
