<template>
    <v-app-bar app
               clipped-left
               clipped-right
               height="85"
    >
        <v-toolbar-title v-if=""
                         class="align-center d-flex logo-width"
                         :class="`${'showLogo' ? 'logo-width' : ''}`">
            <v-btn large text color="primary" to="/">
                На главную

            </v-btn>
        </v-toolbar-title>
        <v-spacer/>
        <v-menu max-width="400"
                :close-on-content-click="false"
                bottom
                left
                offset-y
                nudge-top="25"
                nudge-left="22"
                origin="top right"
                transition="scale-transition">
            <template v-slot:activator="{ on }">
                <v-btn dark icon v-on="on" class="mr-1">
                    <v-avatar
                            color="primary"
                            size="56"
                    ></v-avatar>
                </v-btn>
            </template>

            <v-list dense width="400" class="">
                <v-subheader>Навигация</v-subheader>
                <v-list-item>
                    <v-list-item-avatar color="primary">
                        <span class="white--text text-capitalize">userAbbreviation</span>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>getCurrentUserName</v-list-item-title>
                        <v-list-item-subtitle>Email : getCurrentUserEmail</v-list-item-subtitle>
                        <v-list-item-subtitle>Group : getCurrentUserGroup</v-list-item-subtitle>
                        <v-list-item-subtitle>
                            <v-switch class="ma-1"
                                      prepend-icon="mdi-theme-light-dark"
                                      v-model="$vuetify.theme.dark"
                                      inset hide-details dense
                            ></v-switch>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item-group
                        v-model="navigations.activeRoute"
                        color="primary"

                >
                    <v-list-item
                            class="ma-auto"
                            v-for="(item, i) in navigations.routes"
                            :key="i"
                            :to=item.name.toLowerCase()
                    >
                        <v-list-item-content
                                class="">
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script>
    import pages from '../../constants/pages'
    import {eventBus} from "../../main"
    import Swal from "sweetalert2"

    export default {
        name: "Head",
        data: () => ({
            navigate: {
                routes: [
                    {
                        title: "Пользователи",
                        group: '',
                        name: pages.PAGE_NAME_USERS,
                        access: ''
                    },
                    {
                        title: "Задания",
                        group: '',
                        name: pages.PAGE_NAME_TASKS,
                        access: ''
                    },
                    {
                        title: "Категории",
                        group: '',
                        name: pages.PAGE_NAME_CATEGORY,
                        access: ''
                    },
                    {
                        title: "Выйти",
                        group: '',
                        name: pages.PAGE_NAME_LOGOUT,
                        access: ''
                    },

                ],
                selectedItem: null,
            }
        }),
        computed: {
            navigations() {
                return {routes: {...this.navigate.routes}, activeRoute: this.navigate.selectedItem}
            }
        },
        mounted() {

        },
        created() {
            eventBus.$on('eventAllert', (data) => {
                let type = data.eventAllert
                let msg = ''
                if (data.eventAllert === 'success') {
                    if (data.eventType === 'user') {
                        msg = 'Пользователь был успешно создан'
                    }
                    if (data.eventType === 'task') {
                        msg = 'Задание успешно создано'
                    }
                    if (data.eventType === 'category') {
                        msg = 'Категория успешно создана'
                    }
                } else {
                    msg = data.eventMessage
                }

                Swal.fire({
                    type: type,
                    cancelButtonAriaLabel: false,
                    width: "700px",
                    showConfirmButton: false,
                    showCloseButton: true,
                    background: 'rgb(255,252,252)',
                    position: "top-right",
                    title: 'type',
                    titleText: msg,
                    heightAuto: false,
                    customClass: {
                        title: '.my-class'
                    }
                })
            })
        }
    }
</script>

<style scoped>

</style>