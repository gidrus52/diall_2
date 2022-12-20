import {eventBus} from "../main";

export default {
    state: {
        dialog: false,
        overlay: false,
        timeout: 600
    },
    getters: {},
    mutations: {},
    actions: {
        create_event(state,data){
            if(data.event=='success_create_display'){
                console.log('event of create was done')
                eventBus.$emit('success_create_display', {
                })
            }
            if(data.event=='success_create_project'){
                console.log('event of create was done')
                eventBus.$emit('success_create_project')
            }
        },

    }
}