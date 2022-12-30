<template>
  <div class="container is-widescreen">
    <div class="columns">
      <div class="column is-align-content-center">
        <h3 class="title is-3 has-text-centered">Sobre</h3>
      </div>
    </div>
    <div class="level">
      <div class="content">

        <h5 class="is-5">Resumo</h5>

        <p>
          Esta aplicação foi criada em minha introdução ao Vue.JS. Ela usa a PokeAPI, Bulma CSS e os principais
          conceitos de desenvolvimento com Vue.JS, tentando simular as condições necessárias às aplicações mais reais.
        </p>

        <h5 class="is-5">Tecnologias utilizadas</h5>

        <ol class="is-lower-alpha">
          <li>Vue.JS</li>
          <li>Bulma CSS</li>
          <li>PokeAPI</li>
        </ol>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>
.container{
  padding-top: 2rem;
  padding-bottom: 2rem;
  min-height: calc(100vh - 10rem);
}
</style>