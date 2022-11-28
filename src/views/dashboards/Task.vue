<template>
    <div>
        <taskHead/>
        <taskBody/>
    </div>
</template>

<script>
    import taskHead from '../../components/dashboard/Tasks/Head/TaskHead'
    import taskBody from '../../components/dashboard/Tasks/Body/TaskBody'
    export default {
        name: "Task",
        components:{
            taskHead,taskBody
        }
    }
</script>

<style scoped>

</style>