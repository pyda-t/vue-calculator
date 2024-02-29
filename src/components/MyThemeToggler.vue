<script setup lang="ts">
  import { store } from '@/store';
</script>

<template>
  <div class="theme-toggler">
    <p>
      THEME
    </p>

    <button
      type="button"
      class="theme-toggler__switcher"
      :class="`theme-toggler__switcher--theme-${store.theme}`"
      @click="store.toggleTheme"
    >
      <div
        class="theme-toggler__circle"
        :class="`theme-toggler__circle--theme-${store.theme}`"
      />
    </button>
  </div>
</template>

<style scoped lang="scss">
  @import "../styles/_utils";

  $switcher-padding: 5px;
  $double-switcher-padding: $switcher-padding * 2;
  $circle-size: 16px;
  $half-circle-size: calc($circle-size / 2);
  $switcher-width: 61px - $double-switcher-padding;
  $half-switcher-width: calc($switcher-width / 2);

  .theme-toggler {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    column-gap: 26px;
    @extend %small-text;

    &__switcher {
      position: relative;
      display: flex;
      justify-content: left;
      width: $switcher-width + $double-switcher-padding;
      padding: $switcher-padding;
      height: $circle-size + $double-switcher-padding;
      border-radius: 13px;
      transition-duration: $amin-time;

      &--theme-blue {
        background-color: $c_theme-blue_toggle-keypad-bg;
      }

      &--theme-white {
        background-color: $c_theme-white_toggle-keypad-bg;
      }

      &--theme-purple {
        background-color: $c_theme-purple_toggle-keypad-screen-bg;
      }
    }

    &__circle {
      @include circle($circle-size);
      transition-duration: $amin-time;

      &--theme-blue {
        transform: translateX(0);
        background-color: $c_theme-blue_equal-key-bg;
      }

      &--theme-white {
        transform: translateX($half-switcher-width - $half-circle-size);
        background-color: $c_theme-white_equal-key-bg;
      }

      &--theme-purple {
        transform: translateX($switcher-width - $circle-size);
        background-color: $c_theme-purple_equal-key-bg;
      }
    }
  }
</style>