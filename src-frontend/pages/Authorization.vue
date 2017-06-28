<template>
  <div class="container">
    <h1 class="text-center">Вход</h1>
    <div class="authorization-form">
      <input type="email" placeholder="Email">
      <input type="password" placeholder="Пароль">
      <button type="button" class="btn btn-block">Войти</button>
    </div>
  </div>
</template>

<script>
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