<template>
  <div class="container is-widescreen">
    <div class="columns">
      <div class="column is-align-content-center">
        <h3 class="title is-3 has-text-centered">Descobrindo mais...</h3>
      </div>
    </div>
    <div class="level">
      <div class="level-item has-text-centered">
        <div>
          <figure class="image">
            <div v-if="isLoading">
              <loading/>
            </div>
            <img v-else :src="imgPath">
          </figure>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <poke-card :type="type" :name="name" :order="order" :exper="exper"/>
      </div>
    </div>
  </div>
</template>

<script>
//import PokeCard from "@/components/fragments/PokeCard";
import axios from "axios";
import {poke_api} from "@/app_config";
import PokeCard from "@/components/fragments/PokeCard";
import Loading from "@/components/fragments/Loading";
export default {
  name: "Details",
  components: {
    Loading,
    PokeCard
    //PokeCard
  },
  data() {

    return {
      imgPath: String,
      name: String,
      type: String,
      order: Number,
      exper: Number,
      isLoading: true
    }
  },
  methods: {
    loadData() {

      let pokename = this.$route.params.pokename;

      axios.get(`${poke_api}/${pokename}`).then((response) => {

        let data = response.data;
        console.log(data);
        this.imgPath = data.sprites.other["official-artwork"].front_default;//data.sprites.other.dream_world.front_default;
        this.name = pokename;
        this.type = data.types[0].type.name
        this.order = data.order;
        this.exper = data.base_experience;

        this.isLoading = false;
      });
    }
  },
  created() {
      this.loadData();
  }
}
</script>

<style scoped>
figure{
  display: inline-block;
  position: relative;
  height: 22rem;
}

figure img{
  display: block;
  position: relative;
  height: 100%;
}

.container{
  padding-top: 2rem;
  padding-bottom: 1.5rem;
}
</style>