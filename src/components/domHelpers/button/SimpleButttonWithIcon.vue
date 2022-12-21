<template>

        <v-btn @click="mainButtonMethod"
               style="background-color: rgba(255,255,255,0.51);"
               width="220"
               class="mb-2 ml-8 d-flex flex-row justify-start pl-2 transparently-button">
            <template>
                <v-icon>mdi-plus</v-icon>
                <div>{{nameButton}}</div>
            </template>
        </v-btn>

</template>

<script>
    import {eventBus} from "../../../main";

    export default {
        name: "SimpleButttonWithIcon",
        props: {
            buttonName: {
                type: String,
                required: true,
                default: () => 'нет имени'
            },
            element: {
                type: Object,
                required: false,
                default: () => {
                }
            }
        },
        computed: {
            nameButton() {
                return this.buttonName
            }
        },

        methods: {
            mainButtonMethod() {
                eventBus.$emit('dialogStart', {name: this.buttonName, currentEl: this.element})
            }
        }
    }
</script>

<style lang="scss">
    .transparently-button {

    }
</style>