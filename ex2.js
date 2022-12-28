function simpleCompositeNumbers(num) {
  if (num > 1000) {
    return console.log("Too much");
  }

  return (num % 2 === 0 || num % 3 === 0) &&
    num !== 0 &&
    num !== 1 &&
    num !== 2 &&
    num !== 3
    ? console.log("Составное число")
    : console.log("Простое число");
}

simpleCompositeNumbers(84);
