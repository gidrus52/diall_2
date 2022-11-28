<template>
    <v-row justify="center">


        <v-dialog
                v-model="dialog"
                max-width="290"
        >
            <v-card>
                <v-card-title class="text-h5">
                    Use Google's location service?
                </v-card-title>

                <v-card-text>
                    Let Google help apps determine location. This means sending anonymous location data to Google, even
                    when no apps are running.
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                            color="green darken-1"
                            text
                            @click="dialog = false"
                    >
                        Disagree
                    </v-btn>

                    <v-btn
                            color="green darken-1"
                            text
                            @click="deleteagree"
                    >
                        Agree
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    import {eventBus} from "../../../../../main";
    import {mapActions} from "vuex";

    export default {
        name: "DeleteDialog",
        data:()=>{
            return {
                dialog: false,
                id: ''
            }
        },
        methods: {
            ...mapActions(['deleteTask']),
            deleteagree(){
                this.deleteTask({id: this.id})
                this.dialog = !this.dialog
            }

        },
        created() {
            eventBus.$on('deleteFullscreenDialog', (data) => {
                console.log(data)
                this.dialog = data.dialog
                this.id = data.data.id

            })
        }
    }
</script>

<style scoped>

</style>