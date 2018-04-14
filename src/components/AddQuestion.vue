<template>
    <div id="app">
         <p><router-link to="/">View All</router-link></p>
         <form id="form" class="form-inline" v-on:submit.prevent="addQuestion">
          <div class="form-group">
            <label for="questionTitle">Question:</label>
            <input type="text" id="question" class="form-control" v-model="newQuestion.question">
          </div>
          <div class="form-group">
            <label for="Alternatives">Alternatives:</label>
            <input type="text" id="questionAlternatives" class="form-control" v-model="newQuestion.alternatives">
          </div>
          <div class="form-group">
            <label for="Answer">Answer:</label>
            <input type="text" id="questionAnswer" class="form-control" v-model="newQuestion.answer">
          </div>
          <input type="submit" class="btn btn-primary" value="Add Question">
        </form>
    </div>
</template>

<script>
import { db } from '@/firebase'

export default {
  name: 'AddQuestion',
  firebase: {
    questions: db.ref('questions')
  },
  data () {
    return {
      newQuestion: {
        question: '',
        alternatives: '',
        answer: ''
      }
    }
  },
  methods: {
    addQuestion: function () {
      this.$firebaseRefs.questions.push(this.newQuestion)
      this.newQuestion.question = ''
      this.newQuestion.alternatives = ''
      this.newQuestion.answer = ''
    }
  }
}
</script>
<style scoped>

</style>
