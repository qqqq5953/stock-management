import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'portfolio',
        name: 'Portfolio',
        component: () => import('../views/PortfolioView.vue')
      },
      {
        path: 'holdings',
        name: 'Holdings',
        component: () => import('../views/HoldingsView.vue')
      },
      {
        path: 'history',
        name: 'History',
        component: () => import('../views/HistoryView.vue')
      },
      {
        path: 'watchlist',
        name: 'Watchlist',
        component: () => import('../views/WatchlistView.vue')
      },
      {
        path: 'add',
        name: 'Add',
        component: () => import('../views/AddView.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/admin/dashboard'
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
