<template>

    <div>
        <v-container fluid>
            <Top class="mb-2 mt-2"/>
            <Bottom/>
            <Overlay :overlay="overlay"></Overlay>
        </v-container>
    </div>


</template>

<script>
    import Top from "./BodyComponents/Top"
    import Bottom from "./BodyComponents/Bottom"
    import Overlay from "../../domHelpers/overlay/overlay"
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