import Vue from 'vue'
import Router from 'vue-router'
import Questions from '@/components/Questions'
import AddQuestion from '@/components/AddQuestion'

Vue.use(Router)

export default new Router({
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
      path: '/add-question',
      name: 'AddQuestion',
      component: AddQuestion
    }
  ]
})
