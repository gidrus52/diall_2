<template>
    <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
    >
        <v-card class="ma-6">
            <v-toolbar
                    dark
                    color="primary"
            >
                <v-toolbar-title>Задача {{dataTask.title}}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn
                            dark
                            text
                            @click="closeDialog"
                    >
                        Закрыть
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-row class="display-1 d-flex flex-row justify-space-between">
                <v-col cols="4" class=" d-flex flex flex-column">
                    <v-card class="d-flex flex-row ma-2 mt-3" height="200" color="">
                        <v-img
                                width="250"
                                height="200"
                                src="https://r2.mt.ru/r29/photo554F/20686763621-0/jpeg/bp.jpeg"
                        ></v-img>
                        <v-container>
                            <div class="align-center text-left mt-5">
                                <p>Автор задачи</p>
                                <p class="text-h6 mb-0">{{dataTask.authorData?dataTask.authorData.name:'undf'}}</p>
                                <p class="text-h6">{{dataTask.authorData?dataTask.authorData.email:'undf'}}</p>
                            </div>
                        </v-container>
                    </v-card>
                    <v-card class="ma-2 text-center" height="500" color="">
                        <p class="mt-2 mb-0">{{dataTask.title}}</p>
                        <p class="text-subtitle-1 grey--text mt-2 mb-0">Название задачи</p>
                        <v-card-text class="mt-0 text-start">
                            <div class="grey--text text-h6">
                                Описание задачи:
                            </div>
                            <div>
                                {{dataTask.text}}
                            </div>

                        </v-card-text>
                    </v-card>
                    <v-card class="ma-2">
                        <v-card-text>
                            <div class="text-h6">
                                Создана:
                            </div>
                            <div>
                                {{prepareTime(dataTask.createdAt)}}
                            </div>
                        </v-card-text>

                    </v-card>
                </v-col>
                <v-col class="d-flex flex flex-row justify-space-between ma-0">
                    <v-col>
                        <v-card class="" color="" min-height="200">
                            <v-card-text>
                                <v-card-title>
                                    Исполнители:
                                </v-card-title>
                                <v-data-table
                                        :headers="headers"
                                        :items="dataTask.assignedData"
                                        :items-per-page="5"
                                        class="elevation-1"
                                ></v-data-table>
                                <v-divider></v-divider>

                            </v-card-text>
                        </v-card>
                        <CommentsWindow/>
                    </v-col>
                </v-col>
            </v-row>
        </v-card>
    </v-dialog>
</template>

<script>
    import {eventBus} from "../../../../../main";
    import CommentsWindow from "./Components/CommentsWindow";

    export default {
        name: "FullScreenDialog",
        components: {
            CommentsWindow
        },
        data: () => {
            return {
                dialog: false,
                dataTask: {},
                events: [],

                nonce: 0,
                headers: [
                    {
                        text: 'Исполнители',
                        align: 'start',
                        sortable: true,
                        value: 'name',
                    },
                    {
                        text: 'Должность',
                        sortable: true,
                        value: 'jobTitle',
                    },
                    {
                        text: 'Почта',
                        sortable: true,
                        value: 'email',
                    },

                ]
            }
        },
        computed: {},
        methods: {
            prepareTime(data) {
                if (data) {
                    return data.split('T')[0]
                }
            },
            closeDialog() {
                this.dialog = false
                eventBus.$emit('setToNullComments')
            }
        },
        created() {
            eventBus.$on('openFullscreenDialog', async (data) => {
                this.dialog = await data.dialog
                this.dataTask = await data.data
                await eventBus.$emit('commentWindowData', {
                    ...data.data
                })
            })

        }
    }
</script>

<style scoped>

</style>