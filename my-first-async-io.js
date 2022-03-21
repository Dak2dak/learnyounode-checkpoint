const fs = require('fs');

fs.readFile(process.argv[2], (err, data) => {
    if(err) {
        return console.log(err)
    }
    let buf = data.toString().split('\n').length - 1;
    console.log(buf)
});


