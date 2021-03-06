const express = require('express');
const animalsRoute = require('./routes/animals');
const helloRoute = require('./routes/hello');
/* const urlToImage = require('./assets/somethingWrong.jpg') */
const hostname = 'localhost';
const port = 3000;
const app = new express();


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});

app.use(express.static('dist'));
app.use('/animals', animalsRoute);
app.use('/hello', helloRoute);

//listen for request on port 3000, and as a callback function have the port listened on logged
app.listen(3000, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// w pliku routes.js znajdujacym sie w folderze routes obsluzyc zapytanie pod adres /hello (ma byc get). W query params przekazac parametr name i API ma odpowiadac Hello, {name}. A jak nic nie wyśle to zwykłe hello bez ,
//jak sie wejdze na localhost:3000 to na stronie ma byc ładny obrazek z tekstem.