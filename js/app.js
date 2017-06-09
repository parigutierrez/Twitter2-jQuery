// Cargar página
function cargarPagina(){
	
		// Envío de To - Do con JQuery

	
		$("#formulario").submit(imprimir); 
		function imprimir(e){
			e.preventDefault();
			// Obtenemos datos
			
			$("#textoMensaje").val();
			
	    	console.log($("#textoMensaje").val());


			
			$("#enviar").click(mostrarTweet);
		
			
			function mostrarTweet() {
			//teet es el id del textarea	
  			var $textoMensaje = $("#posts");
  			//teets es el id section
  			$textoMensaje.prepend("<article class='row jumbotron'><div class='col s12 m12'><span class='card-title activator'>" + $("#textoMensaje").val() + "</span></div></article>"); 
  			$("#textoMensaje").val(" ");

			}

			
		}
	
};
$(document).ready(cargarPagina);