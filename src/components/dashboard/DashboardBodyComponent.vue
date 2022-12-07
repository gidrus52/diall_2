<template>
    <v-main style="height: 100vh !important;">
        <div class="overflow-hidden">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>

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