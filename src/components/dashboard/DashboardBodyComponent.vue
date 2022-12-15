<template>
    <v-main style="">
        <v-container class="ma-0 pa-0">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
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

</style>