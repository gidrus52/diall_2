<template>
    <v-app>
        <DashboardHeadComponent/>
        <DashboardBodyComponent/>
    </v-app>
</template>

<script>
    import DashboardHeadComponent from '../components/dashboard/Head'
    import DashboardBodyComponent from '../components/dashboard/Body'
    export default {
        name: "Dashboard",
        components: {DashboardHeadComponent,DashboardBodyComponent}
    }
</script>

<style scoped>

</style>