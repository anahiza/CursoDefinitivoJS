var yo=require('yo-yo');
var footer = require('../footer') ;
var translate=require('../translate');


var userProfile = yo`
	<div class="row">Contenido
		<div class="col s12 m10 offset-m1 l8 offset-l2 center-align">
			<div class="row profile">
				<div class="col s12 m10 l2">
					<img src="https://pbs.twimg.com/profile_images/308830576/hand_400x400.jpg" class="userPicture"/>


				</div>

			</div>
		</div>

	</div>`;

module.exports=userProfile;