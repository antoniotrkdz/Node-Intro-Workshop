var fs = require('fs');
var path = require('path');
var handlers = require('../handlers/handlers.js');


//is used to export functionality into other parts of our code
module.exports = function (request, response) {
  var url = request.url;
  console.log(url);
  if (url === "/") {
    handlers.serveLanding(request, response);
  }
  else if (url.indexOf("public") !== -1) {
    var extension = url.split('.')[1];
    var extensionType = {
      'html': 'text/html',
      'css': 'text/css',
      'js': 'application/javascript',
      'ico': 'image/x-icon'
    };
    fs.readFile(path.join(__dirname,"..","..",url), function(err, file){
      if (err) throw err;
      response.writeHead(200, "Content-type: " + extensionType[extension])
      response.end(file);
    })
  }

  // else if (url === "/public/main.css") {
  //   fs.readFile(path.join(__dirname,"..","public","main.css"), function(err, file){
  //     if (err) throw err;
  //     response.writeHead(200, "Content-type: text/css");
  //     response.end(file);
  //   });
  // }
  // else if (url === "/public/index.js") {
  //   fs.readFile(path.join(__dirname,"..","public","index.js"), function(err, file){
  //     if (err) throw err;
  //     response.writeHead(200, "Content-type: application/javascript");
  //     response.end(file);
  //   });
  // }
  // else if (url === "/public/node-icon.ico") {
  //   fs.readFile(path.join(__dirname,"..","public","node-icon.ico"), function(err, file){
  //     if (err) throw err;
  //     response.writeHead(200, "Content-type: image/x-icon");
  //     response.end(file);
  //   });
  // }

else {
  response.writeHead(404, "Content-type: text/html");
  response.end("<h1>404: Page Requested Not Found :)<h1>");
}

}
