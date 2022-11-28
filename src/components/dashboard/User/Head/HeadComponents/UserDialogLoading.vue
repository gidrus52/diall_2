<template>
    <div class="">
        <v-btn
                height="70" width="400"
                :disabled="loadingBar"
                :loading="loadingBar"
                class="primary"
                color="purple darken-2"
                @click="dialogStart()"

        >
            Создать Пользователя
        </v-btn>
        <v-dialog
                v-model="loadingBar"
                hide-overlay
                persistent
                width="300"
        >
            <v-card
                    color="primary"
                    dark
            >
                <v-card-text>
                    Загрузка...
                    <v-progress-linear
                            indeterminate
                            color="white"
                            class="mb-0"
                    ></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import {eventBus} from '../../../../../main'
    import {mapActions} from 'vuex'

    export default {

        name: "UserDialogLoading",
        data() {
            return {
                loadingBar: false,
            }
        },
        methods: {
            ...mapActions(['dialog_start']),
            dialogStart() {
                this.loadingBar = true
                this.dialog_start({event: 'user'})
            }
        },
        created() {
            eventBus.$on('dialog_user_start', (data) => {
                this.loadingBar = data.loadingBar
            })
        }

    }
</script>

<style scoped>

</style>