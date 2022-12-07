<template>
    <v-col cols="auto">
        <v-dialog
                transition="dialog-top-transition"
                max-width="600"
                v-model="dialog"
                dark
        >

            <template v-slot:default="dialog">
                <v-card>
                    <v-toolbar>
                                    {{titleString}}
                    </v-toolbar>
                    <v-card-text>
                        <v-row>
                            <v-col
                                    class="ma-7"
                            >
                                <v-text-field
                                        v-model="nameInputValue"
                                        col
                                        :label="inputString"
                                        required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                        <v-btn
                                text
                                @click="makeDisplay"
                        >Создать
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>
    </v-col>
</template>

<script>

    import {eventBus} from "../../../../main";
    import {mapActions} from "vuex";

    export default {
        props: {
            titleString: {
                required: true,
                default: () => {
                    return ''
                },
                type: String
            },
            inputString: {
                required: true,
                default: () => {
                    return ''
                },
                type: String
            }
        },
        name: "CreateDialog",
        data: () => {
            return {
                dialog: false,
                nameInputValue: null
            }
        },
        computed: {

        },
        methods:{
            ...mapActions(['createDisplay']),
            makeDisplay(){
                (this.nameInputValue!=''&&this.nameInputValue!=undefined&&this.createDisplay({
                    name: this.nameInputValue
                }))
            }
        },
        created() {
            eventBus.$on('dialogStart', () => {
                this.dialog = true
            })
        }
    }
</script>

<style scoped>

</style>