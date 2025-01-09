import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('layouts/MemberLayout.vue'),
        children: [
          {
            path: 'all',
            component: () => import('components/AllMember.vue'),
          },
          {
            path: 'serch',
            component: () => import('components/SerchMember.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
