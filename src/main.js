import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta';
import '@/assets/tailwind.css'

Vue.use(VueMeta);
Vue.config.productionTip = false
const isProduction = process.env.NODE_ENV === 'production';
if (isProduction) {
    Vue.config.devtools = false;
    Vue.config.debug = false;
    Vue.config.silent = true;
}
new Vue({
    render: h => h(App),
}).$mount('#app')
