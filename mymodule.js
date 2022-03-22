const fs = require('fs');
const path = require('path');

module.exports = function(dirname, extensionStr, callback) {
    fs.readdir(dirname, (err, list) => {
        if(err) {
            return callback(err);
        }

        filteredList = list.filter(function(file) {
            return path.extname(file) === `.${extensionStr}`
        });

        callback(null, filteredList)
    });
    
}

