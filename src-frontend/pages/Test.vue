<template>
  <div class="container">
    <h1>Тестовая страница</h1>
    <input v-model="itemValue" type="text">
    <button @click="addItem">Добавить</button>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.value }}
        <button @click="deleteItem(item.id)">Удалить</button>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    data () {
      return {
          itemValue: '',
      }
    },
    computed: {
      items () {
          return this.$store.state.items
      }
    },
    methods: {
      addItem () {
          let value = this.itemValue;
          if (value) {
              this.$store.dispatch('ADD_ITEM', { value })
          }
          this.itemValue = '';

      },
      deleteItem (id) {
          this.$store.commit('DELETE_ITEM', id );
      }

    },
}
</script>

<style lang="scss">
  h1 {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
  }
</style>