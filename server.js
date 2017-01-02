var express = require('express');
var app = express();

app.use(express.static('build'));

app.get('*', (req, res) => {
  res.sendfile(__dirname + '/build/index.html');
});

app.listen(3000);
