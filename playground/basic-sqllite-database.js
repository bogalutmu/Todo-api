var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined,undefined,undefined, {
	'dialect':'sqlite',
	'storage':'basic-sqlite-database.sqlite'
});

var Todo = sequelize.define('todo',{
	description:{
		type: Sequelize.STRING,
		allowNull:false,
		validate:{
			len :[1, 250]
		}
	},
	completed:{
		type: Sequelize.BOOLEAN,
		allowNull:false,
		defaultValue:false
		
	}
})
sequelize.sync({
	//force:true
}).then(function(){
	console.log('Everything is synced');

	Todo.findById(2).then(function(todo){
		if(todo){
			console.log(todo.toJSON());
		}else{
			console.log('Todo not found!')
		}
	});
/*
	Todo.create({
		description:'Feed the dog'
		
	}).then(function(todo){
		return Todo.create({
			description:'Dog is not hungry anymore'
		});
	}).then(function(){
		//return Todo.findById(1);
		return Todo.findAll({
			where:{
				completed:false
			}
		})

	}).then(function(todos){
		if(todos){
			console.log(todos.toJSON())
		}else{
			console.log('Not todo found');
		}

	}).catch(function(e){
		console.log(e);
	});
	*/
});