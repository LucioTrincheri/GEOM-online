/*

function addAnswer(){
	var br= $('<br/>');
	var texto= $('<p class="respuesta">');
	var resp= $('<input type="text"/>');
	var chebox= $('<input type="checkbox" name="chebox" value="test">');
	var divi= $('<div id="divi"/>');
	$("body").append(document.createTextNode("Respuesta " + this.value + " "));
	this.value++;
	$("body").append(resp);
	$("body").append(chebox);
	$("body").append(br);
	$("body").append(divi);
	$("body").append(br);
	//$('div').append('#add_question');
	//$('button').appendTo('#divi');
}


$(function(){
	var answer = $('#add_answer');
    $(answer).on('click', function(){
		var br= $('<br/>');
        var desc= $('<input type="text"/>');
        var divi= $('<div id="divi"/>');
        $("body").append(document.createTextNode("Respuesta " + this.value + " "));
    });
});
*/

$(function(){
    $('body').on('click', '#add_answer', function(){
		var br= $('<br>');
        var desc= $('<input type="text" class="respuesta" name="respuesta' + this.name + '-' + this.value +'">');
		var chebox= $('<input type="checkbox" class="checkbox" value="checked" name="checkbox' + this.name + '-' + this.value + '">');
        var divi= $('<div id="divi">');
		var lugar = "#container" + this.name;
		
        $(lugar).append(document.createTextNode("Respuesta " + this.value + " "));
		this.value++;
		$(lugar).append(desc);
		$(lugar).append(chebox);
		$(lugar).append(br);
    });
});

$(function(){
    $('#add_question').on('click',function(){
		var br= '<br></br>';
        var desc= '<input type="text" class="pregunta" "name="pregunta' + this.value + '">';
        var butt= '<button type="button" class="btn" id="add_answer" value=1 name=' + this.value + ' >New Answer</button>';
		var cosaturbia = '<div id= "container' + this.value + '"></div>';
		var openDiv = '<div class="grid-item">';
		var closeDiv = '</div>';
		var preg = "Pregunta " + this.value + " ";
		openDiv += preg;
		openDiv += desc;
		openDiv += br;
		openDiv += cosaturbia;
		openDiv += butt;
		openDiv += br;
		openDiv += closeDiv;
		this.value++;
		$("#container").append(openDiv);
        /*
		var br= $('<br/>');
        var desc= $('<input type="text"/>');
		var butt = document.createElement('button');
        var butt= $('<button/>',{ type: "button", text: "New Answer", id: "add_answer", value: 1, name: this.value});
        var divi= $('<div id="divi"/>');
		var cosaturbia = $('<div/>',{ id: "container" + this.value });
		var openDiv = '<div class="grid-item">';
		var closeDiv = '</div>';
		
		
		$("#container").append(document.createTextNode("Pregunta " + this.value + " "));
        this.value++;
        $("#container").append(desc);
		$("#container").append(br);
		$("#container").append(divi);
		$("#container").append(cosaturbia);
        $("#container").append(butt);
		$("#container").append(br);
		$("#container").append(closeDiv);
		*/
    });
});




