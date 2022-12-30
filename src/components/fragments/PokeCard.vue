<template>
  <div class="container">
    <div class="box" style="padding: 0; margin: 0 auto">
      <div class="notification is-primary">
        <h1 class="title">{{ name | FirstUpCase }}</h1>
        <hr>
        <div class="content">
          <span>Tipo: <em>{{ type | FirstUpCase }}</em></span><br/>
          <span>Nome: <em>{{ name | FirstUpCase }}</em></span><br/>
          <span>Nível: <em>{{ order }}</em></span><br/>
          <span>PC: <em>{{ exper }}</em></span><br/>
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
    FirstUpCase(text) {
      let first = text.substring(0, 1).toUpperCase();
      let more = text.substring(1, text.length - 1).toLowerCase();
      return `${first}${more}`;
    }
  }
}
</script>

<style scoped>

</style>