<template>
  <div id="app">
    <p>
      <router-link to="/">View All</router-link>
    </p>
    <v-form id="form" ref="addQuestionForm" lazy-validation>
      <v-text-field label="Question" :rules="valueRules" v-model="newQuestion.question" required></v-text-field>
      <v-text-field label="Alternatives" :rules="valueRules" v-model="newQuestion.alternatives" required></v-text-field>
      <v-text-field label="Answer" :rules="valueRules" v-model="newQuestion.answer" required></v-text-field>
      <v-btn @click="addQuestion" :disabled="!valid">add</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </v-form>
  </div>
</template>
<v-text-field
      label="Name"
      v-model="name"
      :rules="nameRules"
      :counter="10"
      required
    ></v-text-field>
<script>
import { db } from '@/firebase';

export default {
  name: 'AddQuestion',
  firebase: {
    questions: db.ref('questions')
  },
  data() {
    return {
      valid: true,
      valueRules: [v => !!v || 'Value is required'],
      newQuestion: {
        question: '',
        alternatives: '',
        answer: ''
      }
    };
  },
  methods: {
    addQuestion: function() {
      if (this.$refs.addQuestionForm.validate()) {
        this.$firebaseRefs.questions.push(this.newQuestion);
        this.newQuestion.question = '';
        this.newQuestion.alternatives = '';
        this.newQuestion.answer = '';
        this.$refs.addQuestionForm.reset();
      }
    },
    clear() {
      this.$refs.addQuestionForm.reset();
    }
  }
};
</script>
<style scoped>

</style>
