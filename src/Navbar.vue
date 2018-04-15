<template>
  <v-toolbar fixed>
    <v-toolbar-title class="home" @click="home">OP Quiz</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn class="login-btn" @click="login">Login</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import router from './router'

export default {
  name: 'navbar',
  methods: {
    login () {
      router.push('/login')
    },
    home () {
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
