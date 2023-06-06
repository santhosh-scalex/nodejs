var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello, Welcome to DevOps CI CD using aws code pipeline on pvt ec2 instance.");

});

var port = 3000;
server.listen(port);
module.exports = server
console.log("Server is available on Port:", port);
