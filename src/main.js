import Vue from 'vue'
import App from './App.vue'
import "../node_modules/bulma/css/bulma.css";
import routes from "./router";

Vue.config.productionTip = false;

Vue.mixin({
    methods: {
        goBack() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
        vref: function (page) {
            this.$router.push(page);
        }
    }
});

new Vue({
    render: h => h(App),
    router: routes
}).$mount('#app')
