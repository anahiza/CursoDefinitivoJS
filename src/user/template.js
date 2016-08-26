var yo=require('yo-yo');
var footer = require('../footer') ;
var translate=require('../translate');


var userProfile = yo`
	<div class="row">
		<div class="col s12 m10 offset-m1 l8 offset-l2 center-align">
			<div class="row profile">
				<div class="col s10 offset-s1 m8 offset-m2 l2">
					<img src="https://pbs.twimg.com/profile_images/308830576/hand_400x400.jpg" class="circle responsive-img"/>
				</div>
				<div class="col s10 offset-s1 m8 offset-m1 l10">
					Este es el contenido
				</div>

			</div>
		</div>

	</div>`;

module.exports=userProfile;