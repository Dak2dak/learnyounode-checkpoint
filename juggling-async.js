var http = require('http');
const array = process.argv;
var bl = require('bl');
var results = [];
var counter = 0;

function printResults() {
    for (let i = 0; i < 3; i++) {
        console.log(results[i]);
    }

}

function httpGet(index) {
    http.get(array[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err);
            }

            results[index] = data.toString();
            counter++;

            if (counter === 3) {
                printResults();
            }

        }));
    });
}

for (let i = 0; i < 3; i++) {
    httpGet(i);
}