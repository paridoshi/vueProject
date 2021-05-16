import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes';


import VueSimpleAlert from "vue-simple-alert";
Vue.use(VueRouter)
Vue.use(VueSimpleAlert);

Vue.config.productionTip = false

const router = new VueRouter({routes});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');



