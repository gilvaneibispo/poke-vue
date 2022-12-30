<template>
  <div class="container is-widescreen gb-main-container gb-box-page">

    <div v-if="!isLoading">
      <div class="columns">
        <div class="column is-align-content-center">
          <h3 class="title is-3 has-text-centered">Encontre seu Pokemon favorito</h3>
        </div>
      </div>

      <div v-for="(poke, index) in pokes" :key="poke.name" class="box">
        <poke-list-item :index="index + 1" :pokemon="poke"></poke-list-item>
      </div>

      <div class="gb-alert-load">
        <div class="message is-link">
          <div v-if="loadingMore" class="message-body">
            Carregando...
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="gb-alert-preload">
        <div class="message is-link">
          <div class="message-body">
            Carregando...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PokeListItem from "@/components/fragments/PokeListItem";
import axios from "axios";
import {poke_api} from "@/app_config";

export default {
  name: "Home",
  components: {PokeListItem},

  /*
  comments: {
    PokeListItem
  },

   */
  data() {
    return {
      pokes: [],
      text: "",
      api_offset: 0,
      api_limit: 20,
      isEndPage: false,
      loadingMore: false,
      isLoading: true
    }
  },
  mounted() {
    //this.app2 = document.querySelector('.feed-user-area');
    document.addEventListener('scroll', this.scrollHandler);
  },
  methods: {

    apiResponseHandler(response) {

      response.data.results.map(item => {
        this.pokes.push(item);
      });

      this.loadingMore = false;

      if (this.isLoading)
        this.isLoading = false;


      console.log(response);
    },

    readMoreApi() {
      this.loadingMore = true;

      let url = `${poke_api}?offset=${this.api_offset}&limit=${this.api_limit}`
      axios.get(url).then(res => this.apiResponseHandler(res));
    },

    scrollHandler() {


      let bottomOfWindow = (
          document.documentElement.scrollTop +
          document.documentElement.clientHeight >=
          document.documentElement.scrollHeight);

      if (bottomOfWindow) {

        this.api_offset = this.api_offset + this.api_limit;
        this.readMoreApi();
      }
    },
  },
  created() {
    this.readMoreApi();
    //axios.get(this.apiUrl).then((response) => {

    //   this.pokes = response.data.results;
    // });
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

.gb-alert-preload,
.gb-alert-load {
  display: flex;
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  padding: 0 3rem 2rem 3rem;
  justify-content: center;
}

.gb-alert-preload{
  position: relative;
  margin-bottom: calc(100vh - 16rem);
}


.message {
  display: inline-block;
}

.message-body {
  padding: 0.5rem 1rem;
  font-size: 18pt;
  font-style: italic;
}
</style>