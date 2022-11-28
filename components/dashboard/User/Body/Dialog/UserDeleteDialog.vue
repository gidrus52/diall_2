<template>
    <v-row justify="center">

        <v-dialog
                v-model="dialog"
                max-width="400"
        >
            <v-card>
                <div class="text--darken-4 text-h5 pa-4">
                    Удалить пользователя?
                </div>
                <v-card-text class="text-h6">
                    {{user.name}}<br>
                    {{user.email}}
                </v-card-text>
                <v-card-text>

                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                            color="primary darken-1"
                            text
                            @click="dialog = false"
                    >
                        Нет
                    </v-btn>

                    <v-btn
                            color="red darken-1"
                            text
                            @click="deleteUserAgree(user)"
                    >
                        Да
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    import {eventBus} from "../../../../../main"
    import {mapActions} from 'vuex'

    export default {
        name: "UserDeleteDialog",
        data: () => {
            return {
                dialog: false,
                user: {}
            }
        },
        methods: {
            ...mapActions(['deleteUser']),
            deleteUserAgree(user) {
                this.dialog = !this.dialog
                this.deleteUser(user)
            }
        },
        created() {
            eventBus.$on('tableEventDelete', data => {
                this.user = data.user
                data.type === 'delete' ? this.dialog = true : ''
            })
        }
    }

</script>

<style scoped>

</style>