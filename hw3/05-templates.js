const { json } = require("body-parser");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.set("views", __dirname + "/views");
app.set("view engine", "pug");
app.use(express.static("/public"));

// Add your code below
const rp = require("request-promise");
app.get("/main", (req, res) => {
  rp("https://restcountries.eu/rest/v2/all?fields=name;capital;")
    .then((body) => {
      let data = JSON.parse(body);
      let returnString = "";
      for (let i = 0; i < data.length; i++) {
        returnString +=
          "<span>" +
          data[i].name +
          ": " +
          data[i].capital +
          "</span>" +
          "<br/>";
      }

      res.render("index", {
        returnVal: returnString,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/populous", (req, res) => {
  rp("https://restcountries.eu/rest/v2/all?fields=name;population;")
    .then((body) => {
      let data = JSON.parse(body);

      data.sort(function (itemA, itemB) {
        let temp = itemB.population - itemA.population;
        return itemB.population - itemA.population;
      });

      let returnString = "";
      for (let i = 0; i < data.length; i++) {
        if (data[i].population >= 20000000) {
          returnString += data[i].name + ": " + data[i].population + "<br/>";
        }
      }
      returnString += "<";
      res.render("index", {
        returnVal: returnString,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/regions", (req, res) => {
  rp("https://restcountries.eu/rest/v2/all?fields=region;name;")
    .then((body) => {
      let data = JSON.parse(body);

      let returnString = "";
      let asiaCount = 0;
      let africaCount = 0;
      let americasCount = 0;
      let europeCount = 0;
      let oceaniaCount = 0;
      for (let i = 0; i < data.length; i++) {
        switch (data[i].region) {
          case "Asia":
            asiaCount++;
            break;
          case "Africa":
            africaCount++;
            break;
          case "Americas":
            americasCount++;
            break;
          case "Europe":
            europeCount++;
            break;
          case "Oceania":
            oceaniaCount++;
            break;
          default:
            console.log("Err: problem with region data in item " + i);
        }
      }
      returnString +=
        "Africa: " +
        africaCount +
        "<br/>" +
        "Americas: " +
        americasCount +
        "<br/>" +
        "Asia: " +
        asiaCount +
        "<br>" +
        "Europe: " +
        europeCount +
        "<br/>" +
        "Oceania: " +
        oceaniaCount +
        "<br/>";

      res.render("index", {
        returnVal: returnString,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
