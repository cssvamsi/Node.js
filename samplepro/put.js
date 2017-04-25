var express=require('express');
var app= express();
fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.put('/user', function(req,res) {
    
    fs.writeFile('hello world.txt', 'hi', function(err) {
        if(err){ response=err;}
        else{
            response="write success!!!!";
        }
        res.send(response);
    });
})

app.listen(3000, function () {
  console.log('Hey!! Server started at port 3000!')  
})

exports.app=app;
