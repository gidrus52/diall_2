<template>
    <v-container>
        <v-row class="d-flex  flex-row align-start justify-start pl-0">
            <Card :projectItem="projectItem" class="ml-0"/>
            <v-col>
                <Button v-for="item in buttonsName" :buttonName="item"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import Card from './bottomComponents/Card'
    import Button from '../../../../button/SimpleButttonWithIcon'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "Bottom",
        data: () => ({
            displayItem: undefined,
            projectItem: undefined,
            buttonsName: [
                'Создать колонку',
                'Создать сводку',
                'Создать зеркало',
            ]
        }),
        components: {
            Card, Button
        },
        computed: {
            ...mapGetters(['currentDisplayItem', 'listCurrentProject']),
            display() {
                return this.currentDisplayItem
            },
            project() {
                return this.listCurrentProject
            }
        },
        methods: {
            ...mapActions(['listProject'])
        },
        watch: {
            display(e) {
                this.displayItem = e
                console.log(e)
                if (e) {
                    this.listProject(e)
                }
            },
            project(e) {
                console.log('project')
                console.log(e)
                if (e) {
                    this.projectItem = e
                }
            }
        },
        mounted() {
            // this.listProject()
        }
    }
</script>

<style scoped>

</style>