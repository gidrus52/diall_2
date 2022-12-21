<template>

    <v-col class="d-flex flex-row  justify-start" cols="3">
        <v-card
                height="660"
                width="450"
                class="ml-0 mr-2"
                color="grey"
                style="background-color: rgba(66,185,131,0.25)"
        >
            <v-system-bar
                    color="white"
                    dark
                    height="45"
            >
                <v-toolbar-title class="text-black">{{projectItem.name}}</v-toolbar-title>
                <v-spacer></v-spacer>

                <v-icon large>mdi-menu</v-icon>
            </v-system-bar>

            <v-container>
                <v-row>
                    <v-col cols="12">
                        <TaskCard :tasks="taskItem"></TaskCard>
                    </v-col>
                </v-row>
            </v-container>

            <v-container>
                <v-row dense>
                    <v-col cols="12">
                        <Button :element="projectItem" :buttonName="'Создать задание'"/>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-col>


</template>

<script>
    import Button from '@/components/domHelpers/button/SimpleButttonWithIcon'
    import {mapActions, mapGetters} from 'vuex'
    import * as graphQlQueries from '../../../../../graphql/queries'
    import {API} from 'aws-amplify'
    import TaskCard from './TaskCard'

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
        }

    }
</script>

<style scoped>

</style>