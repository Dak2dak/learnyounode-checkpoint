const fs = require('fs');
const array = process.argv;
const path = require('path');

fs.readdir(array[2], (err, list) => {
    if (err) {
        return console.log(err);
    }

    list.forEach(function(file) {
        if(path.extname(file) === `.${array[3]}`) {
            console.log(file)
        }
    });
});