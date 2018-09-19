const Express = require('express');
const route = require('./routes/routes.js')
/* const urlToImage = require('./assets/somethingWrong') */
const hostname = 'localhost';
const port = 3000;
const app = new Express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});
app.use('/', Express.static('assets'));
/* app.use(Express.static('/assets')); */

app.get('/hello', (req, res) => {
    res.send('Hello');
});

app.get('/hello/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}`);
});


//listen for request on port 3000, and as a callback function have the port listened on logged
app.listen(3000, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

/* module.exports = app; */
// w pliku routes.js znajdujacym sie w folderze routes obsluzyc zapytanie pod adres /hello (ma byc get). W query params przekazac parametr name i API ma odpowiadac Hello, {name}. A jak nic nie wyśle to zwykłe hello bez ,
//jak sie wejdze na localhost:3000 to na stronie ma byc ładny obrazek z tekstem.