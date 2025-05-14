import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const simplizTheme = {
    primary: '#260D33',   // 1
    secondary: '#106B87', // 3
    accent: '#7C4DFF',    // 4
    background: '#003F69',// 2
    error: '#f44336',
    success: '#00B090',
    info: '#B3ACA4',      // 5
    warning: '#FFC107',
};


const opts = {
    theme: {
        themes: {
            light: {
                ...simplizTheme
            },
            dark: {
                ...simplizTheme
            }
        },
        options: {
            customProperties: true
        }
    }
}

export default new Vuetify(opts)