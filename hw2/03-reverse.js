// Enter your code here
function reverseNum(){
    var errorDiv = document.getElementById('errorDiv');
    errorDiv.innerText = "";
    outputDiv.innerText = "";
    var userInputedNumber = Number(document.getElementById('input').value);
    userInputedNumber.value = 45;
    if(userInputedNumber < 100000000 && userInputedNumber > 9999999){
        outputDiv.innerText += userInputedNumber;
        outputDiv.innerText += " -> "
        outputDiv.innerText += reverseHelper(userInputedNumber);
    }
    else{
        errorDiv.innerText = "Error: Please enter an 8 digit number.";
    }
}

//reverseHelper() adapted from code found at
//https://www.freecodecamp.org/news/js-basics-how-to-reverse-a-number-9aefc20afa8d/
function reverseHelper(num) {
    return (
      parseFloat(
        num
          .toString()
          .split('')
          .reverse()
          .join('')
      )
    )                 
  }