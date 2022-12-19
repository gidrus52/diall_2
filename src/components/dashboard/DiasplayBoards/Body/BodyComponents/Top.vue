<template>
    <v-row class="flex d-flex flex-row align-center justify-start ml-4">
        <v-col class="col-md-4 col-xl-3 flex d-flex align-center justify-start">
            <div class="flex d-flex flex-row mr-1" v-select-target-el
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
            <v-menu v-for="el in menuItems" offset-y>
                <template v-slot:activator="{ on, attrs }" class="d-flex flex justify-start">
                    <v-btn style="position: relative"
                           class="mr-2"
                           color="indigo"
                           v-bind="attrs"
                           v-on="on"
                           height="23">
                        <span class="" style="font-size: 9px">{{el}}</span>
                    </v-btn>
                </template>

                <v-card width="200" class="">
                    <v-list-item
                            v-for="(item, index) in items"
                            :key="index"
                    >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-card>
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
            testElse() {

            }
        }
    }
</script>

<style lang="scss">

</style>