<template>
    <div id="app">
        <v-app dark>
          <navbar/>
          <router-view class="router"/>
        </v-app>
    </div>
</template>

<script>
import Navbar from './Navbar'
export default {
  components: {Navbar}
}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
  .router {
    margin-top: 30px;
  }
</style>
