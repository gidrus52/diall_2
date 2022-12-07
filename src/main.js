import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSimpleAlert from "vue-simple-alert"
import { createSimpleTransition } from 'vuetify/lib/components/transitions/createTransition'
const selectTransition = createSimpleTransition('my-transition')
import Particles from "vue2-particles"
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'

import vuetify from './plugins/vuetify' // path to vuetify export
export const eventBus = new Vue()

Amplify.configure(awsconfig)

Vue.config.productionTip = false
Vue.use(VueSimpleAlert, {reverseButtons: true})
Vue.component('select-transition', selectTransition)
Vue.use(Particles)



new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')


