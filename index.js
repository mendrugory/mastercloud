var express = require('express');

var app = express();
app.get('/', function (req, res) {
    console.log(req);
    res.send('hello world');
});

const PORT = 8080;
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);