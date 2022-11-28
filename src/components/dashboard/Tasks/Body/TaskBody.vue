<template>
    <div>
        <taskTable></taskTable>
        <fullDialog class="overflow-hidden"></fullDialog>
    </div>
</template>

<script>
    import taskTable from './BodyComponents/TaskTable'
    import fullDialog from './Dialog/FullScreenDialog'

    export default {
        name: "Body",
        components: {
            taskTable,
            fullDialog
        }
    }
</script>

<style scoped>

</style>