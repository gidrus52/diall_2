<template>
    <v-btn
            height="50" width=""
            class="primary px-4"
            color="darken-2"
            @click="createTaskEvent()"
    >
        <v-icon class="mr-2">mdi-plus</v-icon>
        {{nameButton}}
    </v-btn>
</template>

<script>
    export default {
        name: "CreateButton",
        props: {
            nameButton: {
                required: true,
                type: String,
                default: () => {
                    return 'Нет названия, что-то пошло не так'
                }
            },
            actionButton: {
                required: true,
                type: String,
                default: () => {
                    return ''
                }
            }
        },
        methods: {
            createTaskEvent() {
                console.log(this.actionButton)
                this.$emit('createTaskEvent', this.actionButton)
            }
        }
    }
</script>

<style scoped>

</style>