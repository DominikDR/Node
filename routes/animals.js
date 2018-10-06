const express = require('express');
const sample = require('lodash/sample')
const routes = express.Router();

const species = ['elephant', 'cat', 'dog', 'snake', 'bee', 'bird'];

routes.get('/', (req, res) => {
    const queryAmount = req.query.amount || 1;
    const speciesToShow = [];
    for (let i = 0 ; i < queryAmount ; i++) {
        speciesToShow.push(sample(species));
    }
    res.send({
        animals: speciesToShow,
    });
})
module.exports = routes;

//Create request to server in fetch for this animals and show them on site