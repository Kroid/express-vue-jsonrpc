<template>
<div id='app'>
  <app-header></app-header>
  <div class="content">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import AppHeader from './componets/AppHeader.vue'

export default {
    name: 'index-page',
    components: {AppHeader}
}
</script>

<style lang="scss">
  @import "./styles/common";

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 16px;
    margin: 0;
    color: $default-font-color;
    overflow-y: scroll;
  }

  .content {
    padding-top: 80px;
  }
  .container {
    width: 100%;
    max-width: 1200px;
    margin: auto;
  }

  .text-center {
    text-align: center;
  }
</style>