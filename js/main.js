/* Julian David Tamayo Toro */

window.onload=function()
{
	var mostrar;
	var elemento=document.getElementById("header_language");

	//  esta función se ejecutará cuando el mouse esté sobre él
	elemento.onmouseover = function(e) {

		mostrar = document.getElementById("dropdown_list");
		mostrar.style.display = "block";
	};

	//  esta función se ejecutará cuando el mouse no esté sobre él
	elemento.onmouseout = function(e) {

		mostrar = document.getElementById("dropdown_list");
		mostrar.style.display = "none";
	};

             /*
			elemento.onmouseout =setInterval(function(e) {

			// esta función se ejecutará cuando el mouse no esté sobre él

				var mostrar = document.getElementById("dropdown_list");
				mostrar.style.display = "none";
			}, 5000);

			*/
		}