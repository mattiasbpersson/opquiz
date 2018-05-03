<template>
  <v-toolbar fixed>
    <v-toolbar-title class="home" @click="home">OP Quiz</v-toolbar-title>
    <v-btn @click="randomQuestion">Random Question</v-btn>
    <v-btn @click="playGame">Play Game</v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-if="user" @click="logout">Logout</v-btn>
      <v-btn v-else @click="login">Login</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import router from './router'
import {db} from '@/firebase'
import firebase from 'firebase'

export default {

  name: 'navbar',

  data() {
    return {
      user: firebase.auth().currentUser
    }
  },

  firebase: {
    questions: db.ref('questions')
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
          function (error) {
            alert('Oops. ' + error.message)
          }
        )
    },

    home() {
      router.push('/')
    },

    randomQuestion() {
      const index = Math.floor(Math.random() * this.questions.length)
      router.push(`/questions/${this.questions[index]['.key']}`)
    },

    playGame() {
      router.push(`/game`)
    }
  }
}
</script>

<style scoped>
  .home {
    cursor: pointer;
  }
</style>
