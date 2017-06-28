<template>
  <div class="container">
    <h1 class="text-center">Регистрация</h1>
    <div class="registration-form" v-if="!successRegistration">
      <input type="email" v-model.trim="email" placeholder="Введите email">
      <input type="text" v-model="userName" placeholder="Введите ваше имя">
      <input type="password" v-model.trim="password" placeholder="Придумайте пароль">
      <input type="password" v-model.trim="passwordConfirm" placeholder="Повторите пароль">
      <button type="button" class="btn btn-block" @click="register()">Зарегистрироваться</button>
    </div>
    <div v-else class="text-center">
      Вы успешно зарегистрировались. Вам отправлено письмо для подтверждения.
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        userName: '',
        password: '',
        passwordConfirm: '',
      }
    },
    computed: {
      successRegistration () {
        return this.$store.state.successRegistration
      }
    },
    methods: {
      register () {
        if (this.password === this.passwordConfirm) {
          this.$store.dispatch('REGISTER_USER', {
              email: this.email,
              password: this.password
          })
        }
      },
    },
  }
</script>

<style lang="scss">
  .registration-form {
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