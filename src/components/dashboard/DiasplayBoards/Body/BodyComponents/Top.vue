<template>
    <v-col>
        <v-row class="flex d-flex justify-start align-start">
            <v-col class="col-sm-3 col-md-3 col-lg-3 flex d-flex align-start mr-0">
                <div class="flex d-flex justify-end align-end" v-select-target-el
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
            <v-col class="dialog-fade-leave-active col-xl-5 col-sm-4 col-md-4 col-lg-4">
                <v-card color="fff" height="45" width="465" class="d-flex flex align-center justify-start pl-2"
                        style="background: rgba(246,246,246,0.29)">
                    <v-menu v-for="el in menuItems" offset-y >
                        <template v-slot:activator="{ on, attrs }" class="d-flex flex justify-start">
                            <v-btn style="position: relative"
                                   class="ma-2"

                                   color="indigo"
                                   v-bind="attrs"
                                   v-on="on"
                                   height="23">
                                <span class="" style="font-size: 9px">{{el}}</span>
                            </v-btn>

                        </template>
                        <template>
                            <div style="height: 5px; width: 100px;"/>
                        </template>
                        <v-card  width="400" class="">
                            <v-list-item
                                    v-for="(item, index) in items"
                                    :key="index"
                            >
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                        </v-card>
                    </v-menu>
                    <v-btn color="black" width="" small dark icon ><v-icon color="indigo" dark>mdi-plus</v-icon></v-btn>

                </v-card>
            </v-col>
        </v-row>
    </v-col>
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
                console.log('testElse')
            }
        }
    }
</script>

<style lang="scss">

</style>