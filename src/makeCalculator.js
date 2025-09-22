'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;
  const calcResult = {
    get result() {
      return result;
    },
    add,
    subtract,
    multiply,
    divide,
    reset,
    operate,
  };

  function operate(callback, num) {
    result = callback(num);

    return calcResult;
  }

  function add(num) {
    return result + num;
  }

  function subtract(num) {
    // result -= num;

    return result - num;
  }

  function divide(num) {
    // result /= num;

    return result / num;
  }

  function multiply(num) {
    // result *= num;

    return result * num;
  }

  function reset() {
    result = 0;

    return calcResult;
  }

  return calcResult;
}

module.exports = makeCalculator;
