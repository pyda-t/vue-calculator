<script setup lang="ts">
  import { store } from '@/store';

  // Components
  import MyButton from './MyButton.vue';

  defineEmits(['addNumber', 'addDot', 'setOperation', 'calculate', 'remove', 'reset']);

  const buttonsNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
</script>

<template>
  <div class="keypad" :class="`keypad--theme-${store.theme}`">
    <MyButton
      v-for="buttonNumber, index in buttonsNumbers"
      buttonType="main"
      :key="buttonNumber"
      :class="`keypad__${buttonNumber}`"
      @click="$emit('addNumber', index.toString())"
    >
      {{ index }}
    </MyButton>

    <MyButton buttonType="main" class="keypad__dot" @click="$emit('addDot')">
      .
    </MyButton>

    <MyButton buttonType="main" class="keypad__plus" @click="$emit('setOperation', 'add')">
      +
    </MyButton>

    <MyButton buttonType="main" class="keypad__minus" @click="$emit('setOperation', 'subtract')">
      -
    </MyButton>

    <MyButton buttonType="main" class="keypad__division" @click="$emit('setOperation', 'divide')">
      /
    </MyButton>

    <MyButton buttonType="main" class="keypad__multiplication" @click="$emit('setOperation', 'multiply')">
      x
    </MyButton>

    <MyButton buttonType="clear" class="keypad__del" @click="$emit('remove')">
      del
    </MyButton>

    <MyButton buttonType="clear" class="keypad__res" @click="$emit('reset')">
      reset
    </MyButton>

    <MyButton buttonType="equal" class="keypad__equal" @click="$emit('calculate')">
      =
    </MyButton>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/_utils";

$buttons: zero, one, two, three, four, five, six, seven, eight, nine, plus, minus, division, multiplication, equal, del, res, dot;

.keypad {
  display: grid;
  grid-template-areas:
    "seven eight nine del"
    "four five six plus"
    "one two three minus"
    "dot zero division multiplication"
    "res res equal equal";
  @include adaptive-value('gap', 25, 13);
  border-radius: $border-radius;
  @include adaptive-value('padding', 30, 24);

  &--theme-blue {
    background-color: $c_theme-blue_toggle-keypad-bg;
  }

  &--theme-white {
    background-color: $c_theme-white_toggle-keypad-bg;
  }

  &--theme-purple {
    background-color: $c_theme-purple_toggle-keypad-screen-bg;
  }

  @each $button in $buttons {
    &__#{$button} {
      grid-area: $button;
    }
  }
}
</style>