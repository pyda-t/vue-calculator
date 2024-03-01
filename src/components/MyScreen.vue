<script setup lang="ts">
import { store } from '@/store';

type Props = {
  output: string;
};

defineProps<Props>();
</script>

<template>
  <div class="screen" :class="`screen--theme-${store.theme}`">
    <span class="screen__text">
      {{ output || 0 }}
    </span>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/_utils";

.screen {
  display: flex;
  justify-content: end;
  max-width: $max-content-width;
  border-radius: $border-radius;
  @include adaptive-value('padding-top', 40, 29);
  @include adaptive-value('padding-inline', 32, 24);
  @include adaptive-value('padding-bottom', 36, 22);
  @extend %screen-text;

  &--theme-blue {
    background-color: $c_theme-blue_screen-bg;
    color: $c_white;
  }

  &--theme-white {
    background-color: $c_theme-white_screen-bg;
    color: $c_theme-white_main-key-text;
  }

  &--theme-purple {
    background-color: $c_theme-purple_toggle-keypad-screen-bg;
    color: $c_theme-purple_main-key-text;
  }

  &__text {
    display: flex;
    justify-content: end;
    overflow: hidden;
  }
}
</style>