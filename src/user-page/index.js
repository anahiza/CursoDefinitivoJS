var empty=require('empty-element');
var page=require('page');
var title=require('title');
var template = require('./template');
var header = require('../header');


page('/:username', loadUser, header, function (ctx, next) {
  var main = document.getElementById('main-container');
  title(`Platzigram - ${ctx.user.username}`);
  empty(main).appendChild(template(ctx.user));
});


page('/:username/:id', loadUser, header, function (ctx, next) {
  var main = document.getElementById('main-container');
  title(`Platzigram - ${ctx.user.username}`);
  empty(main).appendChild(template(ctx.user));
  $(`#modal${ctx.params.id}`).openModal({
  	complete: function(){
  		page(`/${ctx.params.username}`)
  	}
  });
});

async function loadUser (ctx, next) {
  try {
    ctx.user = await fetch(`/api/user/${ctx.params.username}`).then(res => res.json());
    next();
  } catch (err) {
    console.log(err);
  }
}