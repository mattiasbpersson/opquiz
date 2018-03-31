<template>
    <div id="app">
        <table class="table table-striped">
            <thead>
            <tr>
                <th>Question</th>
                <th>Alternatives</th>
                <th>Answer</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(question) in questions" :key="question.question">
                <td>{{question['.key']}}</td>
                <td>{{question.alternatives}}</td>
                <td>{{question.answer}}</td>
            </tr>
            </tbody>
        </table>
        <img src="./assets/logo.png">
        <router-view/>
    </div>
</template>

<script>
import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCt1w3N_MYfIQHrPFFTo1ESzqIfPBpCGuY',
  authDomain: 'opquiz-134a5.firebaseapp.com',
  databaseURL: 'https://opquiz-134a5.firebaseio.com',
  projectId: 'opquiz-134a5',
  storageBucket: 'opquiz-134a5.appspot.com',
  messagingSenderId: '630674965180'
}

let app = firebase.initializeApp(config)

let db = app.database()
let questionsRef = db.ref('questions')

export default {
  name: 'App',
  firebase: {
    questions: questionsRef
  }
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
</style>
