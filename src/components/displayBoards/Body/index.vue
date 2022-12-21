<template>
    <v-main fluid style="background: #2c3e50;"class="fill-height">
        <v-container fluid  class="fill-height">
            <Top class="mb-2 mt-2"/>
            <Bottom style="margin-left: 0 !important;"/>
            <Overlay :overlay="overlay"></Overlay>
        </v-container>
    </v-main>

</template>

<script>
    import Top from "./BodyComponents/Top"
    import Bottom from "./BodyComponents/Bottom"
    import Overlay from "../../../domHelpers/overlay/overlay"
    import {mapGetters} from 'vuex'


    export default {
        name: "Body",
        components: {
            Top, Bottom, Overlay
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