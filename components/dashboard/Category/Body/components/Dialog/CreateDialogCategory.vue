<template>
    <v-row justify="center">
        <v-dialog
                v-model="dialog"
                persistent
                max-width="600px"
        >

            <v-card>
                <v-card-title>
                    <span class="text-h5">Создать категорию</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-form ref="createCategoryForm">
                                    <v-text-field
                                            v-model="categoryField"
                                            label="Название категории"
                                            required
                                            :rules="[v => (v && v.length <= 16) || 'Название категории должно содержать не более 16 символов']"
                                    ></v-text-field>
                                </v-form>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="blue darken-1"
                            text
                            @click="dialog = false"
                    >
                        Закрыть
                    </v-btn>
                    <v-btn
                            color="blue darken-1"
                            text
                            @click="createCategoryMethod"
                    >
                        Создать
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    import {eventBus} from "../../../../../../main"
    import {mapActions} from 'vuex'

    export default {
        name: "CreateDialog",
        data: () => {
            return {
                dialog: false,
                categoryField: ''
            }
        },
        methods: {
            ...mapActions(['createCategory']),
            createCategoryMethod() {
                if(this.$refs.createCategoryForm.validate()){
                    this.createCategory({title: this.categoryField})
                }
            }
        },
        created() {
            eventBus.$on('dialog_end', (data) => {
                console.log(data)
                this.dialog = data.dialog
            })
            eventBus.$on('create_dialog_category', (data) => {
                console.log(data)
                this.dialog = data.dialog
            })
        }
    }
</script>

<style scoped>

</style>