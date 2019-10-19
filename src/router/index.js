import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/Introduction',
      name: 'Introduction',
      component: () => import('../components/Introduction')
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: () => import('../components/teacher')
    },
    {
      path: '/talent',
      name: 'talent',
      component: () => import('../components/talent')
    },
    {
      path: '/study',
      name: 'study',
      component: () => import('../components/study')
    },
    {
      path: '/student',
      name: 'student',
      component: () => import('../components/student')
    },
    {
      path: '/thought',
      name: 'thought',
      component: () => import('../components/thought')
    },
    {
      path: '/with',
      name: 'with',
      component: () => import('../components/with')
    },
    {
      path: '/alumni',
      name: 'alumni',
      component: () => import('../components/alumni')
    },
    {
      path: '*',
      redirect (to) {
        if (to.path === '/') {
          return '/home'
        }else{
          return '/Error'
        }
      }
    }
  ]
})
