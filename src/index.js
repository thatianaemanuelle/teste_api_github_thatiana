
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const { PORT } = require('./helpers/constants');
const { ROUTE_NOT_FOUND } = require('./helpers/messages');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('./routes/users'));

app.get('*', (req, res) => {
    res.status(404);
    res.json({ error: ROUTE_NOT_FOUND })
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});


