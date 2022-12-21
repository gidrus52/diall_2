<template>
    <v-overlay :value="!overlay">
        <div>
            <div class="d-flex flex flex-column justify-center align-center">
                <v-progress-circular
                        indeterminate
                        size="128">
                    <span class="text-center">Нет ни одного дисплея</span>
                </v-progress-circular>
                <v-divider></v-divider>
            </div>
            <div class="mt-6">
                <v-btn @click="callDialog">Создать дисплей</v-btn>
            </div>
        </div>
    </v-overlay>
</template>

<script>
    import {eventBus} from "../../../main";

    export default {
        name: "Overlay",
        props: {
            overlay: {
                type: Boolean,
                reguired: true,
                default: () => false
            }
        },
        methods: {
            callDialog() {
                eventBus.$emit('dialogStart', {
                    name: 'Создать мой первый дисплей'
                })
            }
        }
    }

</script>

<style scoped>

</style>