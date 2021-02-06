const url = "https://restcountries.eu/rest/v2/all";

// Enter your code here
window.onload = getCountryInfo;

function getCountryInfo() {
  const Http = new XMLHttpRequest();
  const url = "https://restcountries.eu/rest/v2/all?fields=name;population;";
  const countryList = document.getElementById("results");
  var countryData;
  var jsonCountryData;
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    if (Http.readyState === 4) {
      if (Http.status === 200) {
        countryData = Http.responseText;
        jsonCountryData = JSON.parse(countryData);
        for (var i = 0; i < jsonCountryData.length; i++) {
          var countryAndpopulationObj = jsonCountryData[i];
          var countryName = countryAndpopulationObj.name;
          var formattedCountryName = countryName.concat(" - ");
          var countryPopulation = countryAndpopulationObj.population;
          var formattedCountryPopulation = numberWithCommas(countryPopulation);
          var listEntryString = formattedCountryName.concat(
            formattedCountryPopulation
          );
          var entry = document.createElement("li");
          entry.appendChild(document.createTextNode(listEntryString));
          countryList.appendChild(entry);
        }
      } else {
        console.log("Error: failed to retrieve country and population data.");
      }
    }
  };
}

//borrowed from https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}