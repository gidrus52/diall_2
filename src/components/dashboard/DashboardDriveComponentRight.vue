<template>
    <v-navigation-drawer
            v-model="drawer"
            app

            right
            width="600"
            dark
            fixed
    >

        <v-list-item style="height: 75px">
            <v-list-item-avatar >
                <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>John Leider</v-list-item-title>
            </v-list-item-content>
            <mdiRoundButton :name-icon="'mdi-close'" :property-data="propertyData"></mdiRoundButton>
        </v-list-item>

        <v-divider></v-divider>

    </v-navigation-drawer>
</template>

<script>
    import mdiRoundButton from '../button/mdiRoundButton'
    export default {
        name: "DashboardDriveComponentRight",
        data: () => ({
            drawer: true,
            propertyData: {
                event: 'rightMenu'

            }
        }),
        components:{
          mdiRoundButton
        },
        computed: {},
        mounted() {

        },
        created() {

        }
    }
</script>

<style scoped>

</style>