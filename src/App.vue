<script setup lang="ts">
  import { store } from '@/store';

  // Components
  import MyHeader from './components/MyHeader.vue';
  import MyCalculator from './components/MyCalculator.vue';
</script>

<template>
  <div
    class="app"
    :class="`app--theme-${store.theme}`"
  >
    <div class="app__content">
      <MyHeader />

      <MyCalculator />
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import "./styles/_utils";

  .app {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    @include adaptive-value('padding', 40, 24);
    @extend %main-text;
    transition-duration: $amin-time;

    &--theme-blue {
      background-color: $c_theme-blue_main-bg;
    }

    &--theme-white {
      background-color: $c_theme-white_main-bg;
    }

    &--theme-purple {
      background-color: $c_theme-purple_main-bg;
    }

    &__content {
      display: grid;
      row-gap: 32px;
      width: 100%;
      max-width: 540px;
      height: max-content;
    }
  }
</style>
