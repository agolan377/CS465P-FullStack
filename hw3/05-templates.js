const { json } = require("body-parser");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.set("views", __dirname + "/views");
app.set("view engine", "pug");

// Add your code below
const rp = require("request-promise");
app.get("/main", (req, res) => {
  rp("https://restcountries.eu/rest/v2/all?fields=name;capital;")
    .then((body) => {
      var data = JSON.parse(body);
      var returnString = "";
      for (var i = 0; i < data.length; i++) {
        2;
        returnString += data[i].name + ": " + data[i].capital + "<br/>";
      }
      res.send(returnString);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/populous", (req, res) => {
  rp("https://restcountries.eu/rest/v2/all?fields=name;population;")
    .then((body) => {
      var data = JSON.parse(body);

      data.sort(function (itemA, itemB) {
          var temp = itemB.population - itemA.population;
        return itemB.population - itemA.population;
      });

      var returnString = "";
      for (var i = 0; i < data.length; i++) {
        if (data[i].population >= 20000000) {
          returnString += data[i].name + ": " + data[i].population + "<br/>";
        }
      }
      res.send(returnString);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
