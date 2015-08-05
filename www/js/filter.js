angular.module('starter.filter', [])

	.filter('urlFilter', function(){
		return function(texto){
			var rex = /http:\/\/carabobo.gob.ve\/wp-content\/uploads\/[0-9]{4}\/[0-9]{2}\/[%a-zA-Z0-9!-]*.jpg/im ;
			var  retorno = texto.match(rex).toString();
			return retorno;
	}})

	.filter('dateFormat', function(){
		return function(texto){
			var retorno;
			var txt = texto.substring(4,23);
		  var dia = txt.substring(0,3);
			var mes = txt.substring(4,7);
			var year = txt.substring(8,12);
			var hora = txt.substring(13,18);

			if(mes==='Aug'){
				return dia +"/08/" + year +" " + hora;
			}else if (mes==='Jul'){
				return dia +"/07/" + year +" " + hora;
			}else if (mes==='Jan'){
				return dia +"/01/" + year +" " + hora;
			}else if (mes==='Feb'){
				return dia +"/02/" + year +" " + hora;
			}else if (mes==='Mar'){
				return dia +"/03/" + year +" " + hora;
			}else if (mes==='Apr'){
				return dia +"/04/" + year +" " + hora;
			}else if (mes==='May'){
				return dia +"/05/" + year +" " + hora;
			}else if (mes==='Jun'){
				return dia +"/06/" + year +" " + hora;
			}else if (mes==='Sep'){
				return dia +"/09/" + year +" " + hora;
			}else if (mes==='Oct'){
				return dia +"/10/" + year +" " + hora;
			}else if (mes==='Nov'){
				return dia +"/11/" + year +" " + hora;
			}else if (mes==='Dec'){
				return dia +"/12/" + year +" " + hora;
			}

			//return retorno;
		}

	});
