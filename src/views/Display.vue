<template>
    <v-container fluid>
        <taskHead/>
        <taskBody/>
    </v-container>

</template>

<script>
    import taskHead from '../components/displayBoards/Head/index'
    import taskBody from '../components/displayBoards/Body/index'


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