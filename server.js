var http = require('http');
var path = require('path');

var async = require('async');
var express = require('express');


var router = express();
var server = http.createServer(router);

router
    .use(express.static(path.resolve(__dirname, 'client/src')))
    
    .get('/', function(req,res) {
        res.sendfile(path.resolve(__dirname,'index.html'))
    })
    
    .get('/challenges', function( req,res) {
        var challenges = [
        //TODO Get from DB, use Challenge objects (not yet defined)
        {level:1, solved: false, percentComplete: 0, text: "hello, world"},
        {level:2, solved: false, percentComplete: 0, text:"h e l l o , w o r l d!"},
        {level:3, solved: false, percentComplete: 0, text:"meepmoop"},
        {level:4, solved: false, percentComplete: 0, text:"asdasdasd"},
        {level:5, solved: false, percentComplete: 0, text:"asdasdasfgfd"},
        {level:6, solved: false, percentComplete: 0, text:"asdafsgf"},
        {level:7, solved: false, percentComplete: 0, text:"srfgrfsg"},
        {level:8, solved: false, percentComplete: 0, text:"dfgdfgdfh"}
        ]
        
        res.json(challenges);
    });


server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("At", addr.address + ":" + addr.port);
});