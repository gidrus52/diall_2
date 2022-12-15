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
        },
        // dialog_start(state,data) {
        //     if(data.event=='task'){
        //         eventBus.$emit('dialog_task_start', {
        //             dialog: true
        //         })
        //     }
        //     if(data.event=='create_dialog_category'){
        //         eventBus.$emit('create_dialog_category', {
        //             dialog: true
        //         })
        //     }
        //     if(data.event=='update_dialog_category'){
        //         console.log('FromEvents')
        //         console.log(data.data)
        //         eventBus.$emit('update_dialog_category', {
        //             dialog: true, data: {...data.data}
        //         })
        //     }
        //     else{
        //        setTimeout(() => {
        //         eventBus.$emit('dialog_user_start', {
        //             loadingBar: false,
        //             dialog: true
        //         })
        //     }, 600)
        //     }
        // },
        // dialog_end({dispatch}) {
        //     console.log('end dialog')
        //     eventBus.$emit('dialog_end', {
        //         dialog: false,
        //         overlayDialog: false
        //     })
        // },
        // create_event_save() {
        //     eventBus.$emit('overlayOn', {
        //         overlayDialog: true
        //     })
        // },
        // create_allert({dispatch},data) {
        //     console.log(data)
        //     eventBus.$emit('eventAllert', {
        //         eventAllert: data.name,
        //         eventMessage: data.msg,
        //         eventType: data.type,
        //     })
        // },
        // listTaskEvent({dispatch}){
        //     eventBus.$emit('taskEvent')
        // }
    }
}