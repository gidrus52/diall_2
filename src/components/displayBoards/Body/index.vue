<template>
        <v-container fluid style="">
            <Bottom/>
            <Overlay :overlay="overlay"></Overlay>
        </v-container>
</template>

<script>

    import Bottom from "./BodyComponents/Bottom"
    import Overlay from "../../domHelpers/overlay/overlay"
    import {mapGetters} from 'vuex'

    export default {
        name: "Body",
        components: {
             Bottom, Overlay
        },
        data() {
            return {
                overlay: null
            }
        },
        computed: {
            ...mapGetters(['displayList']),
            displays() {
                return this.displayList
            },
            findOverlay() {
                this.displays.length ? this.overlay = true : this.overlay = !true
            }
        },
        methods: {},
        watch: {
            displays() {
            }, findOverlay() {
            }
        },
        mounted() {

        }


    }
</script>

<style scoped>

</style>