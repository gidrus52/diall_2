<template>
    <v-app-bar
            scroll-target="#scrolling-techniques-3"
            color="#6A76AB"
            height="125"
            app
            dark
            shrink-on-scroll
            class=""
    >
        <v-container class="flex d-flex flex-row align-center justify-center">
            <v-row class="flex d-flex flex-row align-center justify-space-between">
                <v-col class="col-xl-2 text-black">
                    {{displayName}}
                </v-col>

                <v-col class="col-xl-1">
                    <v-icon color="grey">mdi-menu</v-icon>
                </v-col>
                <v-col class="flex d-flex justify-start">
                    <v-badge
                            bordered
                            bottom
                            left
                            color="green"
                            dot
                            offset-x="10"
                            offset-y="10"
                    >
                        <v-avatar size="35">
                            <img
                                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                                    alt="John"
                            >
                        </v-avatar>
                    </v-badge>
                    <v-btn class="ml-1" dark icon outlined color="#bbbbbb" height="35" width="35">
                        <v-icon dark color="#bbbbbb">mdi-plus</v-icon>
                    </v-btn>
                    <v-divider class="ml-4" style="width: 9px !important; background-color: grey !important;"
                               vertical></v-divider>
                </v-col>
                <v-col class="col-xl-5 flex d-flex flex-row justify-end align-end">
                    <v-container class="flex d-flex flex-row justify-center align-center">
                        <v-text-field
                                hide-details
                                prepend-icon="mdi-magnify"
                                single-line
                        ></v-text-field>
                        <v-btn icon>
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </v-container>
                </v-col>

            </v-row>
        </v-container>


        <v-spacer/>
        <v-col class="flex d-flex justify-end align-end" v-if="!right_menu_state">
            <v-btn @click="right_menu_switcher" outlined icon>
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
        </v-col>

        <template v-slot:extension>
            <v-tabs align-with-title
                    v-model="currentTabNumber"
            >
                <v-tab @click="tabEvent(item)" v-for="(item,index) in displayItems" :key="index" class="border">

                    <span>{{item.name}}</span>
                    <template>
                        <v-btn icon>

                            <v-icon>
                                mdi-menu
                            </v-icon>
                        </v-btn>
                    </template>
                </v-tab>

                <v-tooltip bottom style="z-index: 99999 !important;">
                    <template v-slot:activator="{ }">

                        <v-btn
                                @click="addTable()"
                                icon>
                            <v-icon>
                                mdi-plus
                            </v-icon>
                        </v-btn>
                    </template>
                    <span>Добавить окно</span>
                </v-tooltip>
            </v-tabs>
        </template>
        <createDialog/>
    </v-app-bar>
</template>

<script>
    import basic_name from '../../../constants/basic_name'
    import {eventBus} from "../../../main";
    import {mapActions, mapGetters} from 'vuex'
    import createDialog from '../../domHelpers/dialog/simple/Create'

    export default {
        name: "Head",
        components: {createDialog},
        data() {
            return {
                displayName: '',
                displayItem: {},
                displayItems: [],

                visual: false,
                drawer: null,
                items: [
                    {title: 'Home', icon: 'mdi-view-dashboard'},
                    {title: 'About', icon: 'mdi-forum'},
                ],
                currentTabNumber: 0,
                currentTabName: '',
                tabItems: [
                    {name: 'default'},
                    {name: 'default'},
                ],
            }
        },
        computed: {
            ...mapGetters(['displayList', 'right_menu', 'currentDisplayItem','chatListGetter']),
            select_icon() {
                return 'success'
            },
            dialog_name() {
                return basic_name
            },
            displays() {
                this.displayItems = this.displayList
            },
            display() {
                return this.currentDisplayItem
            },
            chat(){
                return this.chatListGetter
            },
            right_menu_state() {
                return this.right_menu
            }

        },
        methods: {
            ...mapActions(['dialogStart', 'listDisplay', 'right_menu_action', 'currentDisplay', 'listProject', 'zeroAction','ListTaskForChat']),
            addTable() {
                eventBus.$emit('dialogStart', {name: 'Создать доску'})
            },
            right_menu_switcher() {
                this.right_menu_action(true)
            },
            async tabEvent(el) {
                console.log(el)
                // // console.log('find bug 1')
                await this.zeroAction('project')
                this.currentDisplay(el)
                this.ListTaskForChat(el)
            }
        },
        watch: {
            displays() {
            },
            chat(e) {
                console.log('chat')
                console.log(e)
            },
            display(e) {
                this.displayName = e.name
                this.displayItem = e
                this.ListTaskForChat(e)
            },
            right_menu_state() {
            }
        },
        mounted() {
            this.listDisplay()
        },
        created() {
            eventBus.$on('success_create_display', () => {
                this.listDisplay()
            })
            eventBus.$on('success_create_project', () => {
                this.listProject(this.displayItem)
            })
        }
    }
</script>

<style lang="scss">


</style>