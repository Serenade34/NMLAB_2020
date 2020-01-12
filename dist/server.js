var webpack = require('webpack');
var app = new (require('express'))();
var port = 3000;
var host = '0.0.0.0';

app.get("/", function(req, res){
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, host, function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info("===> react is on", port, host, port)
    }
})