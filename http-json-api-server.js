const http = require('http');
const array = process.argv;
const url = require('url');

function parsetime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixtime(time) {
    return {unixtime: time.getTime()}
}

const server = http.createServer(function (request, response) {
    const parsedUrl = url.parse(request.url, true);
    const time = new Date(parsedUrl.query.iso);
    let result;

    if (/^\/api\/parsetime/.test(request.url))
        result = parsetime(time);
    else if (/^\/api\/unixtime/.test(request.url))
        result = unixtime(time);

    if (result) {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(result))
    } else {
        response.writeHead(404);
        response.end();
    }
});
server.listen(Number(array[2]));