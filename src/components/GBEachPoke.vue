<template>
    <div class="container is-widescreen">
        <div class="level">
            <div class="level-item has-text-centered">
                <div>
                    <figure class="image">
                        <img :src="imgPath">
                    </figure>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div class="container">

                    <div class="box" style="padding: 0; margin: 0 auto">
                        <div class="notification is-primary">
                            <h1 class="title">{{name | allUpCase}}</h1>
                            <hr>
                            <div class="content">
                                <span>Type: <em>{{type | allUpCase}}</em></span><br/>
                                <span>Name: <em>{{name | allUpCase}}</em></span><br/>
                                <span>Nível: <em>{{order}}</em></span><br/>
                                <span>PC: <em>{{exper}}</em></span><br/>
                            </div>
                            <button href="#" class="button is-outlined is-small is-info is-inverted" @click.prevent="goBack">Voltar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import axios from "axios";

    export default {
        name: "GBEachPoke",
        created() {
            this.loadData();
        },
        data() {

            return {
                imgPath: String,
                name: String,
                type: String,
                order: Number,
                exper: Number
            }
        },
        methods: {
            getURL: function (uri) {
                return "https://pokeapi.co/api/v2/pokemon/" + uri;
            },
            loadData() {

                let pokename = this.$route.params.pokename;

                axios.get(this.getURL(pokename)).then((response) => {

                    let data = response.data;

                    this.imgPath = data.sprites.other["official-artwork"].front_default;//data.sprites.other.dream_world.front_default;
                    this.name = pokename;
                    this.type = data.types[0].type.name
                    this.order = data.order;
                    this.exper = data.base_experience;

                    console.log(data);
                });
            }
        },
        filters: {
            allUpCase(text){
                return text.toUpperCase();
            }
        }
    }
</script>

<style scoped>
    hr{
        height: 1px;
        opacity: 0.6;
    }

    .notification {
        padding: 1.5rem;
    }
</style>