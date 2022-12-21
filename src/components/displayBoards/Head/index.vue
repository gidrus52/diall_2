<template>
    <v-app-bar
            scroll-target="#scrolling-techniques-3"
            color="#6A76AB"
            height="15"
            app
            dark
            shrink-on-scroll
            class=""
    >
        <v-toolbar-title class="ml-6"> {{displayName}}

        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-container class="flex d-flex justify-end align-end" v-if="!right_menu_state">
            <v-btn @click="right_menu_switcher" outlined icon>
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
        </v-container>
        <template v-slot:extension>

            <v-tabs align-with-title
                    v-model="currentTabNumber"

            >
                <v-tab style="width: 250px;" @click="tabEvent(item)" v-for="(item,index) in displayItems" :key="index"
                       class="border">

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
            ...mapGetters(['displayList', 'right_menu', 'currentDisplayItem', 'chatListGetter', 'is_current_users_attributes']),
            user() {
                return this.is_current_users_attributes
            },
            display() {
                return this.currentDisplayItem
            },
            displays() {
                this.displayItems = this.displayList
            },
            chat() {
                return this.chatListGetter
            },
            right_menu_state() {
                return this.right_menu
            },
        },
        methods: {
            ...mapActions(['dialogStart', 'listDisplay', 'right_menu_action', 'currentDisplay', 'listProject', 'zeroAction', 'ListTaskForChat']),
            addTable() {
                eventBus.$emit('dialogStart', {name: 'Создать дисплей'})
            },
            right_menu_switcher() {
                this.right_menu_action(true)
            },
            async tabEvent(el) {
                await this.zeroAction('project')
                await this.currentDisplay(el)
                await this.ListTaskForChat(el)
            }
        },
        watch: {
            displays() {
            }, chat() {
            },
            display(e) {
                if (e) {
                    this.displayName = e.name
                    this.displayItem = e
                    this.ListTaskForChat(e)
                }

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
                console.log(this.displayItem)
                this.listProject(this.displayItem)

            })
            eventBus.$on('success_create_task', () => {
                this.zeroAction('project')
                this.ListTaskForChat(this.displayItem)
            })
        }
    }
</script>

<style lang="scss">


</style>