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
                <td>{{question.question}}</td>
                <td>{{question.alternatives}}</td>
                <td>{{question.answer}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {db} from '@/firebase';

export default {
  name: "Questions",
  firebase: {
      questions: db.ref('questions')
  }
}
</script>
<style scoped>
</style>
