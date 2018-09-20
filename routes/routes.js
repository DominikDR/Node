const express = require('express');
const routes = express.Router();

routes.get('/hello', (req, res) => {
    res.send('Hello');
});

routes.get('/hello/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}`);
});
module.exports = routes;