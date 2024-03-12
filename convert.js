function dollarsToRubles(dollars) {
  const exchangeRate = 1.25;
  const ruplePerDollar = 60;

  const dollarsCount = dollars * exchangeRate;

  return dollarsCount * ruplePerDollar;
}
module.exports = dollarsToRubles;
