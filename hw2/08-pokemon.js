// Enter your code here
const fetchUrl = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118";

fetch(fetchUrl)
  .then((response) => response.json())
  .then(function (data) {
    console.log(data);
    const resultsContainer = document.getElementById("results");
    for (var i = 0; i < data.count; i++) {
      resultsContainer.innerHTML += data.results[i].name;

      if (i != data.count - 1) {
        resultsContainer.innerHTML += " - ";
      }
    }

    var temp = "<h3>";
    var temp2 = temp.concat(data.count);
    var temp3 = temp2.concat(" total pokemons were fetched");
    var formattedOutputString = temp3.concat("</h3>");
    resultsContainer.innerHTML += "<br><br>";
    resultsContainer.innerHTML += formattedOutputString;
  });
