<template>
    <v-app-bar
            app
            color="#6A76AB"
            dark
            shrink-on-scroll
            height="125"
            src="https://picsum.photos/1920/1080?random"
            fade-img-on-scroll
            scroll-target="#scrolling-techniques-3"
            class=""
    >
        <template v-slot:img="{ props }">
            <v-img
                    v-bind="props"
                    gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
            ></v-img>
        </template>

        <v-container class="flex d-flex flex-row align-center justify-center">
            <v-row class="flex d-flex flex-row align-center justify-space-between">
                <v-col class="col-xl-2 text-black">
                    Проект .....
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


        <template v-slot:extension>
            <v-tabs align-with-title
                    v-model="currentTabNumber"
            >
                <v-tab v-for="(item,index) in displayItems" :key="index" class="border">

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

    </v-app-bar>
</template>

<script>
    import basic_name from '../../../../constants/basic_name'
    import {eventBus} from "../../../../main";
    import {mapActions, mapGetters} from 'vuex'
    import createDialog from '../../Dialog/Simple/Create'

    export default {
        name: "Head",
        components: {createDialog},
        data() {
            return {
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
                displayItems: []
            }
        },
        computed: {
            ...mapGetters(['displayList']),
            select_icon() {
                return 'success'
            },
            dialog_name() {
                return basic_name
            },
            displays() {
                this.displayItems
                console.log('this.displayItems')
                console.log(this.displayItems)
                this.displayItems = this.displayList
            }

        },
        methods: {
            ...mapActions(['dialogStart', 'listDisplay']),
            addTable() {
                console.log('bla')
                eventBus.$emit('dialogStart')
            },
            sweetfdf() {
                this.$swal('Hello Vue world!!!')
            }
        },
        watch: {
            displays() {

            }
        },
        mounted() {
            this.listDisplay()
        },
        created() {
            eventBus.$on('success_create_display', () => {
                console.log('success_create_display from taskbody')
                this.listDisplay()
            })
        }

    }
</script>

<style scoped>

</style>