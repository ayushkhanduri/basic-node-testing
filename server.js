let express = require('express');

let app = express();

let getData = require('./api');


app.get('/getAllData',getData);

app.listen(3000,(err)=> {
    if(err)
        return err;
    console.log("Listening to server");
});

module.exports = app;