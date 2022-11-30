<template>
    <v-app>
        <DashboardDriveComponentLeft/>
        <DashboardBodyComponent/>
        <DashboardDriveComponentRight/>
    </v-app>
</template>

<script>
    import DashboardDriveComponentLeft from '../components/dashboard/Body'
    import DashboardBodyComponent from '../components/dashboard/Body'
    import DashboardDriveComponentRight from '../components/dashboard/Body'

    export default {
        name: "Dashboard",
        components: {DashboardDriveComponentLeft,DashboardBodyComponent,DashboardDriveComponentRight},
        data() {
            return {
                drawer: null,
                items: [
                    {title: 'Home', icon: 'mdi-view-dashboard'},
                    {title: 'About', icon: 'mdi-forum'},
                ],
            }
        },
    }
</script>

<style scoped>

</style>