<template>
  <v-toolbar fixed>
    <v-toolbar-title class="home" @click="home">OP Quiz</v-toolbar-title>
    <v-btn @click="randomQuestion">Random Question</v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn class="login-btn" @click="login">Login</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import router from './router'
import {db} from '@/firebase'

export default {
  name: 'navbar',
  firebase: {
    questions: db.ref('questions')
  },
  methods: {
    login() {
      router.push('/login')
    },
    home() {
      router.push('/')
    },
    randomQuestion() {
      const index = Math.floor(Math.random() * this.questions.length)
      router.push(`/questions/${this.questions[index]['.key']}`)
    }
  }
}
</script>

<style scoped>
  .home {
    cursor: pointer;
  }
</style>
