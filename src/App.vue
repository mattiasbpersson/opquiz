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
import {db} from './firebase';

export default {
  firebase: {
    questions: db.ref('questions')
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
