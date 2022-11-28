<template>
    <div>
        <UserTable></UserTable>
        <UserUpdateDialog></UserUpdateDialog>
        <UserDeleteDialog></UserDeleteDialog>
    </div>
</template>

<script>
    import UserTable from './BodyComponents/UserTable'
    import UserUpdateDialog from './Dialog/UserUpdateDialog'
    import UserDeleteDialog from './Dialog/UserDeleteDialog'

    export default {
        name: "UserBody",
        data: () => {
            return {}
        },
        components: {UserUpdateDialog, UserTable, UserDeleteDialog},
        mounted() {

        }
    }
</script>

<style scoped>

</style>