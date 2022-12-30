import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "./components/pages/Home";
import Details from "@/components/pages/Details";
import Page404 from "./components/pages/Page404";
import About from "@/components/pages/About";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [{
        path: '/',
        component: Home,
    }, {
        path: '/sobre',
        component: About
    },{
        path: '/:pokename',
        component: Details
    }, {
        path: '*',
        component: Page404
    }]
});