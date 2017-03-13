var fs = require('fs');
var path = require('path');

var handlers = module.exports = {};

handlers.serveLanding = function(request, response) {
  fs.readFile(path.join(__dirname,"..","..","index.html"), function(err, file) { //with path module
    if (err) throw err;
    response.writeHead(200, "Content-type: text/html");
    response.end(file);
  });
};
