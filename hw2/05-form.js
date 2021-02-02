// Enter your code here
function submitBtn_Click(){
    //prepare user form data to be send to the console
    var nameLabel = "Name: "
    var userInputName = document.getElementById("name").value;
    var name = nameLabel.concat(userInputName);
    var emailLabel = "Email: "
    var userInputEmail = document.getElementById("email").value;
    var email = emailLabel.concat(userInputEmail);
    var feedbackLabel = "Feedback: "
    var userInputFeedback = document.getElementById("message").value;
    var feedback;
    var checkboxSelection = document.getElementById("checkbox1").checked;

    //check if the user left any feedback
    if(userInputFeedback.length == 0){
        feedback = feedbackLabel.concat("none");
    }
    else{
        feedback = feedbackLabel.concat(userInputFeedback);
    }

    //send user form data to the console
    console.log(name);
    console.log(email);
    console.log(feedback);
    if(checkboxSelection){
        console.log("Newsletter: Yes, I would like to join the newsletter.");
    }
    else{
        console.log("Newsletter: No, I don't want to join the newsletter.");
    }
}