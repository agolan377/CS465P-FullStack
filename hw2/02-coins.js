function calculateChange() {
  // Enter your code here
  var dollarAmount = 9.69;
  var dollarCoinCount = 0;
  var quarterCount = 0;
  var dimeCount = 0;
  var nickelCount = 0;
  var pennyCount = 0;

  //find largest denomination coin count for user entered dollar figure
  while (dollarAmount >= 1) {
    dollarCoinCount++;
    dollarAmount--;
  }
  while (dollarAmount >= 0.25) {
    quarterCount++;
    dollarAmount -= 0.25;
  }
  while (dollarAmount >= 0.1) {
    dimeCount++;
    dollarAmount -= 0.1;
  }
  while (dollarAmount >= 0.05) {
    nickelCount++;
    dollarAmount -= 0.05;
  }
  while (dollarAmount >= 0.00) {
    pennyCount++;
    dollarAmount -= 0.01;
  }

  //print results to the console
  console.log("Dollar Coin Count: " + dollarCoinCount);
  console.log("Quarter Count: " + quarterCount);
  console.log("Dime Count: " + dimeCount);
  console.log("Nickel Count: " + nickelCount);
  console.log("Penny Count: " + pennyCount);
}
calculateChange();
