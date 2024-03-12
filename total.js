function total(numbers) {
    return numbers
    .split(",")
    .map(Number)
    .filter(checkIfInteger)
    .filter(checkIsAnIntegerIsInAValidRange)
    .reduce((acc, curr) => acc + curr, 0);
}

function checkIfInteger(integer) {
    return !isNaN(integer)
}

function checkIsAnIntegerIsInAValidRange(integer) {
  return integer >= 0 && integer <= 1000;
}

module.exports = total;
