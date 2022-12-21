<template>
    <v-navigation-drawer
            v-model="rightDrawer"
            right
            width="580"
            dark
            absolute
            app
    >
        <v-list-item style="height: 75px">
            <v-list-item-content>
                <v-list-item-title>Текущие чаты</v-list-item-title>
            </v-list-item-content>
            <mdiRoundButton :name-icon="'mdi-cancel'"
                            :property-data="propertyData"></mdiRoundButton>
        </v-list-item>

        <v-divider></v-divider>
        <v-card class="ma-4" height="820">
            <v-expansion-panels>
                <v-expansion-panel
                        v-for="(item,i) in chatItems"
                        :key="i"
                >
                    <v-expansion-panel-header>
                        {{item.title}}
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <ChatComponent :chatsName="item.title" ></ChatComponent>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>

        </v-card>

    </v-navigation-drawer>
</template>

<script>
    import mdiRoundButton from '../../domHelpers/button/mdiRoundButton'
    import ChatComponent from '../Left/components/MyChat'
    import {eventBus} from "../../../main"
    import {mapActions, mapGetters} from 'vuex'
    import {API} from "aws-amplify";
    import * as graphQlQueries from "../../../graphql/queries";

    export default {
        name: "DashboardDriveComponentRight",
        data: () => ({
            rightDrawer: false,
            propertyData: {
                event: 'rightMenu'
            },
            displayItem: {},
            displayId: '',
            progetcItem:[],
            taskItem: [],
            chatItems: []
        }),
        components: {
            mdiRoundButton, ChatComponent
        },
        computed: {
            ...mapGetters(['right_menu', 'currentDisplayItem', 'listTaskGetter','listCurrentProject','chatListGetter']),
            rigth_menu_state() {
                this.rightDrawer = this.right_menu
                return this.right_menu
            },
            display() {
                return this.currentDisplayItem
            },
            project(){
                return this.listCurrentProject
            },
            tasks() {
                return this.listTaskGetter
            },
            chat(){
                return this.chatListGetter
            }
        },
        methods: {
            ...mapActions(['right_menu_action', 'listProject','listTasks']),

        },
        watch: {
            rigth_menu_state(e) {
            },
            display(e) {
                this.displayId = e.id
            },
            async project(e){
                this.progetcItem = e
            },
            tasks(e) {
            },
            chat(e){
                this.chatItems = e
                console.log('chatchatchatchat')
                console.log(e)
            }
        },
        mounted() {

        },
        created() {
            eventBus.$on('switcher', () => {
                this.right_menu_action(false)
            })
        }
    }
</script>

<style scoped>

</style>