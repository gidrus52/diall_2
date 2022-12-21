<template>
    <v-card
            min-height="700"
            width="450"
            class="ml-3 mr-6"
            color="grey"
    >
        <v-system-bar
                color="white"
                dark
                height="45"
        >
            <v-container class="d-flex flex justify-space-between">
                <v-toolbar-title class="text-black">{{projectItem.name}}</v-toolbar-title>
                <Button :element="projectItem" :buttonName="'Создать задание'"/>
            </v-container>
        </v-system-bar>
        <v-container>
            <TaskCard :tasks="taskItem"></TaskCard>
        </v-container>

    </v-card>
</template>

<script>
    import Button from '../../../../domHelpers/button/SimpleButttonWithIcon'
    import {mapActions, mapGetters} from 'vuex'
    import * as graphQlQueries from '../../../../../graphql/queries'
    import {API} from 'aws-amplify'
    import TaskCard from './TaskCard'
    import {eventBus} from "../../../../../main";

    export default {
        name: "ProjectCard",
        props: {
            projectItem: {
                type: Object,
                required: false,
                default: () => {
                }
            }
        },
        data: () =>
            ({
                taskItem: []
            }),
        components: {
            Button, TaskCard
        },
        computed: {
            ...mapGetters(['listTaskGetter']),
            tasks() {
                return this.listTaskGetter
            }
        },
        methods: {
            ...mapActions(['listTasks'])

        },
        watch: {
            async tasks(e) {
                console.log('this.taskItem = e')
                this.taskItem = e
            }
        },
        mounted() {
            let filter = {
                project: {
                    eq: this.projectItem.id
                }
            }
            API.graphql({query: graphQlQueries.listTasks, variables: {filter: filter}}).then(data => {
                this.taskItem = data.data.listTasks.items

            })
        },
        created() {
            eventBus.$on('success_create_task', (data) => {
                console.log('fssfds')
                this.listTasks()
            })
        }

    }
</script>

<style scoped>

</style>