<template>
    <v-col cols="auto">
        <v-dialog
                transition="dialog-top-transition"
                max-width="600"
                v-model="dialog"
                dark>

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
                                        :label="titleString"
                                        required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                        <v-btn
                                text
                                @click="makeAction"
                                :disabled="findTrue"
                        >Создать
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>
    </v-col>
</template>

<script>

    import {eventBus} from "../../../../main"
    import {mapActions, mapGetters} from "vuex"

    export default {
        name: "CreateDialog",
        data: () => {
            return {
                titleString: null,
                dialog: false,
                targetEl: false,
                nameInputValue: null,
            }
        },
        computed: {
            ...mapGetters(['displayList','currentDisplayItem']),
            lists() {
                return this.displayList
            },
            findTrue(){
                return this.nameInputValue!=null?this.nameInputValue.length?false:true:true
            },
            display(){
                return this.currentDisplayItem
            }
        },
        watch: {
            lists() {},
            display() {},
        },
        methods: {
            ...mapActions(['createDisplay', 'createProject','createTask']),
            makeAction() {
                (this.nameInputValue != '' && (this.titleString === 'Создать доску' && this.createDisplay({
                    name: this.nameInputValue
                }) || this.titleString === 'Создать колонку' && this.createProject({
                    name: this.nameInputValue, display: this.currentDisplayItem.id
                }) || this.titleString === 'Создать мой первый дисплей' && this.createDisplay({
                    name: this.nameInputValue
                    }) || this.titleString === 'Создать задание' && this.createTask({
                    name: this.nameInputValue, targetEl: this.targetEl
                })
                ))

            }
        }
        ,
        created() {
            eventBus.$on('dialogStart', (data) => {
                this.dialog = true
                this.titleString = data.name
                this.targetEl = data.currentEl
                console.log(data)
            })
            eventBus.$on('success_create_display', (data) => {
                this.dialog = !true
                this.titleString = ''
            })
        }
    }
</script>

<style scoped>

</style>