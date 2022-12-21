<template>
    <v-container>
        <v-card
                color="#385F73"
                dark
                v-for="item in elements"
                class="mb-2"
        >
            <v-container>
                <v-card-title style="color: rgba(246,246,246,0.75)" class="mt-0 pt-0 text-h7">
                    {{item.title}}
                </v-card-title>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>

    export default {
        name: "TaskCard",
        props: {
            tasks: {
                type: Array,
                required: false,
                default: () => []
            }
        },
        data: () => ({
            elements: []
        }),
        watch: {
            tasks(e) {
                this.elements = this.tasks
            }
        },
    }
</script>

<style scoped>

</style>