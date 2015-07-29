angular.module('starter.filter', [])

	.filter('urlFilter', function(){
		return function(texto){
			var rex = /http:\/\/carabobo.gob.ve\/wp-content\/uploads\/[0-9]{4}\/[0-9]{2}\/[%a-zA-Z0-9!-]*.jpg/im ;
			var  retorno = texto.match(rex).toString();
			return retorno;
	}}); 