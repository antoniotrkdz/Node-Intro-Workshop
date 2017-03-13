var http = require('http');
var fs = require('fs');
var path = require('path');
var router = require('./router/router.js');

var port = 4000;

// var handler = function(request,response) {


var server = http.createServer(router);

server.listen(port);
console.log('Server up and running on port :',port);
