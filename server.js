var express=require('express');
var app=express();
var PORT=3000;
var middleware=require('./middleware.js');

//app.use(middleware.requireAuthentication);
/*
app.get('/',function(req,res){
	res.send('Hello Armolis');
})
*/
app.use(middleware.logger);
app.get('/about',middleware.requireAuthentication,function(req,res){
	res.send('About Us!');
})

//console.log(__dirname);

app.use(express.static(__dirname+'/public'));
app.listen(process.env.PORT || 3000,function(){
	console.log('Server started on port: ' + PORT);
});