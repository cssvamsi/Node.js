var http=require('http');

var hostname='localhost';
var port=7777;
var server= http.createServer(function(request,response) {
   response.statusCode=200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hi there!!\n');
});
server.listen(port,hostname, function() {
console.log('Server running at http://' + hostname + ':' + port+ '/');
              });