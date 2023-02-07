$(document).ready(function($){
// hide messages 
$("#error").hide();
$("#show_message").hide();
// on submit...
$('#ajax-form').submit(function(e){
e.preventDefault();
$("#error").hide();
// marca required
var marca = $("input#marca").val();
if(marca == ""){
$("#error").fadeIn().text("Nombre de la marca es requerida.");
$("input#marca").focus();
return false;
}
// cliente required
var cliente = $("select#cliente").val();
if(cliente == ""){
$("#error").fadeIn().text("Cliente es requerido.");
$("select#cliente").focus();
return false;
}
// usuario required
var usuario = $("select#usuario").val();
if(usuario == ""){
$("#error").fadeIn().text("Usuario es requerido.");
$("select#usuario").focus();
return false;
}

// ajax
$.ajax({
type:"POST",
url: "ajax/brand/insert.php",
data: $(this).serialize(), // get all form field value in serialize form
success: function(){
$("#show_message").fadeIn();
//$("#ajax-form").fadeOut();
}
});
});  
return false;
});