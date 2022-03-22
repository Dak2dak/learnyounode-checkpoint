const mymodule = require('./mymodule.js');

const dirname = process.argv[2];
const extensionStr = process.argv[3];

mymodule(dirname, extensionStr, function (err, list) {
    if (err) {
        return console.log(err);
    }

    list.forEach(function (file) {
        console.log(file)
    });
});
