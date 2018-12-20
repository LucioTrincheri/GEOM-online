$(function(){
    $('#submit').on('click',function(){
		var url = "templates/template_" + $('#preguntas').val() + "_" + $('#respuestas').val();
		window.location.replace(url);
    });
});