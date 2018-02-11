var Bandwidth = require("node-bandwidth");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var http = require("http").Server(app);

var client = new Bandwidth({
    userId    : "u-bphzt25pm4aifyqc4rpzfga",
    apiToken  : "t-bphzt25pm4aifyqc4rpzfga",
    apiSecret : "46r7jujrxcb4cujooenff33mttbgqu6w4f4ubyy"
  });
  
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 3000));

var numbers = {
    to: "+17037950929",
    from: "+15712508330"
  };  

var sendMessage = function(params){
    client.Message.send({
      //returns a promise
      from : params.from,
      to   : params.to,
      text : "it worked!",
      media: "http://www.cutestpaw.com/wp-content/uploads/2011/11/OIo.jpg"
    })
    //calls back the message id number and catches any errors
    .then(function(message){
      messagePrinter(message);
      return client.Message.get(message.id)
      //access ID from json can also get to and from
    })
    .then(function(){
      console.log(message);
    })
    .catch(function(err){
      console.log(err)
    });
  }
  