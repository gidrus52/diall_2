<template>
    <v-row  class="ml-7 flex d-flex flex-row align-center justify-start">
        <v-col cols="1" xl="1" sm="2" md="3" class="flex d-flex">
            <div class="flex d-flex flex-row justify-end  mr-1" v-select-target-el
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
            </div>
        </v-col>
        <v-col cols="3" xl="3" sm="3" md="3">
            <v-menu v-for="el in menuItems" bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                            class="mr-2"
                            color="primary"
                            v-bind="attrs"
                            v-on="on"
                            height="40">
                        <span>{{el}}</span>
                    </v-btn>
                </template>
            </v-menu>
            <v-btn rounded color="black" width="" small dark icon>
                <v-icon color="indigo" dark>mdi-plus</v-icon>
            </v-btn>
        </v-col>
    </v-row>

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