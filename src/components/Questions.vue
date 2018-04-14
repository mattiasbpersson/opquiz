<template>
    <div id="app">
        <p><router-link to="/add-question">AddQuestion</router-link></p>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>Question</th>
                <th>Alternatives</th>
                <th>Answer</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(question) in questions"
                class='question'
                :key="question['.key']">
                <td>
                <template v-if="question != editedQuestion">
                    <div class="view" @click="editQuestion(question)">{{question.question}}</div>
                </template>
                <template v-if="question == editedQuestion">
                <input class="edit" type="text"
                    v-model="question.question"
                    v-question-focus="question == editedQuestion"
                    @blur="doneEdit(question)"
                    @keyup.enter="doneEdit(question)"
                    @keyup.esc="cancelEdit(question)">
                </template>
                </td>
                <td>{{question.alternatives}}</td>
                <td>{{question.answer}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { db } from '@/firebase'

export default {
  name: 'Questions',
  firebase: {
    questions: db.ref('questions')
  },
  data () {
    return {
      editedQuestion: null
    }
  },
  methods: {
    editQuestion: function (question) {
      console.log(question.question)
      this.beforeEditCache = question
      this.editedQuestion = question
    },
    doneEdit: function (question) {
      if (!this.editedQuestion) {
        return
      }
      this.editedQuestion = null
      question.question = question.question.trim()
      if (!question.question) {
        // this.removeQuestion(question);
      }
      this.saveEdit(question)
    },
    saveEdit: function (question) {
      // create a copy of the item
      const copy = { ...question }
      // remove the .key attribute
      delete copy['.key']
      this.$firebaseRefs.questions.child(question['.key']).set(copy)
      // questions.child(item[".key"]).set(copy);
    },
    cancelEdit: function (question) {
      this.editedQuestion = null
      question = this.beforeEditCache
    }
  },
  directives: {
    'question-focus': function (el, binding) {
      if (binding.value) {
        el.focus()
      }
    }
  }
}
</script>
<style scoped>
[v-cloak] {
  display: none;
}
</style>
