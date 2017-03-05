var http = require('http');

var server = http.createServer(function(request,response){
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.end("Hi World, by Rodrigo");
});

server.listen(8080);

console.log("Server running at localhost:8080");
