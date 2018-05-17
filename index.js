
require('dotenv').config();
const app = require('express')();
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const bodyParser = require('body-parser');


const dbConfig = require('./config/database');

mongoose.connect(dbConfig.url);
requireDir(dbConfig.modelsPath);

app.use(bodyParser.json());

app.use('/api', require('./app/routes'));

app.listen(process.env.PORT || 3000);

module.exports = app;
