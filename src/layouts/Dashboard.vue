<template>
    <div>
        <DashboardDriveComponentLeft/>
        <DashboardBodyComponent/>
        <DashboardDriveComponentRight v-if="$route.fullPath!='/'"/>
    </div>


</template>

<script>
    import DashboardDriveComponentLeft from '../components/dashboard/Left'
    import DashboardBodyComponent from '../components/dashboard/Body'
    import DashboardDriveComponentRight from '../components/dashboard/Right'

    export default {
        name: "Dashboard",
        components: {DashboardDriveComponentLeft, DashboardBodyComponent, DashboardDriveComponentRight},
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