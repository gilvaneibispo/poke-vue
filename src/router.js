import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "./components/pages/Home";
import Details from "@/components/pages/Details";
import Page404 from "./components/pages/Page404";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [{
        path: '/',
        component: Home,
    }, {
        path: '/:pokename',
        component: Details
    }, {
        path: '*',
        component: Page404
    }]
});