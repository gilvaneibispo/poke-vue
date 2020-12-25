<template>
    <div id="app">
        <GBHeader></GBHeader>

        <transition name="trans-route" mode="out-in">
            <router-view></router-view>
        </transition>


        <GBFooter></GBFooter>
    </div>
</template>

<script>

    /* Ler depois de apresnder mais: https://constkhi.github.io/vue-simple-alert */

    //import Poke from './components/GBPoke.vue'
    import GBHeader from "./components/GBHeader";
    import GBFooter from "./components/GBFooter";
    //import GBContent from "./components/GBContent";

    export default {
        name: 'App',
        components: {
            GBFooter,
            GBHeader
        }
    }
</script>

<style>

    @import "/fontawesome-free/css/all.css";

    .text-gray-100 {
        color: rgb(225, 225, 225) !important;
    }

    .text-gray-200 {
        color: rgb(200, 200, 200) !important;
    }

    .text-gray-300 {
        color: rgb(180, 180, 180) !important;
    }

    .text-gray-400 {
        color: rgb(160, 160, 160) !important;
    }

    .text-gray-500 {
        color: rgb(140, 140, 140) !important;
    }

    .text-gray-600 {
        color: rgb(120, 120, 120) !important;
    }

    .text-gray-700 {
        color: rgb(100, 100, 100) !important;
    }

    .text-gray-800 {
        color: rgb(80, 80, 80) !important;
    }

    .text-gray-900 {
        color: rgb(50, 50, 50) !important;
    }

    .text-gray {
    }


</style>
