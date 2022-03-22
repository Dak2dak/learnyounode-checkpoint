const http = require('http');
const array = process.argv;
const fs = require('fs');

const server = http.createServer(function (request, response) {
    response.writeHead(200, {'content-type': 'text/plain'});

    fs.createReadStream(array[3]).pipe(response)
});

server.listen(Number(array[2]));