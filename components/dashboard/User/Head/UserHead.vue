<template>
    <div class="ma-6">
        <v-row class="align-center d-flex flex flex-row">
            <v-col class="text-h5  ma-8 pa-xl-13 d-flex flex align-start">
                Список пользователей
            </v-col>
            <v-col align-self="center" class="">

                <v-col class="d-flex flex flex-row justify-end">
                    <userDialogLoading/>
                    <userCreateDialog
                            :overlayDialog="overlayDialog"
                            :dialogCreate="dialogCreate"
                    >
                    </userCreateDialog>
                </v-col>

            </v-col>
        </v-row>
    </div>
</template>

<script>
    import {eventBus} from '../../../../main'
    import userDialogLoading from './HeadComponents/UserDialogLoading'
    import userCreateDialog from './HeadComponents/UserCreateDialog'


    export default {
        name: "UserHead",
        data: () => {
            return {
                dialogCreate: false,
                overlayDialog: false
            }
        },
        methods: {},
        components: {
            userDialogLoading,
            userCreateDialog
        },
        created() {
            eventBus.$on('dialog_user_start', data => {
                this.dialogCreate = data.dialog
            })
            eventBus.$on('dialog_end', data => {
                this.dialogCreate = data.dialog
                this.overlayDialog = data.overlayDialog
            })
            eventBus.$on('createEventSave', () => {

            })
            eventBus.$on('overlayOn', (data) => {
                this.overlayDialog = data.overlayDialog
            })
        }
    }
</script>

<style lang="css">
    .my-class {
        font-weight: 600;
        font-size: 2rem;
    }
</style>