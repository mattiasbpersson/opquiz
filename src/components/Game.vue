<template>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3>
            <v-layout align-center>
                <v-flex>
                    <h1 v-if="isLoading">Loading...</h1>
                    <h1 v-if="questionsNotFound">Questions not found!</h1>
                    <h1 v-if="isComplete">Game complete! ({{scoreLabel}})</h1>
                    <h1 v-else>{{scoreLabel}}</h1>
                </v-flex>
            </v-layout>
            <v-progress-linear v-model="gameProgress"></v-progress-linear>
            <v-card color="blue-grey darken-2" class="white--text" v-if="!questionsNotFound && !isComplete">
                <v-card-title primary-title>
                    <h3 class="headline">{{currentQuestion.question}}</h3>
                </v-card-title>
                <v-card-text>
                    <v-container fluid grid-list-md>
                        <v-layout row wrap>
                            <v-flex xs6 true v-for="(alternative, index) in currentQuestion.alternatives" :key="index">
                                <v-card height="100%" @click.native="answer(currentQuestion, index)" dark>
                                    <v-card-text>
                                        {{alternative}}
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script>
import { db } from '@/firebase'

export default {
  name: 'game',

  data() {
    return {
      questions: [],
      currentQuestion: {},
      currentIndex: 0,
      isLoading: true,
      isComplete: false,
      questionsNotFound: false,
      gameProgress: 0,
      gameScore: 0,
      gameSize: 0
    }
  },

  created() {
    this.bindDbRefToQuestions(`questions`)
  },

  methods: {
    bindDbRefToQuestions(dbRef) {
      this.$bindAsArray(
        'questions',
        db.ref(dbRef),
        () => this.handleError('firebase bind error'),
        this.firebaseBound
      )
    },

    firebaseBound() {
      this.isLoading = false
      this.questionsNotFound =
        this.questions === undefined || this.questions.length === 0
      if (!this.questionsNotFound) {
        this.currentQuestion = this.questions[this.currentIndex]
        this.gameSize = this.questions.length
      }
    },

    handleError(message) {
      this.questionsNotFound = true
      console.log(message)
    },

    answer(question, answerIndex) {
      console.log(question.alternatives + ': ' + answerIndex)
      if (question.answer === answerIndex) {
        this.increaseScore()
      }
      this.nextQuestion(question, answerIndex)
    },
    increaseScore() {
      this.gameScore++
    },
    nextQuestion() {
      this.currentIndex++
      this.gameProgress = this.currentIndex / this.gameSize * 100
      if (this.currentIndex < this.questions.length) {
        this.currentQuestion = this.questions[this.currentIndex]
      } else {
        this.isComplete = true
      }
    }
  },
  computed: {
    scoreLabel() {
      return this.gameScore / this.gameSize * 100 + '%'
    }
  }
}
</script>

<style scoped>

</style>
