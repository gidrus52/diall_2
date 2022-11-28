<template>
    <div>
        <UserHead/>
        <UserBody/>
    </div>
</template>

<script>
    import UserHead from '../../components/dashboard/User/Head/UserHead'
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