import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSimpleAlert from "vue-simple-alert"
import { createSimpleTransition } from 'vuetify/lib/components/transitions/createTransition'
const selectTransition = createSimpleTransition('my-transition')
//AWS
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'

import vuetify from './plugins/vuetify' // path to vuetify export
export const eventBus = new Vue()


Amplify.configure(awsconfig)
// Amplify.configure({
//     API: {
//         graphql_endpoint: 'https://44g43ofsofe7jgsq3its7oql4i.appsync-api.us-east-1.amazonaws.com/graphql',
//         graphql_headers: async () => ({
//             'x-api-key': 'da2-33kk5qxf5fgddgyyqxdn2fs3xe',
//         })
//     }
// })


Vue.config.productionTip = false
Vue.use(VueSimpleAlert, {reverseButtons: true});
Vue.component('select-transition', selectTransition)

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')


