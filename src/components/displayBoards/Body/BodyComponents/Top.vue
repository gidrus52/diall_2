<template>
    <v-container  fluid>
        <v-row class="flex d-flex flex-row align-center justify-center">
            <v-col >
                <div class="flex d-flex flex-row justify-start align-center  mr-1" v-select-target-el
                >
                    <v-btn
                            v-for="(button,index) in bottonItem"
                            class="mr-5 button-item" height="45"
                            color="indigo"
                            @click="clickEvent(index)"
                    >

                        <v-icon>
                            {{button}}
                        </v-icon>
                    </v-btn>
                    <v-btn rounded color="black" width="" small dark icon>
                    <v-icon color="indigo" dark>mdi-plus</v-icon>
                </v-btn>
                </div>
            </v-col>
            <v-col cols="3" xl="4" sm="3" md="3">


            </v-col>
        </v-row>
    </v-container>

</template>

<script>
    export default {
        name: "Top",
        data: () => {
            return {
                active_button: undefined,
                bottonItem: ['mdi-format-list-bulleted-square', 'mdi-calendar', 'mdi-pencil'],
                menuItems: ['Исполнитель', 'Дедлайн', 'Приоритет'],
                items: [
                    {title: 'Click Me'},
                    {title: 'Click Me'},
                    {title: 'Click Me'},
                    {title: 'Click Me 2'},
                ],
            }
        },
        methods: {
            clickEvent(index) {
                this.$emit('mousetrapped', index)
            },
        }
    }
</script>

<style lang="scss">

</style>