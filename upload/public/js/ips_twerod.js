var _twerod = window.IPBoard;
_twerod.prototype.twerod = {
	init: function() {
		document.observe('dom:loaded',ipb.twerod.initevents);
	},
	initevents: function() {
	
		$('sign_in').insert({'after':$('twerod_form').show()});
		$('sign_in').remove();
		$('twerod-tggle').insert({'after':$('twerod')});
	
		if( $('twlogin') ) {
			$('twlogin').observe('submit', ipb.twerod.validateLogin );
		}
	
		var hovevar = null;	
		
		$('twerod-tggle').observe('mousemove',function() {
			hovevar = 'hover';
		});
		$('twerod-tggle').observe('mouseout',function() {
			hovevar = null;
		});
		$('twerod').observe('mousemove',function() {
			hovevar = 'hover';
		});
		$('twerod').observe('mouseout',function() {
			hovevar = null;
		});
		document.observe('click',function() {
			if($('twerod').visible && hovevar == null) {
				$('twerod').hide();
				$('twerod-tggle').removeClassName('open');
			}
		});
		$('twerod-tggle').observe('click',function(e) {
			Event.stop(e);
			$('twerod').setStyle({
				'top': $('twerod-tggle').getHeight() + 'px',
			});
			$('twerod').toggle();
			$('twerod-tggle').toggleClassName('open');
			if($('twerod').visible && $('ips_username_twod')) {
				$('ips_username_twod').focus();
			}
		});
	},
	validateLogin: function(e)
	{
		if( !ipb.twerod.isFilled( $('ips_username_twod') ) )
		{
			alert( ipb.lang['signin_nosigninname'] );
			Event.stop(e);
			return;
		}
		if( !ipb.twerod.isFilled( $('ips_password_twod') ) )
		{
			alert( ipb.lang['signin_nopassword'] );
			Event.stop(e);
			return;
		}		
	},
	isFilled: function( obj )
	{
		if( !obj.value )
		{
			return false;
		}
		else
		{
			return true;
		}
	}
}
ipb.twerod.init();