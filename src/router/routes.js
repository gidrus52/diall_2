const pages = require('../constants/pages')
const layouts = require('../constants/layouts')

export const routes = [
    {
        path: '/login',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/auth/Login.vue'),
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/',
        name: pages.PAGE_NAME_DASHBOARDS,
        component: () => import(/* webpackChunkName: "about" */ '../views/dashboards/Dashboards'),
        meta: {
            requiresAuth: true,
            layout: layouts.LAYOUT_DASHBOARDS
        }
    },
    {
        path: '/logout',
        name: pages.PAGE_NAME_LOGOUT,
        component: () => import(/* webpackChunkName: "about" */ '../views/auth/Logout.vue'),
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/display',
        name: pages.PAGE_NAME_TASKS,
        component: () => import(/* webpackChunkName: "about" */ '../views/dashboards/Display'),
        meta: {
            requiresAuth: true,
            layout: layouts.LAYOUT_DASHBOARDS
        }
    }
]