<template>

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