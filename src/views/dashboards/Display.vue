<template>
    <v-main  class=" pa-0">
        <taskHead style="padding-left: 7rem!important;"/>
        <taskBody style="padding-left: 7rem!important;"/>
    </v-main>
</template>

<script>
    import taskHead from '../../components/dashboard/DiasplayBoards/Head/Head'
    import taskBody from '../../components/dashboard/DiasplayBoards/Body/Body'



    export default {
        name: "Display",
        components: {
            taskHead,
            taskBody,

        }


    }
</script>

<style scoped>

</style>