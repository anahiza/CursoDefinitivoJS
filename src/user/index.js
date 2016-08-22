var empty=require('empty-element');
var page=require('page');
var title=require('title');
var template = require('template');
var header = require('../header');

page('/user', header, function(ctx, next){
	title("Perfil de Usuario")
	var main = document.getElementById('main-container');
  	empty(main).appendChild(template);
})