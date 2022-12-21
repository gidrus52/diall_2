<template>
    <v-navigation-drawer
            :mini-variant.sync="mini"
            mini-variant-width="80"
            v-model="drawer"
            dark
            left
            app
            permanent
    >
        <v-list-item style="height: 75px">
            <v-list-item-avatar>
                <v-img width="150" src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>Сергей </v-list-item-title>
            </v-list-item-content>
            <mdiRoundButton
                    :name-icon="'mdi-pencil'" :property-data="propertyData"/>
            <v-btn v-if="!mini" icon
                   @click.stop="mini = !mini">
                <v-icon>mdi-cancel</v-icon>
            </v-btn>
        </v-list-item>

        <v-divider></v-divider>
        <v-list>

                <template >
                    <v-list-item
                            v-for="item in navigationItems"
                            :key="item.title"
                            link
                            :to="item.path"
                    >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>

        </v-list>
        <template v-slot:append>
            <v-divider></v-divider>
            <v-list class="d-flex flex flex-column align-center justify-center">
                <v-list-item
                        link
                >
                    <v-list-item-icon class=" ">
                        <v-icon size="36">mdi-information</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title class="d-flex flex justify-start">
                            Лента событий
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item
                        link
                >
                    <v-list-item-icon class=" ">
                        <v-icon size="36">mdi-paperclip</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title class="d-flex flex justify-start">
                            Тех поддержка
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </template>

    </v-navigation-drawer>
</template>

<script>
    import mdiRoundButton from '../../domHelpers/button/mdiRoundButton'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "DashboardDriveComponentLeft",
        data: () => ({
            drawer: true,
            mini: true,
            propertyData: {
                event: 'leftMenu'
            },
            navigationItems: [
                {title: 'Главная страница', icon: 'mdi-checkbox-blank-outline', path: '/'},
                {title: 'Проекты', icon: 'mdi-view-dashboard', path: 'display'},
            ],
            right: null,
        }),
        components: {
            mdiRoundButton
        },
        computed: {
            ...mapGetters(['is_current_user']),
            user() {
                return this.is_current_user
            }
        },
        methods:{
          ...mapActions(['getUser'])
        },
        mounted() {
            console.log(this.is_current_user)
        },
        created() {

        }
    }
</script>

<style scoped>

</style>