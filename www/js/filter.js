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

		switch(hora.substring(0,2)){
			case '12':
				hora = hora+" PM"
				break;
			case '13':
				hora = "01"+hora.substring(2,5)+" PM"
				break;
			case '14':
				hora = "02"+hora.substring(2,5)+" PM"
				break;
			case '15':
					hora = "03"+hora.substring(2,5)+" PM"
					break;
		  case '16':
				  hora = "04"+hora.substring(2,5)+" PM"
					break;
			case '17':
					hora = "05"+hora.substring(2,5)+" PM"
					break;
			case '18':
					hora = "06"+hora.substring(2,5)+" PM"
					break;
			case '19':
				hora = "07"+hora.substring(2,5)+" PM"
					break;
			case '20':
				hora = "08"+hora.substring(2,5)+" PM"
				break;
			case '21':
					hora = "09"+hora.substring(2,5)+" PM"
					break;
			case '22':
					hora = "10"+hora.substring(2,5)+" PM"
					break;
			case '23':
					hora = "11"+hora.substring(2,5)+" PM"
					break;
			case '00':
					hora = "12"+hora.substring(2,5)+" AM"
					break;
			default:
			  hora = hora + " AM"
		}
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
