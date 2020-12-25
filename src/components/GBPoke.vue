<template>
    <article class="media">

        <div class="media-left">
            <figure class="image is-64x64">
                <img :src="imgUrl" v-bind:title="imgTitle" alt="Image front">
                <a href="#" class="toggleBtn" @click="toggleImg($event)"></a>
            </figure>
        </div>
        <div class="media-content">
            <div class="content">
                <div class="data-poke">
                    <h3>{{index}}: {{pokemon.name | firstUpCase}}</h3>
                    <!--
                    <i class="fas fa-mail-bulk"></i>
                    -->
                    <small class="text-gray-500">{{pokeType}}</small>
                </div>
                <small><a class="button is-primary is-small" @click.prevent="vref(goToEachPoke(pokemon.name))" >+</a></small>
            </div>
        </div>

        <!--
        <div class="hide">
            <ModalBody/>
        </div>
        -->
    </article>

</template>

<script>
    import axios from "axios";
    //import ModalBody from './ModalBody.vue';

    /*
    Colocar a imagem (logo) da pokedex;
    Colocar sistema que alterna entre as imagens de frent e de costa;
    busca;
    * */

    export default {
        name: "GBPoke",
        props: {
            index: Number,
            pokemon: Object
        },
        data() {
            return {
                imgFrontUrl: "",
                imgBackUrl: "",
                imgUrl: "",
                imgIsFrot: true,
                imgTitle: "",
                pokeType: ""
            }
        },

        filters: {
            firstUpCase(string) {

                let firstUp = string.substring(0, 1).toUpperCase();
                return firstUp + string.slice(1).toLowerCase();
            }
        },
        methods: {
            toggleImg: function ($event) {

                $event.preventDefault();

                if (this.imgIsFrot) {
                    this.imgIsFrot = false;
                    this.imgUrl = this.imgBackUrl;
                    this.imgTitle = "Imagem de fundo do pokemon " + this.pokemon.name + ".";
                } else {
                    this.imgIsFrot = true;
                    this.imgUrl = this.imgFrontUrl;
                    this.imgTitle = "Imagem frontal do pokemon " + this.pokemon.name + ".";
                }
            },
            goToEachPoke(pokename){
                return "/pokemon/" + pokename;
            }
        },

        created() {
            console.log(this.pokemon.url);
            axios.get(this.pokemon.url).then((response) => {

                //console.log( response.data.results);
                //this.pokes = response.data.results;
                this.imgFrontUrl = response.data.sprites.other.dream_world.front_default;//front_default;
                this.imgBackUrl = response.data.sprites.back_default;

                this.imgUrl = this.imgFrontUrl;
                this.imgTitle = "Imagem frontal do pokemon " + this.pokemon.name + ".";

                this.pokeType = response.data.types[0].type.name;
            });
        },
    }
</script>

<style scoped>

    .hide{
        display: none;
    }

    .content {
        display: flex;
        justify-content: space-between;
        padding-left: 1.2rem;
        padding-right: 1.2rem;
        width: 100%;
    }

    .content h3 {
        margin: 0;
    }

    .content a {
        width: 2rem;
        height: 2rem;
        font-size: 20pt;
        padding: 0;
    }

    .content small {
        overflow: hidden;
    }

    .media-content {
        display: flex;
        position: relative;
        align-items: center;
        height: 64px;
        justify-content: space-between;
    }

    article {
        padding: 0 !important;
    }

    .toggleBtn {
        display: block;
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        width: 1.5rem;
        height: 1.5rem;
        padding: 0;
        line-height: 1.3;
        border-radius: 0.18rem;
        background-image: url("../assets/icons/update-img.png");
        background-size: 80%;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0.2;
    }

    .toggleBtn:hover {
        opacity: 0.6;
    }

    .data-poke small{

    }

    @media only screen and (max-width: 468px) {
        .content h3 {
            font-size: 1.3em;
            line-height: 1.6;
        }
    }
</style>