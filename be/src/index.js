const { urlencoded, json } = require('express');
const express = require('express');
const db = require('./utils/db');
const auth = require('./utils/auth');

const accountRouter = require('./routes/account.route');
const swaggerRouter = require('./routes/swagger.route');
const authRouter = require('./routes/auth.routes');

const server = express();
server.use(urlencoded({ extended: true }));
server.use(json());
server.use(auth.authMiddleware);

server.use(swaggerRouter);
server.use('/accounts', accountRouter);
server.use('/api/auth',authRouter);

server.listen(3000, () => {
    console.log('server listening')
})