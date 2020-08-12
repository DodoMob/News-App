const express = require('express');
const fs = require('fs');

const router = express.Router();
const news = process.env.NODE_ENV === 'development'
  ? './db/development/news-dev.json'
  : './db/production/news-prod.json';

router.get('/', (req, res) => {
  fs.readFile(news, (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

module.exports = router;
