var yo= require('yo-yo');
var landing = require('../landing');
var empty= require('empty-element');
var translate=require('../translate');

module.exports=function(content){
  return yo`<div class="content">
      ${content}
    </div>`;
}
