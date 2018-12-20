$(function(){
	$("#examen").submit(function(e) {

		e.preventDefault(); 

		$.ajax({
			type: "post",
			url: 'PHP/parser.php',
			data: $(this).serialize(), // serializes the form's elements.
			success: function(data) {
				alert(data); // datos devueltos por el script
				console.log('Submission was successful.');
			}
		});
	});
});


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
    });
});




