<template>
    <div class="container is-widescreen gb-main-container">

        <div v-for="(poke, index) in pokes" :key="poke.name" class="box">
            <GBPoke :index="index + 1" :pokemon="poke"></GBPoke>
        </div>
    </div>
</template>

<script>

    import axios from 'axios'
    import GBPoke from "./GBPoke";

    export default {
        name: "GBContent",
        components: {GBPoke},
        comments: {
            GBPoke //: () => import('./GBPoke')
        },
        data() {
            return {
                apiUrl: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100",
                pokes: [],
                text: ""
            }
        },
        created() {
            axios.get(this.apiUrl).then((response) => {
                this.pokes = response.data.results;
                console.log(this.pokes);
            });
        },
        watch: {
            text: function (valUpdated, valPrevius) {

                console.log(valPrevius);
                console.log(valUpdated);
            }
        }
    }
</script>

<style scoped>
    .gb-main-container {
        min-height: 75vh;
        padding: 3rem 0;
    }
</style>