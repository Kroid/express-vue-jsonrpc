<template>
  <header>
    <div class="container">
      <div class="header-flex-container">
        <router-link class="header-logo" to="/">
          <div>goocean</div>
        </router-link>
        <div class="header-links">
          <div class="header-link-item">
            <router-link to="/test">test</router-link>
          </div>
          <div class="header-link-item">
            <router-link to="/">Организовать путешествие</router-link>
          </div>
          <div class="header-link-item">
            <router-link to="/">Владельцам яхт</router-link>
          </div>
          <div class="header-link-item">
            <router-link to="/">Помощь</router-link>
          </div>
          <div v-if="userEmail">{{ userEmail }}</div>
          <div v-if="!userEmail" class="header-link-item">
            <router-link to="/registration">Регистрация</router-link>
          </div>
          <div v-if="!userEmail" class="header-link-item">
            <router-link to="/authorization">Войти</router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  computed: {
      userEmail () {
          return this.$store.state.authUser.email
      }
  },
}
</script>

<style lang="scss">
  @import "../styles/variables";

  header {
    box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.17);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }

  .header-flex-container {
    display: flex;
    height: 80px;
  }

  .header-logo {
    display: flex;
    align-items: center;
    font-size: 32px;
    color: gray !important;
    width: 150px;
    text-decoration: none !important;
  }

  .header-links {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
  }

  .header-link-item {
    margin: 0 20px;

    a {
      color: inherit;
      text-decoration: none;
      font-size: 14px;
      padding-bottom: 5px;
      text-transform: uppercase;

      &:hover {
        border-bottom: solid 2px $brand-color;
      }
    }
  }
</style>
