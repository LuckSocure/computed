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
      redirect: '/with/movie',
      component: () => import('../components/with/with'),
      children: [
        {
          path: 'movie',
          name: 'movie',
          component: () => import('@/components/with/movie')
        },
        {
          path: 'basics',
          name: 'basics',
          component: () => import('@/components/with/basics')
        },
        {
          path: 'network',
          name: 'network',
          component: () => import('@/components/with/network')
        },
        {
          path: 'soft',
          name: 'soft',
          component: () => import('@/components/with/soft')
        },
        {
          path: 'website',
          name: 'website',
          component: () => import('@/components/with/website')
        },
        {
          path: 'things',
          name: 'things',
          component: () => import('@/components/with/things')
        },
      ]
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
