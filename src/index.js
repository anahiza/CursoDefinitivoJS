var page = require('page');
var main = document.getElementById('main-container');

page('/', function(ctx, next){
	main.innerHTML="Home<a href='/signup'>Sign Up </a>";
})

page('/signup', function(ctx,next){
	main.innerHTML="<a href='/'>Home </a>Sing Up";	
})

page.start();