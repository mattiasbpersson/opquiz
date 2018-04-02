import Vue from 'vue'
import Router from 'vue-router'
import Questions from '@/components/Questions'
import AddQuestion from '@/components/AddQuestion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Questions',
      component: Questions
    },
    {
      path: '/AddQuestion',
      name: 'AddQuestion',
      component: AddQuestion
    }
  ]
})
