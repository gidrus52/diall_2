<template>
    <v-main
            fluid style="background: #5b5f5f; height: 80.5vh;" >
            <BodyTop  class="mb-2 mt-2"/>
            <BodyBottom style="margin-left: 0 !important;"/>
            <Overlay :overlay="overlay"></Overlay>
    </v-main>

</template>

<script>
    import BodyTop from "./BodyComponents/Top"
    import BodyBottom from "./BodyComponents/Bottom"
    import Overlay from "../../../overlay/overlay"
    import {mapGetters} from 'vuex'


    export default {
        name: "Body",
        components: {
            BodyTop, BodyBottom, Overlay
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
        watch: {displays() {}, findOverlay() {}},
        mounted() {

        }


    }
</script>

<style scoped>

</style>