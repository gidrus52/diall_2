<template>
    <div>
        <Left/>
        <Body/>
        <Right v-if="$route.fullPath!='/'"/>
    </div>
</template>

<script>
    import Left from '../components/dashboard/Left/Left'
    import Body from '../components/dashboard/Body/Body'
    import Right from '../components/dashboard/Right/Right'

    export default {
        name: "Dashboard",
        components: {Left, Body, Right},
        data() {
            return {
                drawer: null,
                items: [
                    {title: 'Home', icon: 'mdi-view-dashboard'},
                    {title: 'About', icon: 'mdi-forum'},
                ],
            }
        },
        computed: {
            currentRoute() {
                return this
            }
        }
    }
</script>

<style scoped>

</style>