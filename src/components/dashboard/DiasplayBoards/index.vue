<template>
    <div>
        <v-app-bar
                app
                color="#6A76AB"
                dark
                shrink-on-scroll
                height="125"
                src="https://picsum.photos/1920/1080?random"
                fade-img-on-scroll
                scroll-target="#scrolling-techniques-3"
        >
            <template v-slot:img="{ props }">
                <v-img
                        v-bind="props"
                        gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
                ></v-img>
            </template>


            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
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
        <v-sheet
                id="scrolling-techniques-3"
                class="overflow-hidden"

        >
            <div style="height: 100vh; background-color: blueviolet">
                {{displays}}
                <createDialog :inputString="dialog_name.create_dialog_table.input_label"
                              :titleString="dialog_name.create_dialog_table.title"/>
            </div>
        </v-sheet>
    </div>
</template>

<script>

    import basic_name from '../../../constants/basic_name'
    import {eventBus} from '../../../main'
    import {mapActions, mapGetters} from 'vuex'
    import createDialog from '../Dialog/Simple/Create'

    export default {
        name: "TaskBody",
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