var page = require('page');
var template=require('./template');
var empty= require('empty-element');

page('/signup', function(ctx,next){
	var main = document.getElementById('main-container');
  empty(main).appendChild(template);
});

