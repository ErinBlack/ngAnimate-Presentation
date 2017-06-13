//requires
var express = require('express');
var app = express();
var path = require('path');

//uses
app.use(express.static('public'));

// globals
var port = process.env.PORT || 8080; //needed to run on Heroku
console.log('starting server on port: ', port);

//spin up server
app.listen(port, function(){
  console.log('server is up on: ', port);
});

//base url
app.get('/', function(req, res){
  //send file at resolved path
  res.sendFile(path.resolve('public/views/index.html'));
});
