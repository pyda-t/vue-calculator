<script setup lang="ts">
  import { ref } from 'vue';

  // Components
  import MyScreen from './MyScreen.vue';
  import MyKeypad from './MyKeypad.vue';

  const output = ref('');
  const previousValue = ref('');
  const operation = ref('');
  const operationIsActive = ref(false);
  const calculated = ref(false);

  const remove = () => {
    output.value = '';
  };

  const reset = () => {
    remove();
    previousValue.value = '';
    operation.value = '';
    operationIsActive.value = false;
    calculated.value = false;
  };

  const addNumber = (number: string) => {
    if (operationIsActive.value || calculated.value) {
      output.value = '';
      operationIsActive.value = false;
      calculated.value = false;
    }

    output.value += number;
  };

  const addDot = () => {
    const dot = '.';

    if (output.value.includes(dot)) {
      return;
    }

    output.value += dot;
  };

  const setOperation = (operationName: string) => {
    if (previousValue.value) {
      calculate()
    }

    operation.value = operationName;
    previousValue.value = output.value;
    operationIsActive.value = true;
  };

  const calculate = () => {
    let sum = 0;
    const firstNumber = +previousValue.value;
    const secondNumber = +output.value;

    switch (operation.value) {
      case 'add':
        sum = firstNumber + secondNumber;
        break;

      case 'subtract':
        sum = firstNumber - secondNumber;
        break;

      case 'multiply':
        sum = firstNumber * secondNumber;
        break;

      case 'divide':
        sum = firstNumber / secondNumber;
        break;

      default:
        sum = 0;
    }

    previousValue.value = '';
    calculated.value = true;
    output.value = sum.toString();
  };
</script>

<template>
  <div class="calculator">
    <MyScreen :output="output" />

    <MyKeypad
      @addNumber="addNumber"
      @addDot="addDot"
      @setOperation="setOperation"
      @calculate="calculate"
      @remove="remove"
      @reset="reset"
    />
  </div>
</template>

<style scoped lang="scss">
@import "../styles/_utils";

.calculator {
  display: grid;
  row-gap: 24px;
}
</style>