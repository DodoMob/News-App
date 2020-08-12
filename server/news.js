const express = require('express');
const fs = require('fs');
const router = express.Router();
const news = process.env.NODE_ENV==='development' ? require('./db/development/news-dev.json') : require('./db/production/news-prod.json');

router.get('/', (req, res) => res.send('Data'));

module.exports = router;