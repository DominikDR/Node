const express = require('express');
const routes = express.Router();

routes.get('/hello', (req, res) => {
    res.send('Hello');
});

routes.get('/hello/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}`);
});

routes.get('/animals', (req, res) => {
    const species = ['elephant', 'cat', 'dog', 'snake', 'bee', 'bird'];
    const getRandomSpecies = () => {
        return species[Math.floor(Math.random() * species.length)];
    };
    const speciesToShow = [getRandomSpecies()];
    for (let i = 0 ; i < req.query.amount-1 ; i++) {
        speciesToShow.push(getRandomSpecies());
    }
    res.send({
        animals: speciesToShow,
    });
})
module.exports = routes;

//Stworzyc zapytanie do serwera o te zwierzatka w fetch i wyswietlic