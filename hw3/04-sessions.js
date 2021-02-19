const express = require("express");
const session = require("express-session");
const app = express();
const port = process.env.PORT || 5000;

// Add your code below
app.use(session({ secret: "secretsecretivegotasecret" }));
global.globalArr = new Array();
let sess;

app.get("*", (req, res) => {
  // Add your code below
  res.write("Currently on route: " + req.originalUrl + "\n\n");
  if (sess === undefined) {
    sess = req.session;
  }
  if (sess.resultString === undefined) {
    res.write(`Welcome to http://localhost:${port}/`);
  } else {
    res.write("Previously visited: " + "\n");
    res.write(sess.resultString);
  }
  if (sess.resultString === undefined) {
    sess.resultString = req.originalUrl + "\n";
  } else {
    sess.resultString += req.originalUrl + "\n";
  }
  res.end();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
