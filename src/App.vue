<template>
    <v-app>
        <layout>
            <keep-alive>
                <router-view/>
            </keep-alive>
        </layout>
    </v-app>
</template>
<script>
    import Layout from '@/layouts/Index'

    export default {
        name: 'App',
        data: () => {
            return {}
        },
        components: {
            Layout
        },
        mounted() {

        }
    }
</script>
<style lang="scss">
    /*.v-application--wrap {*/
    /*    min-height: 0vh !important;*/
    /*}*/
</style>
