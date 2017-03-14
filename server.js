"use strict";

const express = require('express');
const app = express();
const fs = require('fs')

fs.readFile('test.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

// launch server and start app
app.listen(process.env.PORT || 8080, function() {
  console.log('Server now running @ localhost:8080');
});

exports.app = app;

