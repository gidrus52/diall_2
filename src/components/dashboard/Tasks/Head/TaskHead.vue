<template>
    <div class="align-center ma-6 ">
        <v-row class="align-center d-flex flex flex-row" >
            <v-col class="text-h5  ma-8 pa-xl-13 d-flex flex align-start">
                Список задач
            </v-col>
            <v-col align-self="center" class="">

                <v-col class="d-flex flex flex-row justify-end">
                    <v-btn
                            height="70" width="400"
                            class="primary"
                            color="purple darken-2"
                            @click="createTaskEvent('task')"
                    >
                        Создать Задачу
                    </v-btn>
                </v-col>

            </v-col>
        </v-row>
        <createDialogTask :createTaskProps="createTaskProps"></createDialogTask>
    </div>
</template>

<script>
    import createDialogTask from './Dialog/CreateDialogTask'
    import {mapActions} from 'vuex'
    import {eventBus} from "../../../../main";
    export default {
        name: "Head",
        data:()=>{
            return {
                createTaskProps: false
            }
        },
        components:{
            createDialogTask
        },
        methods:{
            ...mapActions(['dialog_start']),
            createTaskEvent(data){
                this.dialog_start({event: data})
            }
        },
        created() {
            eventBus.$on('dialog_task_start', (data)=>{
                this.createTaskProps = data.dialog
            }),
            eventBus.$on('dialog_end', (data)=>{
                this.createTaskProps = data.dialog
            })
        }
    }
</script>

<style scoped>

</style>