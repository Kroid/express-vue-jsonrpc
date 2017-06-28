<template>
  <div class="container">
    <h1 class="text-center">Регистрация</h1>
    <div class="registration-form">
      <input type="email" placeholder="Введите email">
      <input type="text" placeholder="Введите ваше имя">
      <input type="password" placeholder="Придумайте пароль">
      <input type="password" placeholder="Повторите пароль">
      <button type="button" class="btn btn-block">Зарегистрироваться</button>
    </div>
  </div>
</template>

<script>
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