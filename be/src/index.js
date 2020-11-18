const { urlencoded, json } = require('express');
const express = require('express');
const db = require('./utils/db');

const accountRouter = require('./routes/account.route');
const swaggerRouter = require('./routes/swagger.route');

const server = express();
server.use(urlencoded({ extended: true }));
server.use(json());

server.use(swaggerRouter);
server.use('/accounts', accountRouter);

server.listen(3000, () => {
    console.log('server listening')
})