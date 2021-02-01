window.onload = function(){
	fizzbuzz();
}

function fizzbuzz() {
  // Enter your code here
  var fizzBuzzDiv = document.getElementById('fizzBuzzDiv');

  for(var i = 0; i < 100; i++){
    if(i%3 == 0 && i%5 != 0){
	  fizzBuzzDiv.innerHTML += " fizz ";
	}
    if(i%3 != 0 && i%5 == 0){
      fizzBuzzDiv.innerHTML += " buzz ";
	}
    if(i%3 == 0 && i%5 == 0){
      fizzBuzzDiv.innerHTML += " fizzbuzz "
	}
  }
}
