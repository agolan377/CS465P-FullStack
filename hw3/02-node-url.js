const http = require("http");
const url = require("url");
const querystring = require("querystring");

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  const routes = [
    "/attributes?hello=world&lorem=ipsum",
    "/items?first=1&second=2&third=3",
  ];

  let getRoutes = () => {
    let result = "";

    routes.forEach(
      (elem) => (result += `<li><a href="/${elem}">${elem}</a></li>`)
    );

    return result;
  };

  if (req.url === "/") {
    let routeResults = getRoutes();

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<h1>Exercise 02</h1>`);
    res.write(`<ul> ${routeResults} </ul>`);
  }

  // Add your code below
  else {
    var query = req.url.split("?")[1];
    var params = querystring.parse(query);
    var resultString = "";

    for (const [key, value] of Object.entries(params)) {
      resultString += `<tr><td>${key}</td><td>${value}</td></tr>`;
    }

    res.write(
      "<head><style> table, th, td {border: 1px solid black;}</style></head>"
    );
    res.write(`<table>${resultString}</table>`);
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
