<template>
    <div id="app">
        <input v-model="text" type="text">
        <div class="container is-widescreen">
            <div v-for="(poke, index) in pokes" :key="poke.name" class="box">

                <Poke :pokemon="poke" :index="index"></Poke>
            </div>
        </div>
    </div>
</template>

<script>
    /*
    * Ler depois de apresnder mais: https://constkhi.github.io/vue-simple-alert
    * */
    //import HelloWorld from './components/HelloWorld.vue'
    import axios from 'axios'
    import Poke from './components/Poke.vue'
    //import vmodal from 'vue-js-modal'

    export default {
        name: 'App',
        components: {
            Poke
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

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        padding: 15px;
    }

    .box:hover{
        background-color: #fcfcfc;
    }

    @media only screen and (max-width: 468px) {
        .box {
            padding: 1rem 0.7rem;
        }
    }

    /*
    article:first-child {
        padding-bottom: 1rem;
    }

    article:hover {

    }

    .media + .media {
        margin-top: 0 !important;
        padding-bottom: 1rem;
    }*/
</style>
