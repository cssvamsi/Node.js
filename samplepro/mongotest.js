var express=require('express');
var app= express();
var MongoClient= require('mongodb').MongoClient;
var url='mongodb://127.0.0.1:27017/Vamsi';
app.get('/', function(req,res) {
    
    MongoClient.connect(url,function (err, db) {
        var collection=db.collection('movies');
        collection.find({}).toArray(function(err, docs) {
            console.log("Found the following records");
            console.log(docs);
            db.close();
    });
});
});

app.listen(3000, function() {
    console.log('Hey!! Vamsi, Server started at port 3000!!!!!')
});

exports.app=app;