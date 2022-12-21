<template>
    <div>
        <UserHead/>
        <UserBody/>
    </div>
</template>

<script>
    import UserHead from '../../components/dashboard/User/Left/UserHead'
    import UserBody from '../../components/dashboard/User/Body/UserBody'


    export default {
        name: "User",
        data: () => {
            return {}
        },
        components: {
            UserBody, UserHead
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>