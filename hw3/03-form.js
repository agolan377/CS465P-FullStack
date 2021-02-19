const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// Add your code below

app.use(express.urlencoded());

app.post("/submit", (req, res) => {
  // Add your code below
  let message = "";
  let newsletter = "Newsletter: ";

  if (req.body.newsletter !== undefined) {
    newsletter += "Yes, I would like to sign up for the newsletter.";
  } else {
    newsletter += "No, thank you.";
  }

  if (req.body.newsletter === undefined) {
    message += "n/a";
  } else {
    message += res.body.newsletter;
  }

  res.send(
    "Name: " +
      req.body.name +
      "<br/>" +
      "Email: " +
      req.body.email +
      "<br/>" +
      "Comments: " +
      message +
      "<br/>" +
      newsletter
  );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
