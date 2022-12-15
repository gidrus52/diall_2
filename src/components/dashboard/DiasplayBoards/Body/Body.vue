<template>
    <v-container fluid
                 class="pb-6"
                 style="background-color: blueviolet"
    >
        <v-row class="mt-2 flex flex-column d-flex">
            <v-col>
                <bodyTop/>
            </v-col>
            <v-col>
                <v-row class="flex d-flex flex-column justify-start align-start ml-8">
                    <bodyBottom/>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import bodyTop from "./BodyComponents/Top"
    import bodyBottom from "./BodyComponents/Bottom"

    export default {
        name: "Body",
        components: {
            bodyTop, bodyBottom
        },
        data() {
            return {}
        },
        computed: {},
        methods: {},


    }
</script>

<style scoped>

</style>