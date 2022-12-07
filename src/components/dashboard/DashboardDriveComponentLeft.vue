<template>
    <v-navigation-drawer
            :mini-variant.sync="mini"
            mini-variant-width="70"
            v-model="drawer"
            permanent
            app
            fixed
            dark

    >
        <v-list-item style="height: 75px">
            <v-list-item-avatar>
                <v-img width="150" src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>John Leider</v-list-item-title>
            </v-list-item-content>
            <mdiRoundButton
                    :name-icon="'mdi-pencil'" :property-data="propertyData"/>
            <v-btn v-if="!mini" icon
                   @click.stop="mini = !mini">
                <v-icon>mdi-cancel</v-icon>
            </v-btn>
        </v-list-item>

        <v-divider></v-divider>

    </v-navigation-drawer>
</template>

<script>
    import mdiRoundButton from '../button/mdiRoundButton'

    export default {
        name: "DashboardDriveComponentLeft",
        data: () => ({
            drawer: !true,
            mini: true,
            propertyData: {
                event: 'leftMenu'
            }
        }),
        components: {
            mdiRoundButton
        },
        computed: {
            wathMini() {
                console.log(this.mini)
                return this.mini
            }
        },
        mounted() {

        },
        created() {

        }
    }
</script>

<style scoped>

</style>