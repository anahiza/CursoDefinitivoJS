var page = require('page');
var template=require('./template');
var empty= require('empty-element');
var title=require('title');

page('/signup', function(ctx,next){
	title('Platzigram - Sign Up');

	var main = document.getElementById('main-container');
  empty(main).appendChild(template);
});

