var page = require('page');
var empty= require('empty-element');
var template=require('./template');
var title=require('title');

page('/', function(ctx,next){
	title('Platzigram');
	var main = document.getElementById('main-container');
	var pictures=[
		{
			user:{
				username:'Anahi',
				avatar:'https://lh3.googleusercontent.com/-vHUbokKYy8E/AAAAAAAAAAI/AAAAAAAACIo/xcEEOpJnzfI/s60-p-rw-no/photo.jpg'
			},
			url:'https://image.freepik.com/free-photo/wooden-table-with-blurred-background_1134-14.jpg',
			likes:0,
			liked: false,
			createdAt: new Date()

		},
		{
			user:{
				username:'Anahi',
				avatar:'https://lh3.googleusercontent.com/-vHUbokKYy8E/AAAAAAAAAAI/AAAAAAAACIo/xcEEOpJnzfI/s60-p-rw-no/photo.jpg'
			},
			url:'https://image.freepik.com/free-photo/working-with-a-coffee_1112-145.jpg',
			likes:156,
			liked: true,
			createdAt: new Date().setDate(new Date().getDate()-10)
			
		}

	];
  	empty(main).appendChild(template(pictures));
});
