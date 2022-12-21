<template>
    <v-container fluid class="">
        <v-row>
            <v-col cols="1" class="flex d-flex flex-column align-start justify-start">
                <Button v-for="item in buttonsName" :buttonName="item"/>
            </v-col>
        </v-row>
        <v-row class="d-flex flex  flex-row align-start justify-start ">
                <Card v-for="item in projectItem" :projectItem="item" class=""/>
        </v-row>
    </v-container>
</template>

<script>
    import Card from './bottomComponents/ProjectCard'
    import Button from '../../../domHelpers/button/SimpleButttonWithIcon'
    import {mapActions, mapGetters} from 'vuex'
    import {eventBus} from "../../../../main";
    import store from '@/store/index'

    export default {
        name: "Bottom",
        data: () => ({
            displayItem: undefined,
            projectItem: [],
            buttonsName: [
                'Добавить проект',
            ]
        }),
        components: {
            Card, Button
        },
        computed: {
            ...mapGetters(['currentDisplayItem', 'listCurrentProject']),
            display() {
                return this.currentDisplayItem
            },
            project() {
                return this.listCurrentProject
            }
        },
        methods: {
            ...mapActions(['listProject'])
        },
        watch: {
            display(e) {
                console.log('display')
                console.log(e)
                this.displayItem = e
                if (e) {
                    this.listProject(e)
                }
            },
            project(e) {
                this.projectItem = e
            }
        },
        mounted() {
            // this.listProject()
            console.log(store)
        },
        created() {
            eventBus.$on('taskRestore', () => {
                this.projectItem = []
                // store.state.user_action.projectList = []
                this.listProject(this.displayItem)

            }),
                eventBus.$on('success_create_task', () => {
                    this.projectItem = []
                    // store.state.user_action.projectList = []
                    this.listProject(this.displayItem)

                })
        }
    }
</script>

<style scoped>

</style>