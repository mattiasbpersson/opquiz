import Vue from 'vue'
import Router from 'vue-router'
import Questions from '@/components/Questions'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Question from '@/components/Question'
import Game from '@/components/Game'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Questions',
      component: Questions
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/questions/:questionKey',
      name: 'Question',
      component: Question
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser

  if (currentUser != null) {
    currentUser.providerData.forEach(function(profile) {
      console.log('Sign-in provider: ' + profile.providerId)
      console.log('  Provider-specific UID: ' + profile.uid)
      console.log('  Name: ' + profile.displayName)
      console.log('  Email: ' + profile.email)
      console.log('  Photo URL: ' + profile.photoURL)
    })
  }

  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else next()
})

export default router
