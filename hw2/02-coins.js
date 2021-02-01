function calculateChange() {
  // Enter your code here
  var dollarAmount = document.getElementById('moneyInput').value;
  var coinOutputDiv = document.getElementById('coinOutputDiv');
  coinOutputDiv.innerHTML = "";
  var dollarCoinCount = 0;
  var quarterCount = 0;
  var dimeCount = 0;
  var nickelCount = 0;
  var pennyCount = 0;
  
//find largest denomination coin count for user entered dollar figure
  while(dollarAmount >= 1){
	dollarCoinCount++;
	dollarAmount--;
  }
    while(dollarAmount >= 0.25){
	quarterCount++;
	dollarAmount-= 0.25;
  }
    while(dollarAmount >= 0.1){
	dimeCount++;
	dollarAmount-= 0.1;
  }
    while(dollarAmount >= 0.05){
	nickelCount++;
	dollarAmount-= 0.05;
  }
    while(dollarAmount >= 0.01){
	pennyCount++;
	dollarAmount-= 0.01;
  }
  
  //print results to the user screen
  coinOutputDiv.innerHTML += "Dollar Coin Count: ";
  coinOutputDiv.innerHTML += dollarCoinCount;
  coinOutputDiv.innerHTML += "<br />";

  coinOutputDiv.innerHTML += "Quarter Count: ";
  coinOutputDiv.innerHTML += quarterCount;
  coinOutputDiv.innerHTML += "<br />";
  
  coinOutputDiv.innerHTML += "Dime Count: ";
  coinOutputDiv.innerHTML += dimeCount;
  coinOutputDiv.innerHTML += "<br />";
  
  coinOutputDiv.innerHTML += "Nickel Count: ";
  coinOutputDiv.innerHTML += nickelCount;
  coinOutputDiv.innerHTML += "<br />";
  
  coinOutputDiv.innerHTML += "Penny Count: ";
  coinOutputDiv.innerHTML += pennyCount;
  coinOutputDiv.innerHTML += "<br />";
}
