<template>
    <v-main app>
        <v-container fluid >
            <router-view/>
        </v-container>
    </v-main>
</template>

<script>


    export default {
        name: "Body",
        components: {}

    }
</script>

<style scoped>
    .container {
        padding: 0!important;
    }
</style>