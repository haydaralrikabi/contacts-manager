const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');

const pug = require('pug');
const path = require('path');

const contacts = require('./routes/contacts');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(multer().array());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/contacts', contacts);

app.set('view engine', pug);

mongoose.connect('mongodb://localhost:27017/contacts', { useNewUrlParser: true })
    .then(() => console.log('Connected to db...'))
    .catch(ex => console.log(ex.message));

const port = process.env.port || 3000;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;