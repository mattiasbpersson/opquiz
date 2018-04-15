<template>
    <v-flex xs12 sm6 offset-sm3>
        <v-card>
            <v-card-title>
                <span class="headline">Register</span>
            </v-card-title>
            <v-card-text>
                <v-form id="form" ref="registerForm" lazy-validation>
                    <v-text-field label="Username" :rules="userRules" hint="At least 5 characters" counter=25 v-model="username" required></v-text-field>
                    <v-text-field label="Email" :rules="emailRules" v-model="email" required></v-text-field>
                    <v-text-field label="Password" :rules="passwordRules" hint="At least 6 characters" counter=100 v-model="password" required :append-icon="hidePassword ? 'visibility_off' : 'visibility'" :append-icon-cb="() => (hidePassword = !hidePassword)" :type="hidePassword ? 'password' : 'text'"></v-text-field>
                    <v-btn @click.native="register" :disabled="!valid">Register</v-btn>
                </v-form>
                <p>You already have an account ? You can
                    <router-link to="/login">login</router-link>
                </p>
            </v-card-text>
        </v-card>
    </v-flex>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'register',
  data: function() {
    return {
      valid: true,
      hidePassword: true,
      username: '',
      email: '',
      password: '',
      userRules: [
        v =>
          (!!v && v.length >= 5 && v.length <= 25) ||
          'Username between 5-25 characters'
      ],
      passwordRules: [
        v =>
          (!!v && v.length >= 6 && v.length <= 100) ||
          'Password between 6-100 characters'
      ],
      emailRules: [
        v => {
          return !!v || 'E-mail is required'
        },
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          'E-mail must be valid'
      ]
    }
  },
  methods: {
    register: function() {
      if (this.$refs.registerForm.validate()) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(
            user => {
              this.setDisplayName(user)
            },
            err => {
              alert('Oops. ' + err.message)
            }
          )
      }
    },
    setDisplayName: function(user) {
      user
        .updateProfile({
          displayName: this.username
        })
        .then(user => {
          this.$router.replace('questions')
        })
        .catch(function(err) {
          alert('Oops. ' + err.message)
        })
    }
  }
}
</script>

<style scoped>
/* "scoped" attribute limit the CSS to this component only */
</style>
