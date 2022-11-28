<template>
    <v-row justify="center">
        <v-dialog
                v-model="dialog"
                persistent
                max-width="600px"
        >

            <v-card>
                <v-card-title>
                    <span class="text-h5">Обновить категорию "{{currentCategory.title}}"</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-form ref="updateCategoryForm">
                                    <v-text-field
                                            v-model="categoryField"
                                            label="Новое название категории "
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
                            @click="updateCategoryMethod"
                    >
                        Обновить
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
        name: "UpdateDialogCategory",
        data: () => {
            return {
                dialog: false,
                categoryField: '',
                currentCategory: {}
            }
        },
        methods: {
            ...mapActions(['updateCategory']),
            updateCategoryMethod() {
                if (this.$refs.updateCategoryForm.validate()) {
                    this.updateCategory({id: this.currentCategory.id, title: this.categoryField})
                }

            }
        },
        created() {
            eventBus.$on('update_dialog_category', (data) => {
                this.dialog = data.dialog
                this.currentCategory = data.data
            }),
            eventBus.$on('dialog_end', (data) => {
                console.log(data)
                this.dialog = data.dialog
            })
        }
    }
</script>

<style scoped>

</style>