const Express = require('express');
const router = Express.Router();

router.get('/:name', (req, res, next) => {
    res.end(`Hello ${res.params.name}`);
});

module.exports = router;