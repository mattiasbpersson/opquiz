<template>
  <div id="app">
    <v-dialog v-model="dialog" max-width="500px">
      <v-btn v-show="user" color="primary" dark slot="activator" class="mb-2">New Question</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-form id="form" ref="addQuestionForm" lazy-validation>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Question" :rules="valueRules" v-model="editedItem.question" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4 v-for="(alternativeLabel,index) in alternativeLabels" :key="alternativeLabel.name">
                  <v-text-field value=index :label=alternativeLabel.name :rules="valueRules" v-model="editedItem.alternatives[index]" required></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click.native="close">Cancel</v-btn>
          <v-btn flat @click.native="save" :disabled="!valid">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-data-table :headers="headers" :items="questions" hide-actions class="elevation-1">
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.question }}</td>
        <td class="text-xs-left" v-for="alternative in props.item.alternatives" :key="alternative">{{ alternative }}</td>
        <td class="text-xs-left">{{ alternativeLabels[props.item.answer].name }}</td>
        <td class="justify-center layout px-0">
          <v-btn v-show="user" icon class="mx-0" @click="editItem(props.item)">
            <v-icon color="teal">edit</v-icon>
          </v-btn>
          <v-btn v-show="user" icon class="mx-0" @click="deleteItem(props.item)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </template>
      <template slot="no-data">
        <v-alert :value="true" color="error" icon="warning">
          No questions found
        </v-alert>
      </template>
    </v-data-table>
  </div>
</template>I

<script>
import { db } from '@/firebase'
import firebase from 'firebase'

export default {
  name: 'Questions',
  firebase: {
    questions: db.ref('questions')
  },
  data() {
    return {
      user: firebase.auth().currentUser,
      valid: true,
      valueRules: [v => !!v || 'Value is required'],
      dialog: false,
      alternativeLabels: [
        { name: 'Alternative 1', value: 0 },
        { name: 'Alternative 2', value: 1 },
        { name: 'Alternative 3', value: 2 },
        { name: 'Alternative 4', value: 3 }
      ],
      headers: [
        { text: 'Question', value: 'question' },
        { text: 'Alternative 1', value: 'alternative1' },
        { text: 'Alternative 2', value: 'alternative2' },
        { text: 'Alternative 3', value: 'alternative3' },
        { text: 'Alternative 4', value: 'alternative4' },
        { text: 'Answer', value: 'answer' }
      ],
      editedKey: '',
      editedItem: {
        question: '',
        alternatives: ['', '', '', ''],
        answer: -1
      },
      defaultItem: {
        question: '',
        alternatives: ['', '', '', ''],
        answer: -1
      }
    }
  },
  methods: {
    editItem(question) {
      this.editedKey = question['.key']
      console.log('EditItem: ' + this.editedKey)
      this.editedItem = Object.assign({}, question)
      this.dialog = true
    },
    deleteItem(question) {
      confirm('Are you sure you want to delete this item?') &&
        this.$firebaseRefs.questions.child(question['.key']).remove()
    },
    close() {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        console.log(this.editedItem)
        this.editedKey = -1
      }, 300)
    },
    save() {
      console.log('Save: ' + this.editedKey)
      if (this.$refs.addQuestionForm.validate()) {
        delete this.editedItem['.key']
        if (this.editedKey !== '') {
          this.$firebaseRefs.questions
            .child(this.editedKey)
            .set(this.editedItem)
        } else {
          this.$firebaseRefs.questions.push(this.editedItem)
        }
        this.close()
      }
    }
  },
  computed: {
    formTitle() {
      return this.editedKey === '' ? 'New Item' : 'Edit Item'
    }
  }
}
</script>
<style scoped>
[v-cloak] {
  display: none;
}
</style>
