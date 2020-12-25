import Vue from 'vue';
import VueRouter from 'vue-router';
import GBContent from "./components/GBContent";
import Page404 from "./components/Page404";
import GBEachPoke from "./components/GBEachPoke";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [{
        path: '/',
        component: GBContent,
    }, {
        path: '/pokemon/:pokename',
        component: GBEachPoke
    }, {
        path: '*',
        component: Page404
    }]
});