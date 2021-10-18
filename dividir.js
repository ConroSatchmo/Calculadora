function dividir(number1, number2) {
  if (number2 !== 0) {
    return number1 / number2;
  } else {
    return "No se puede dividir por cero";
  }
}

module.exports = dividir;
