<template>
    <div style="padding-left: 7rem!important;" class="">
        <v-progress-linear
                v-model="valueDeterminate"
                color="blue"
        ></v-progress-linear>
        <v-row class=" mt-8 d-flex  flex-row align-start justify-start ">
            <v-col>
                <v-card v-if="valueDeterminate>=80"
                        class="mt-4"
                        max-width="800"
                        height="400"
                >
                    <v-sheet
                            class="v-sheet--offset mx-auto"
                            color="cyan"
                            elevation="12"
                            max-width="calc(100% - 32px)"
                    >
                        <v-sparkline
                                :labels="labels"
                                :value="value"
                                color="white"
                                line-width="2"
                                padding="16"
                        ></v-sparkline>
                    </v-sheet>

                    <v-card-text class="pt-0">
                        <div class="text-h6 font-weight-light mb-2">
                            Количество комметариев
                        </div>
                        <div class="subheading font-weight-light grey--text">
                            ПАО "ПАО"
                        </div>
                        <v-divider class="my-2"></v-divider>
                        <v-icon
                                class="mr-2"
                                small
                        >
                            mdi-clock
                        </v-icon>
                        <span class="text-caption grey--text font-weight-light">последний комметарий 6 минут назад</span>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col>
                <v-card v-if="valueDeterminate===100"
                        class="mt-4"
                        max-width="800"
                        height="400"
                >
                    <v-sheet
                            class="v-sheet--offset mx-auto"
                            color="green"
                            elevation="12"
                            max-width="calc(100% - 32px)"
                    >
                        <v-sparkline
                                :labels="labels2"
                                :value="value2"
                                color="white"
                                line-width="2"
                                padding="16"
                        ></v-sparkline>
                    </v-sheet>

                    <v-card-text class="pt-0">
                        <div class="text-h6 font-weight-light mb-2">
                            Количество посещений
                        </div>
                        <div class="subheading font-weight-light grey--text">
                            ПАО "ПАО"
                        </div>
                        <v-divider class="my-2"></v-divider>
                        <v-icon
                                class="mr-2"
                                small
                        >
                            mdi-clock
                        </v-icon>
                        <span class="text-caption grey--text font-weight-light">последний логин 26 минут назад</span>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

    </div>
</template>

<script>
    export default {
        name: "Dashboards",
        components: {},
        data: () => {
            return {
                valueDeterminate: 50,
                labels: [
                    '12am',
                    '3am',
                    '6am',
                    '9am',
                    '12pm',
                    '3pm',
                    '6pm',
                    '9pm',
                ],
                value: [
                    200,
                    675,
                    410,
                    390,
                    310,
                    460,
                    250,
                    240,
                ],
                labels2: [
                    '12am',
                    '3am',
                    '6am',
                    '9am',
                    '12pm',
                    '3pm',
                    '6pm',
                    '9pm',
                ],
                value2: [
                    80,
                    100,
                    150,
                    40,
                    15,
                    6,
                    2,
                    1,
                ],
            }
        },
        methods: {
            setValue() {
                if (this.valueDeterminate < 100) {
                    this.valueDeterminate++
                    setTimeout(() => {
                        this.setValue()
                    }, 10)
                }

            }
        },
        mounted() {
            this.setValue()

        }
    }
</script>

<style>
    .v-sheet--offset {
        top: -24px;
        position: relative;
    }
</style>
