// Enter your code here
function validateEmailFormat(){
    var errorDiv = document.getElementById('errorDiv');
    var successDiv = document.getElementById('successDiv');
    successDiv.innerText = "";
    errorDiv.innerText = "";
    const email = document.getElementById("input").value;
    const regex = /[A-Za-z0-9A-Za-z0-9]{1,64}[\@][A-Za-z0-9A-Za-z0-9]{1,255}[\.][a-z]{3}/;
    const validEmail = email.match(regex);
    if(validEmail === null || email !==  validEmail[0]){
        errorDiv.innerText = "Error: Please enter a valid email address.";
    }
    else{
        successDiv.innerText = "Thank you.  This is a valid email address."
    }
}