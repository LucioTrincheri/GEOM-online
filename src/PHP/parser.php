<?php

namespace GEOM;

use Twig_Environment;
use Twig_Loader_Filesystem;
use Symfony\Component\Yaml\Yaml;
require_once __DIR__.'/../vendor/autoload.php';


$i = 1;
$preguntas = [];

echo "test";
return true;
/*
while (isset($_POST['pregunta' . $i])){
	$preg = [];
	$preg['descripcion'] = $_POST['pregunta' . $i];
	$j = 1;
	$arrCorr = 0;
	$arrInc = 0;
	while (isset($_POST['respuesta' . $i . '-' . $j])){
		if($_POST['checkbox' . $i . '-' . $j] == 'checked'){
			$preg['respuestas_correctas'][$arrCorr] = $_POST['respuesta' . $i . '-' . $j];
			$arrCorr++;
		} else {
			$preg['respuestas_incorrectas'][$arrInc] = $_POST['respuesta' . $i . '-' . $j];
			$arrInc++;
		}
		$j++;
	}
	$preguntas[$i - 1] = $preg;
	$i++;
}

$exam = new crearExamen($preguntas, $_POST['cantidad_preguntas'], $_POST['cantidad_examenes'], $_POST['shuffle']);
echo $exam;
//Falta agregar la variacion de pregunta y cantidad de preguntas dentro del html
//Esto ya puede ser enviado junto con lo anterior a 'new Examen(...)'
