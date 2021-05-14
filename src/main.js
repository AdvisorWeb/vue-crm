import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueMeta from "vue-meta";
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import Paginate from 'vuejs-paginate'
import dateFilter from "@/filters/date.filter";
import currencyFilter from "./filters/currency.filter";
import localizeFilter from "./filters/localize.filter";
import tooltipDirective from "./directives/tooltip.directive"

import messagePlugin from "@/utils/message.plugin";
import titlePlugin from "@/utils/title.plugin";

import Loader from '@/components/app/Loader'
import '@/registerServiceWorker'

import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'


import 'materialize-css/dist/js/materialize.min'



Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.use(titlePlugin)
Vue.use(VueMeta)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)


firebase.initializeApp({
    apiKey: "AIzaSyBHz0TGxqC0CkHh_TTcQUlrf5jHQPYYyKY",
    authDomain: "vue-crm-94482.firebaseapp.com",
    projectId: "vue-crm-94482",
    storageBucket: "vue-crm-94482.appspot.com",
    messagingSenderId: "692311322874",
    appId: "1:692311322874:web:aeca1a081c2d2a53e25943",
    measurementId: "G-GKP7B99HX4"
});

let app;

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    }
})



