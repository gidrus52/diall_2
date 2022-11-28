<template>
    <div>
        <v-card class="mt-2 pa-2">
            <v-container class="text-body-2" style="max-width: 600px;">
                <v-timeline
                        dense
                        clipped
                >
                    <v-timeline-item
                            fill-dot
                            class="white--text mb-12"
                            color="orange"
                            large
                    >
                        <template v-slot:icon>
                            <span>{{currentUserNoCognitoComputed.name}}</span>
                        </template>
                        <v-text-field
                                v-model="input"
                                hide-details
                                flat
                                label="Оставить комментарий..."
                                solo
                                @keydown.enter="createComment"
                        >
                            <template v-slot:append>
                                <v-btn
                                        class="mx-0"
                                        depressed
                                        @click="createCommentMethod"
                                >
                                    Отправить
                                </v-btn>
                            </template>
                        </v-text-field>
                    </v-timeline-item>
                    <v-timeline-item v-if="" v-for="comment in comments"
                                     @click="dataItem(comment)"
                                     class="mb-4"
                                     color="green"
                                     icon-color="grey lighten-2"
                                     small
                    >
                        <v-row justify="space-between">
                            <v-col cols="7">
                                {{comment.text}}
                            </v-col>
                            <v-col
                                    class="text-right"
                                    cols="5"
                            >
                                {{comment.createdAt}}
                            </v-col>
                        </v-row>
                    </v-timeline-item>

                    <v-slide-x-transition
                            group
                    >

                    </v-slide-x-transition>


                </v-timeline>
            </v-container>
        </v-card>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import {eventBus} from "../../../../../../main";

    export default {
        name: "CommentsWindow",
        data: () => {
            return {
                input: null,
                events: [],
                nonce: 0,
                user: undefined,
                task: undefined,
                taskLoad: false,
                comments: []

            }
        },
        computed: {
            ...mapGetters(['is_current_user', 'currentUserNoCognito', 'currentTaskGetter']),
            timeline() {
                return this.events.slice().reverse()
            },
            currentUserNoCognitoComputed() {
                this.user = this.currentUserNoCognito
                let name = ''
                if (this.user != undefined) {
                    if (this.user.name) {
                        this.user.name.split(' ').forEach(item => {
                            name += item[0] + '.'
                        })
                    }
                }
                return {
                    getter: this.currentUserNoCognito,
                    name: name
                }
            },
            currentTaskComputed() {
                return this.currentTaskGetter
            }
        },
        methods: {
            ...mapActions(['getTask', 'getUserNoCognito', 'createComment']),
            async createCommentMethod() {
                if (this.input != '') {
                    await this.createComment({
                        text: this.input,
                        taskID: this.task.id,
                        userID: this.is_current_user.username
                    })
                    this.input = null
                    this.getTask(this.task.id)
                }
            },
            dataItem: data => console.log(data)

        },
        watch: {
            currentUserNoCognitoComputed() {
            },
            currentTaskComputed(e) {
                this.comments.splice(0, this.comments.length)
                this.task = e
                if (this.task != undefined) {
                    e.comment.items.forEach(item => {
                        this.comments.push(item)
                    })
                    this.taskLoad = true
                }
            }
        },
        async mounted() {
            this.getUserNoCognito({id: await this.is_current_user.username})
            // this.getTask(this.task.id)

        },
        created() {
            eventBus.$on('setToNullComments', () => {

                this.comments = []
            })
            eventBus.$on('commentWindowData', (data) => {

                this.task = data
                this.getTask(data.id)
            })
        }
    }
</script>

<style scoped>

</style>