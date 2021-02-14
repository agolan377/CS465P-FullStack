const { json } = require("body-parser");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.set("views", __dirname + "/views");
app.set("view engine", "pug");
app.use(express.static('/public'));

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
     
      res.render("index", {
        body: returnString
      });
        
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
      returnString += "<";
      res.render("index", {
        body: returnString
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/regions", (req, res) => {
    rp("https://restcountries.eu/rest/v2/all?fields=region;name;")
      .then((body) => {
        var data = JSON.parse(body);
  
        var returnString = "";
        var asiaCount = 0;
        var africaCount = 0;
        var americasCount = 0;
        var europeCount = 0;
        var oceaniaCount = 0;
        for (var i = 0; i < data.length; i++) {
            switch(data[i].region){
                case 'Asia':
                    asiaCount++;
                    break;
                case 'Africa':
                    africaCount++;
                    break;
                case 'Americas':
                    americasCount++;
                    break;
                case 'Europe':
                    europeCount++;
                    break;
                case 'Oceania':
                    oceaniaCount++;
                    break;
                default:
                    console.log("Err: problem with region data in item " + i)
            }
        }
        returnString += "Africa: " + africaCount + "<br/>" + "Americas: " + americasCount + "<br/>" + "Asia: " + asiaCount + "<br>" + 
        "Europe: " + europeCount + "<br/>" + "Oceania: " + oceaniaCount + "<br/>";
        
        res.render("index", {
            returnVal: returnString
          });
      })
      .catch((err) => {
        console.log(err);
      });
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
