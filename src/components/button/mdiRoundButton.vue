<template>
    <v-btn
            class="mx-2"
            fab
            small
            icon
            @click="createButtonEvent(propertyData.event)">
        <v-icon dark>
            {{nameIcon}}
        </v-icon>
    </v-btn>
</template>

<script>
    import {eventBus} from "../../main"

    export default {
        name: "mdiRoundButton",
        props: {
            nameIcon: {
                required: true,
                type: String,
                default: ()=> 'mdi-close',
            },
            propertyData: {
                required: true,
                type: Object,
                default: ()=>{},
            }
        },
        methods:{
            createButtonEvent(data){
                console.log('data')
            },
        },
        mounted() {
            console.log(this.propertyData)
        }
    }
</script>

<style scoped>

</style>