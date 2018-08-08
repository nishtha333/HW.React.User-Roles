const path = require('path');
const express = require('express');
const app = express();

module.exports = app;

app.use("/api", require('./routes/api'));

//Static Routes set up for Client-side files
app.use(express.static(path.join(__dirname, 'src')));
app.use("/dist", express.static(path.join(__dirname, 'dist')));

//Add Error Catching and 404 here