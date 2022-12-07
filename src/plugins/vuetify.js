import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)
const theme = {
    primary: "#398bf7", // change header color from here || "#1e88e6", "#21c1d6", "#fc4b6c", "#563dea", "#9C27b0", "#ff9800"
    info: "#1e88e5",
    success: "#06d79c",
    accent: "#ef5350",
    default: "#563dea",
    whitebutton: "rgba(255,255,255)"
};

const opts = {

    icons: {
        iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
    theme: {
        themes: {
            dark: theme,
            light: theme,
        },
        dark: false, // If you want to set dark theme then dark:true else set to false
    }
}

export default new Vuetify(opts)