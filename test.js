var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
app.use(cookieParser());
var path = require('path');
app.get('/',function(req, res) {
 res.send('Hello World')
}
);
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.get('/about_ramanujan', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
});
app.listen(3000,function(req,res){
 console.log('Server started on port 3000')
});