const express = require('express');

const { json } = express;

const { DB_NAME } = require('./constants');

const createApp = () => {
    const app = express();

    app.use(json());

    app.get('/health', (req, res) => {
        res.status(200).json({ ok: true, db: DB_NAME });
    });

    return app;
};

module.exports = { createApp };

