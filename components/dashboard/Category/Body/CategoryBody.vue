<template>
    <div>
        <categoryTable class="ma-10"></categoryTable>
        <categoryCreateDialog></categoryCreateDialog>
        <categoryUpdateDialog></categoryUpdateDialog>
    </div>
</template>

<script>
    import categoryTable from './components/Table/CategoryTables'
    import categoryCreateDialog from './components/Dialog/CreateDialogCategory'
    import categoryUpdateDialog from './components/Dialog/UpdateDialogCategory'

    export default {
        name: "CategoryBody",
        components: {
            categoryTable,
            categoryCreateDialog,
            categoryUpdateDialog
        }
    }
</script>

<style scoped>

</style>