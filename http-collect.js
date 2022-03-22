const http = require('http');
const array = process.argv;
const bl = require('bl');


http.get(array[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err);
        }

        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
});
