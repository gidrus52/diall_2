<template>
   <v-container>
        <v-card
                                color="#385F73"
                                dark
                                v-for="item in elements"
                                class="mb-2"
                        >
                            <v-card-title class="text-h5">
                                {{item.title}}
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
   </v-container>
</template>

<script>
    import {eventBus} from "../../../../../../main";

    export default {
        name: "TaskCard",
        props:{
            tasks:{
                type: Array,
                required: false,
                default: ()=>[]
            }
        },
        data:()=>({
            elements: []
        }),
        watch:{
            tasks(e){
                this.elements = this.tasks
            }
        },
    }
</script>

<style scoped>

</style>