<template>
    <div>
        <taskHead/>
        <taskBody/>
    </div>
</template>

<script>
    import taskHead from '../../components/dashboard/DiasplayBoards/Head/Head'
    import taskBody from '../../components/dashboard/DiasplayBoards/Body/Body'

    export default {
        name: "Display",
        components: {
            taskHead,
            taskBody
        }
    }
</script>

<style scoped>

</style>