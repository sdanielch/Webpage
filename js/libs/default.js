$(document).ready(function () {
	console.log("Documento cargado");
    $.ajaxSetup({
        error: function (x, e) {
             $("#titlebar").text("Error al cargar");
        if (x.status == 0) {
        $("#load-ajax").html('Parece que usted no tiene conexión con el servidor, intentelo de nuevo más tarde.');}

        else if(x.status == 404) {
        $("#load-ajax").html('Se estableció contacto con el servidor, pero no se ha encontrado la sección requerida. Código de error 404, por favor contacte con el webmaster.');}

        else if(x.status == 500) {
        $("#load-ajax").html('Hay un problema en el servidor que impide cargar esta sección, por favor inténtelo nuevamente más tarde. Código de error 500, por favor contacte con el webmaster.');}

        else if(e == 'parsererror') {
        $("#load-ajax").html('Ha habido un problema al cargar esta sección, por favor inténtelo nuevamente más tarde.');}

        else if(e == 'timeout') {
        $("#load-ajax").html('Se ha agotado el tiempo de conexión, puede que el servidor se encuentré saturado en estos momentos, por favor inténtelo nuevamente más tarde.');}

        else {
        $("#load-ajax").html('Ocurrió un problema desconocido al cargar la sección. ');}
		}
	});
    /* Estilizamos el menu y configuramos la primera sección del menu como la predeterminada */
    $("#central-l1 ul li a:first").css("border-radius", "5px 5px 0 0");
    $("#central-l1 ul li a:last").css("border-radius", "0 0 5px 5px");
    $("#central-l1 ul li a:first").addClass("current");
    /* Configuramos el click de los menus */
    $("#central-l1 ul li a").click(function() {
    $("#central-l1 ul li a").not(this).removeClass("current");
        $(this).addClass("current");
    });
    var cargando = "Cargando sección <i class=\"fa fa-spinner fa-spin\"></i>";
    var cargandoOK = "Carga completa <i class=\"fa fa-check\"></i>";
    var cargandoERROR = "Error al cargar <i class=\"fa fa-exclamation-triangle\"></i>";

   $("#cargando").html(cargando);
        $( "#cargando" ).stop( true, true ).fadeIn( 300 );
        $("#load-ajax").load("../html/home.html", function(response, status, xhr){
            if ( status == "error" ) {
            $("#cargando").html(cargandoERROR).delay(1000).fadeOut(500);
            } else {
        $("#cargando").html(cargandoOK).delay(1000).fadeOut(500);
            }
        });
    /* Para no repetir la misma funcion creamos una funcion que englobe cada click llamada menuajax */
    function menuajax(id, url2) {
           $(id).click(function(){
           $("#cargando").html(cargando);
           $( "#cargando" ).stop( true, true ).fadeIn( 300 );
               $("#load-ajax, #titlebar").fadeOut(100);
           $("#load-ajax").load(url2, function(response, status, xhr){
               $("#load-ajax, #titlebar").stop( true, true ).fadeIn(500);
            if ( status == "error" ) {
            $("#cargando").html(cargandoERROR).delay(1000).fadeOut(500);
            } else {
           $("#cargando").html(cargandoOK).delay(1000).fadeOut(500);
            }
           });
           });
    }
    menuajax("#sec1", "../html/home.html"); // Sección 1 -> Home
    menuajax("#sec2", "../html/sec2.html"); // Sección 2 -> Curriculum
    menuajax("#sec3", "../html/sec3.html"); // Sección 3 -> Proyectos
    menuajax("#sec4", "../html/sec4.html"); // Sección 4 -> Contactar
    menuajax("#sec5", "../html/sec5.html"); // Sección 5 -> Blog



    function getHash() {
  if (window.location.hash) {
    var hash = window.location.hash.substring(1);
    if (hash.length === 0) {
      return false;
    } else {
      return hash;
    }
  } else {
    return false;
  }
}
    var hash = getHash();
    if (hash == "home") {
        $("#sec1").click();
    } else if (hash == "whois") {
        $("#sec2").click();
    } else if (hash == "proyects") {
        $("#sec3").click();
    } else if (hash == "contact") {
        $("#sec4").click();
    } else if (hash == "blog") {
        $("#sec5").click();
    }





});
