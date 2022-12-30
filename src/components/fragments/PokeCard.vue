<template>
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
</template>

<script>
export default {
  name: "PokeCard",
  props: {
    type: String,
    name: String,
    order: String,
    exper: Number
  },
  filters: {
    allUpCase(text){
      return text.toUpperCase();
    }
  }
}
</script>

<style scoped>

</style>