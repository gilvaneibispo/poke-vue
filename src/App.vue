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

    import GBHeader from "./components/fragments/GBHeader";
    import GBFooter from "./components/fragments/GBFooter";

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
    @import "/css/text-types.css";
    @import "/css/style.css";

</style>
