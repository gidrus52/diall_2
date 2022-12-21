<template>
        <v-btn @click="mainButtonMethod"
               color="primary"
               outlined
               class="">
            <template>

                <span>
                    {{nameButton}}
                </span>
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