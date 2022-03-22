const http = require('http');
const array = process.argv;
const map = require('through2-map');

const server = http.createServer(function (request, response) {
    if (request.method != 'POST') {
        return response.end('send me a POST\n');
    }

    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(response);
});

server.listen(Number(array[2]));