<script setup lang="ts">
import { defineProps } from 'vue';
import { store } from '@/store';

type Props = {
  buttonType: 'main' | 'clear' | 'equal';
};

defineProps<Props>();
</script>

<template>
  <button type="button" class="button" :class="`button-${buttonType} button-${buttonType}--theme-${store.theme}`">
    <span class="button__text">
      <slot />
    </span>
  </button>
</template>

<style scoped lang="scss">
@import "../styles/_utils";

.button {
  position: relative;
  height: 60px;
  border-radius: 10px;
  transition-duration: 100ms;

  &:active {
    transform: translateY(3px);
  }

  &__text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.button-main {
  &--theme-blue {
    background-color: $c_theme-blue_main-key-bg;
    color: $c_theme-blue_main-key-text;
    box-shadow: $c_theme-blue_main-key-shadow;

    &:hover {
      background-color: $c_white;
    }

    &:active {
      box-shadow: $c_theme-blue_main-key-shadow-active;
    }
  }

  &--theme-white {
    background-color: $c_theme-white_main-key-bg;
    color: $c_theme-white_main-key-text;
    box-shadow: $c_theme-white_main-key-shadow;

    &:hover {
      background-color: $c_white;
    }

    &:active {
      box-shadow: $c_theme-white_main-key-shadow-active;
    }
  }

  &--theme-purple {
    background-color: $c_theme-purple_main-key-bg;
    color: $c_theme-purple_main-key-text;
    box-shadow: $c_theme-purple_main-key-shadow;

    &:hover {
      background-color: $c_theme-purple_main-key-bg-hover;
    }

    &:active {
      box-shadow: $c_theme-purple_main-key-shadow-active;
    }
  }
}

.button-clear {
  @extend %secondary-text;
  text-transform: uppercase;
  color: $c_white;

  &--theme-blue {
    background-color: $c_theme-blue_del-key-bg;
    box-shadow: $c_theme-blue_del-key-shadow;

    &:hover {
      background-color: $c_theme-blue_del-key-bg-hover;
    }

    &:active {
      box-shadow: $c_theme-blue_del-key-shadow-active;
    }
  }

  &--theme-white {
    background-color: $c_theme-white_del-key-bg;
    box-shadow: $c_theme-white_del-key-shadow;

    &:hover {
      background-color: $c_theme-white_del-key-bg-hover;
    }

    &:active {
      box-shadow: $c_theme-white_del-key-shadow-active;
    }
  }

  &--theme-purple {
    background-color: $c_theme-purple_del-key-bg;
    box-shadow: $c_theme-purple_del-key-shadow;

    &:hover {
      background-color: $c_theme-purple_del-key-bg-hover;
    }

    &:active {
      box-shadow: $c_theme-purple_del-key-shadow-active;
    }
  }
}

.button-equal {
  &--theme-blue {
    background-color: $c_theme-blue_equal-key-bg;
    color: $c_white;
    box-shadow: $c_theme-blue_equal-key-shadow;

    &:hover {
      background-color: $c_theme-blue_equal-key-bg-hover;
    }

    &:active {
      box-shadow: $c_theme-blue_equal-key-shadow-active;
    }
  }

  &--theme-white {
    background-color: $c_theme-white_equal-key-bg;
    color: $c_white;
    box-shadow: $c_theme-white_equal-key-shadow;

    &:hover {
      background-color: $c_theme-white_equal-key-bg-hover;
    }

    &:active {
      box-shadow: $c_theme-white_equal-key-shadow-active;
    }
  }

  &--theme-purple {
    background-color: $c_theme-purple_equal-key-bg;
    color: $c_theme-purple_equal-key-text;
    box-shadow: $c_theme-purple_equal-key-shadow;

    &:hover {
      background-color: $c_theme-purple_equal-key-bg-hover;
    }

    &:active {
      box-shadow: $c_theme-purple_equal-key-shadow-active;
    }
  }
}
</style>
