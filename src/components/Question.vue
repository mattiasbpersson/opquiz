<template>
  <v-jumbotron color="grey lighten-2">
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h1 v-if="isLoading">Loading...</h1>
          <h1 v-if="questionNotFound">Question not found!</h1>
          <div v-if="question.question">
            <h3 class="display-3">{{question.question}}</h3>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<script>
import {db} from '@/firebase'

export default {

  name: 'question',

  data() {
    return {
      question: {},
      isLoading: true,
      questionNotFound: false
    }
  },

  created() {
    this.bindDbRefToQuestion(`questions/${this.$route.params.questionKey}`)
  },

  watch: {
    '$route'(to) {
      this.isLoading = true
      this.bindDbRefToQuestion(`questions/${to.params.questionKey}`)
    }
  },

  methods: {

    bindDbRefToQuestion(dbRef) {
      this.$bindAsObject('question', db.ref(dbRef), () => this.handleError('firebase bind error'), this.firebaseBound)
    },

    firebaseBound() {
      this.isLoading = false
      this.questionNotFound = (this.question.question === undefined)
    },

    handleError(message) {
      this.questionNotFound = true
      console.log(message)
    }

  }
}
</script>

<style scoped>
</style>
