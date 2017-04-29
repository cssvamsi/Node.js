var express=require('express');
var app= express();
fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.delete('/user', function(req,res) {
    
  res.send('Got a DELETE request at /user')  
})

app.listen(3000, function () {
  console.log('Hey!! Server started at port 3000!')  
})

exports.app=app;
