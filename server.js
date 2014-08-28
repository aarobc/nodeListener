
// Requires node.js and connect. 

var util = require('util'),
    exec = require('child_process').exec,
    child;

var zlevel = 0;
var c1 = 0;
var c2 = 0;
var num = 0;
//getCams();

var connect = require('./node_modules/connect');
var app = connect();
//var io = require('../node/node_modules/socket.io').listen(app);

app
  .use(connect.static(__dirname +'/ui'))
  .use(connect.bodyParser())
  .use(function(req, res) {
    process.stdout.write(req.body);
    //console.log(req.headers.herp);
    // parseKey(req.body.action, req.body.cam, res);
    res.end();
})
.listen(7070);


//function parseKey(arg, cam, res){

  //switch (arg) {
    //case "modeshoot":
      //shootMode(cam, 1);  
      //res.end("modeshoot");
      //shootMode(c2, todo[1]); 
    //break;

    //case "modeview":
      //shootMode(cam, 0);  
      //res.end("View Mode");
      //shootMode(c2, todo[1]); 
    //break;

    //default:
      //console.log("other response." + arg); 
    //break;
  //}

//}

