<template>
    <div>
        <categoryHead/>
        <categoryBody/>
    </div>
</template>

<script>
    import categoryHead from '../../components/dashboard/Category/Head/CategoryHead'
    import categoryBody from '../../components/dashboard/Category/Body/CategoryBody'

    export default {
        name: "Category",
        components:{
            categoryHead,categoryBody
        }
    }
</script>

<style scoped>

</style>