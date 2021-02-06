// Enter your code here
const fetchUrl = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118";

fetch(fetchUrl)
  .then((response) => response.json())
  .then(function (data) {
    const resultsContainer = document.getElementById("results");
    for (var i = 0; i < data.count; i++) {
      resultsContainer.innerHTML +=
        "<span>" +
        data.results[i].name.charAt(0).toUpperCase() +
        data.results[i].name.slice(1) +
        "</span>";
      if (i != data.count - 1) {
        resultsContainer.innerHTML += " - ";
      }
    }
    resultsContainer.innerHTML +=
      "<br><br><h3>" + data.count + " total pokemons were fetched</h3>";
  })
  .catch(function () {
    console.log("error: request for pokemon data failed.");
  });
