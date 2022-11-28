import Vue from 'vue'
import VueRouter from 'vue-router'
import {AmplifyEventBus} from 'aws-amplify-vue';
import {routes} from './routes'
import {Auth} from 'aws-amplify'
import store from '../store/index'

const pages = require('../constants/pages')

AmplifyEventBus.$on('authState', async (event) => {
    event === 'signedIn' ? router.push({name: pages.PAGE_NAME_DASHBOARDS}) : () => ''

})
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach(async (to, from, next) => {
    if (to.meta.requiresAuth) {
        if (store.getters['is_current_user']!=null) {
            next()
        } else {
            await Auth.currentUserPoolUser().then(data => {
                store.dispatch('set_current_user', data)
                store.dispatch('setAdmin', data)
                next()
            }).catch(err => {
                console.log(err)
                router.push({name: 'Login'})
            })
        }
    }
    if ((to.name === pages.PAGE_NAME_LOGIN || to.name === pages.PAGE_NAME_LOGOUT) && from.meta.requiresAuth) {
        store.dispatch('sign_out')
        next()
    }
     else {
        next()
    }

})

export default router
