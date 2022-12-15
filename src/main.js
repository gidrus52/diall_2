export const eventBus = new Vue()
import Vue from 'vue'
import App from './App.vue'
import selectTargetEl from './directives/selectTargetEl'
import router from './router'
import store from './store'
import SweetAlertIcons from 'vue-sweetalert-icons';
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import vuetify from './plugins/vuetify' // path to vuetify export
import { createSimpleTransition } from 'vuetify/lib/components/transitions/createTransition'
const myTransition = createSimpleTransition('my-transition')

import myStyle from '@/scss/index.scss'

Amplify.configure(awsconfig)
Vue.config.productionTip = false
Vue.use(myStyle)
Vue.use(SweetAlertIcons)
Vue.component('my-transition', myTransition)
Vue.directive('selectTargetEl',selectTargetEl)


new Vue({
    myStyle,
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')


Vue.directive('targetEl', {
    bind(el,binding,vnode){
        console.log(el)
        console.log(binding)
        console.log(vnode)
    }
})