/**
 * Created by tigran on 7/17/15.
 */

var app = require('express')();
var bodyParser = require('body-parser');
var multer = require('multer');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data

app.get('/', function (req, res) {
    res.json(req.body);
});

app.listen(3000);