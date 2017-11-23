var app = require('express')();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('*', function(req, res) {
  res.sendfile('./index.html');
});

app.listen(3000);
