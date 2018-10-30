import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/index')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/blog'),
      children: [
        {
          path: 'articleList',
          component: () => import('@/views/article-list')
        },
        {
          path: 'article',
          component: () => import('@/views/article')
        },
        {
          path: 'register',
          component: () => import('@/views/register')
        }
      ]
    },
    {
      path: '/editBlog',
      name: 'editBlog',
      component: () => import('@/views/edit-blog')
    },
  ]
})
