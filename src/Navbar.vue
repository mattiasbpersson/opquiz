<template>
  <v-toolbar fixed>
    <v-toolbar-title class="home" @click="home">OP Quiz</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-if="user" @click="logout">Logout</v-btn>
      <v-btn v-else @click="login">Login</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import router from './router'
import firebase from 'firebase'

export default {
  name: 'navbar',
  data() {
    return {
      user: firebase.auth().currentUser
    }
  },
  methods: {
    login() {
      router.push('/login')
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(
          () => {
            console.log('Signed Out')
            this.user = null
            router.push('/login')
          },
          function(error) {
            alert('Oops. ' + error.message)
          }
        )
    },
    home() {
      router.push('/')
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}
</style>
