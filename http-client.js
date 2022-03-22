const http = require('http');
const array = process.argv;

http.get(array[2], function (response) {
    response.setEncoding('utf-8');
    response.on('data', console.log);
    response.on('error', console.error);
})