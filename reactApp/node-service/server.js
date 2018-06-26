
// Dependencies
var express = require('express');
var mongoose = require('mongoose');
//var restful = require('node-restful');


var bodyParser = require('body-parser');


//Express
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
var options = {
    useMongoClient: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
  };

//  mongoose.Promise = global.Promise;
mongoose.connect(mongoDB,options);
// Get Mongoose to use the global promise library
//
 
/*
// MongoDB
var options = {
    useMongoClient: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
  };
  
  
//mongoose.connect('mongodb://localhost/rest_test',options);
//mongoose.Promise = global.Promise;
mongoose.createConnection('mongodb://localhost/rest_test',options);
*/

//Routes
app.use('/api',require('./routes/api'));

//app.get('/', function (req,res) {
    //res.send("Working !");
//})

// Start Server
var port = 3002;
app.listen(port);
console.log(`'API is running ..${port}`);