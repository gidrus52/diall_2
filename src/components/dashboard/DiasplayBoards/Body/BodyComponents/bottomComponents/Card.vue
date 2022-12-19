<template>

        <v-col class="d-flex flex-row  justify-start" >
        <v-card v-for="(item, index) in projectItem" :key="index"
                height="660"
                width="450"
                class="ml-0 mr-2"
                color="grey"
                style="background-color: rgba(66,185,131,0.25)"
        >
            <v-system-bar
                    color="pink darken-2"
                    dark
                    height="45"
            >
                <v-toolbar-title>{{item.name}}</v-toolbar-title>
                <v-spacer></v-spacer>

                <v-icon large>mdi-menu</v-icon>
            </v-system-bar>
            {{item}}
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-card
                                color="#385F73"
                                dark
                        >
                            <v-card-title class="text-h5">
                                Unlimited music now
                            </v-card-title>

                            <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever,
                                online
                                and offline.
                            </v-card-subtitle>

                            <v-card-actions>
                                <v-btn text>
                                    Listen Now
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>

            <v-container>
                <v-row dense>
                    <v-col cols="12">
                        <Button :element="item" :buttonName="'Создать задание'"/>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-col>



</template>

<script>
    import Button from '@/components/button/SimpleButttonWithIcon'

    export default {
        name: "Card",
        props: {
            projectItem: {
                type: Array,
                required: false,
                default: () => []
            }
        },
        data: () =>
            ({
                taskItem: []
            }),

        components: {
            Button
        },
        data: () => ({})
    }
</script>

<style scoped>

</style>