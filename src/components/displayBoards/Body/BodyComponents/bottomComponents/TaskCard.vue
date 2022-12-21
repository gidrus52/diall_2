<template>
    <v-container>
        <v-card
                color="#385F73"
                dark
                v-for="item in elements"
                class="mb-2"
        >
            <v-card-title class="text-h4">
                <span>Название задания</span>
            </v-card-title>
            <v-card-title class="mt-0 pt-0 text-h5">
                {{item.title}}
            </v-card-title>

            <v-card-subtitle>это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник
                создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки
            </v-card-subtitle>

            <v-card-actions>
                <v-btn text>
                    Подробнее
                </v-btn>
            </v-card-actions>
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