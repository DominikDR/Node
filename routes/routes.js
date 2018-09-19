const Express = require('express');
const app = Express();

module.exports.route = app.get( '/hello', (req, res) => {
    res.send('Hello dupa');
})

//${res.params.name}