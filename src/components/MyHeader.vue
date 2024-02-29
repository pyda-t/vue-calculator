<script setup lang="ts">
  import { store } from '../store';

// Components
  import MyThemeToggler from './MyThemeToggler.vue';
</script>

<template>
  <header class="header" :class="`header--theme-${store.theme}`">
    <p class="header__logo">calc</p>

    <MyThemeToggler />
  </header>
</template>

<style scoped lang="scss">
  @import "../styles/_utils";
  .header {
    display: flex;
    align-self: center;
    justify-content: space-between;
    padding-left: 7px;
    transition-duration: $amin-time;

    &--theme-blue {
      color: $c_white;
    }

    &--theme-white {
      color: $c_theme-white_main-key-text;
    }

    &--theme-purple {
      color: $c_theme-purple_main-key-text;
    }

    &__logo {
      @extend %logo-text;
    }
  }
</style>