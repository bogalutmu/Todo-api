var express = require('express');
var app= express();
var PORT=process.env.PORT || 3000;
var todos=[{
	id:1, 
	description:'Armolis',
	completed:false

},{
	id:2,
	description:'Armokent',
	completed:false
},
{
	id:3,
	description:'Torun',
	completed:false
}];

//
app.get('/todos',function(req,res){
	res.json(todos);
}); 

app.get('/todos/:id',function(req,res){
	var toDoId=parseInt(req.params.id,10);
	var matchedToDo;

	todos.forEach(function(todo){
		if(toDoId===todo.id){
			matchedToDo=todo;
		}
	});
	
	if(matchedToDo){
		res.json(matchedToDo);
	}else {
		res.status(404).send();
	}
});

app.get('/',function(req,res){
	res.send('Todo API Root');
});

app.listen(PORT, function(){
	console.log('Express listenin on PORT'+PORT+'!');
})