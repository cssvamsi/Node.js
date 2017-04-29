var fs=require("fs");
var callback=function(err,data) {
if (err) {
	return console.error(err);
	}
	console.log(data.toString());
}
fs.readFile('input.txt',callback);