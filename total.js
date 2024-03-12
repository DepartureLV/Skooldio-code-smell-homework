function total(numbers) {
  var result = 0;
  var parts = numbers.split(",");
  for (var i = 0; i < parts.length; i++) {
    var integer = parseInt(parts[i]);
    if (checkIfInteger(integer) && checkIsAnIntegerIsInAValidRange(integer)) {
      result += integer;
    }
  }
  return result;
}

function checkIfInteger(integer) {
    return !isNaN(integer)
}

function checkIsAnIntegerIsInAValidRange(integer) {
  return integer >= 0 && integer <= 1000;
}

module.exports = total;
