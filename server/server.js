const express = require('express');
const bodyParser = require('body-parser');
const news = require('./news.js')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.static());
app.use('/api/news', news) 

app.listen(8080, () => console.log('Server started on http://localhost:8080'));
