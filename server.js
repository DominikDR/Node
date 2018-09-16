//Load HTTP module
const http = require("http");
const hostname = 'localhost';
const port = 3000;
const Express = require('express');
const routes = require('./routes/routes.js')

const app = new Express();

routes.get( '/hello', (req, res) => {
    res.end('routes.js', '/hello')
})
//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

    //Set the response HTTP header with HTTP status and Content type
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello world!");
});



//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
// w pliku routes.js znajdujacym sie w folderze routes obsluzyc zapytanie pod adres /hello (ma byc get). W query params przekazac parametr name i API ma odpowiadac Hello, {name}. A jak nic nie wyśle to zwykłe hello bez ,
//jak sie wejdze na localhost:3000 to na stronie ma byc ładny obrazek z tekstem dupa dupa dupa (hahaha).