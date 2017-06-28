<template>
  <div class="container">
    <h1 class="text-center">Вход</h1>
    <div class="authorization-form" v-if="!userEmail">
      <input type="email" v-model="email" placeholder="Email">
      <input type="password" v-model="password" placeholder="Пароль">
      <button type="button" class="btn btn-block" @click="authorise()">Войти</button>
    </div>
    <div v-else class="text-center">
      Вы авторизованы.
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
      }
    },
    computed: {
      userEmail () {
          return this.$store.state.authUser.email
      }
    },
    methods: {
      authorise () {
        this.$store.dispatch('AUTH_USER', {
            email: this.email,
            password: this.password
        })


      },
    },
  }
</script>

<style lang="scss">
  .authorization-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 300px;
    margin: auto;
  }

  input {
    margin-bottom: 20px;
  }

</style>