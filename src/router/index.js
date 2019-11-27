import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [{
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
      component: () => import('../components/study/study')
    },
    {
      path: '/study/learning',
      name: 'learning',
      redirect: '/study/learning/inner',
      component: () => import('@/components/study/learning'),
      children: [
        {
          path: 'inner',
          name: 'inner',
          component: () => import('@/components/study/learn/inner')
        },
        {
          path: 'idea',
          name: 'idea',
          component: () => import('@/components/study/learn/idea')
        }
      ]
    },
    {
      path: '/study/education',
      name: 'education',
      redirect: '/study/education/ment',
      component: () => import('@/components/study/education'),
      children: [
        {
          path: 'mechanism',
          name: 'mechanism',
          component: () => import('@/components/study/edu/mechanism')
        },
        {
          path: 'ment',
          name: 'ment',
          component: () => import('@/components/study/edu/ment')
        },
        {
          path: 'sumup',
          name: 'sumup',
          component: () => import('@/components/study/edu/sumup')
        }
      ]
    },
    {
      path: '/study/yuchuang',
      name: 'yuchuang',
      redirect: '/study/yuchuang/training',
      component: () => import('@/components/study/yuchuang'),
      children: [
        {
          path: 'training',
          name: 'training',
          component: () => import('@/components/study/yuch/training')
        },
        {
          path: 'pioneer',
          name: 'pioneer',
          component: () => import('@/components/study/yuch/pioneer')
        },
      ]
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
      children: [{
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
      redirect(to) {
        if (to.path === '/') {
          return '/home'
        } else {
          return '/Error'
        }
      }
    }
  ]
})
