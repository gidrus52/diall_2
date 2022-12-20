<template>
    <v-container>
        <v-row class="d-flex  flex-row align-start justify-start pl-0">
            <Card v-for="item in projectItem" :projectItem="item" class="ml-0"/>
            <Button v-for="item in buttonsName" :buttonName="item"/>
        </v-row>
    </v-container>
</template>

<script>
    import Card from './bottomComponents/ProjectCard'
    import Button from '../../../../domHelpers/button/SimpleButttonWithIcon'
    import {mapActions, mapGetters} from 'vuex'
    import {eventBus} from "../../../../../main";
    import store from '@/store/index'

    export default {
        name: "Bottom",
        data: () => ({
            displayItem: undefined,
            projectItem: [],
            buttonsName: [
                'Создать колонку',
                'Создать сводку',
                'Создать зеркало',
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

            })
        }
    }
</script>

<style scoped>

</style>