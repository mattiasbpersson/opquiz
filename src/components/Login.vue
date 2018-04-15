<template>
    <v-flex xs12 sm6 offset-sm3>
        <v-card>
            <v-card-title>
                <span class="headline">Sign In</span>
            </v-card-title>
            <v-card-text>
                <v-form id="form" ref="loginForm" lazy-validation>
                    <v-text-field label="Email" :rules="emailRules" v-model="email" required></v-text-field>
                    <v-text-field label="Password" :rules="passwordRules" hint="At least 5 characters" counter=100 v-model="password" required :append-icon="hidePassword ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (hidePassword = !hidePassword)" :type="hidePassword ? 'password' : 'text'"></v-text-field>
                    <v-btn @click.native="login" :disabled="!valid">Login</v-btn>
                </v-form>
                <p>You don't have an account ? You can
                    <router-link to="/register">register</router-link>
                </p>
            </v-card-text>
        </v-card>
    </v-flex>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data: function () {
    return {
      valid: true,
      hidePassword: true,
      email: '',
      password: '',
      passwordRules: [
        v =>
          (!!v && v.length >= 5 && v.length <= 100) ||
          'Password between 5-100 characters'
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
    login: function () {
      if (this.$refs.loginForm.validate()) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(
            user => {
              this.$router.replace('questions')
            },
            err => {
              alert('Oops. ' + err.message)
            }
          )
      }
    }
  }
}
</script>

<style scoped>
/* "scoped" attribute limit the CSS to this component only */
</style>
