<template>
         <form id="form" class="form-inline" v-on:submit.prevent="addQuestion">
          <div class="form-group">
            <label for="questionTitle">Question:</label>
            <input type="text" id="question" class="form-control" v-model="newQuestion.question">
          </div>
          <div class="form-group">
            <label for="Alternatives">Author:</label>
            <input type="text" id="questionAlternatives" class="form-control" v-model="newQuestion.alternatives">
          </div>
          <input type="submit" class="btn btn-primary" value="Add Question">
        </form>
</template>

<script>
import { db } from "@/firebase";

export default {
  name: "AddQuestion",
  firebase: {
    questions: db.ref("questions")
  },
  data() {
    return {
      newQuestion: {
        question: "",
        alternatives: ""
      }
    };
  },
  methods: {
    addQuestion: function() {
      this.$firebaseRefs.questions.push(this.newQuestion);
      this.newQuestion.question = "";
      this.newQuestion.alternatives = "";
    }
  }
};
</script>
<style scoped>

</style>
