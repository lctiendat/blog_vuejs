require("./bootstrap");
import vue from "vue";
window.Vue = vue;

import App from "./components/App.vue";
import VueRouter from "vue-router";
import VueAxios from "vue-axios";
import axios from "axios";
import { routes } from "./routes";
global.jQuery = require("jquery");
var $ = global.jQuery;
window.$ = $;
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
const router = new VueRouter({
    mode: "history",
    routes: routes
});

new Vue({
    el: "#app",
    router: router,
    render: h => h(App)
});
