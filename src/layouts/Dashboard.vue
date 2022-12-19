<template>
    <v-app>
        <DashboardDriveComponentLeft/>
        <DashboardBodyComponent/>
        <DashboardDriveComponentRight v-if="$route.fullPath!='/'"/>
    </v-app>

</template>

<script>
    import DashboardDriveComponentLeft from '../components/dashboard/DashboardDriveComponentLeft'
    import DashboardBodyComponent from '../components/dashboard/DashboardBodyComponent'
    import DashboardDriveComponentRight from '../components/dashboard/DashboardDriveComponentRight'

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