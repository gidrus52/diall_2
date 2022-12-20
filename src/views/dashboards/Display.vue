<template>
    <div>
        <taskHead style="padding-left: 7rem!important;"/>
        <taskBody style="padding-left: 7rem!important;"/>
    </div>
</template>

<script>
    import taskHead from '../../components/dashboard/displayBoards/Head/index'
    import taskBody from '../../components/dashboard/displayBoards/Body/index'


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