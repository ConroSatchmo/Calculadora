function multiplicar(number1, number2) {
  if (number1 === 0 || number2 === 0) {
    return 0;
  } else {
    return number1 * number2;
  }
}

module.exports = multiplicar;
