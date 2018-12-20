<?php

namespace GEOM;

use Twig_Environment;
use Twig_Loader_Filesystem;
use Symfony\Component\Yaml\Yaml;
require_once __DIR__.'/../vendor/autoload.php';

class Examen {
	
	public function crearExamen($preg, $cant, $test, $var){
		if ($var == 'checked') {
			return $this->evaluacionesNoSurtidas($preg, $cant, $test);
		} else {
			return $this->evaluacionesSurtidas($preg, $cant, $test);
		}
	}
	//Achico la cantidad de preguntas necesarias
	public function reduccion($preg, $cant) {
		shuffle($preg);
		return array_slice($preg, 0, $cant);
	}
	//Transformo el array en clases 'Pregunta'
	public function yalmToPregunta($red) {
		$preguntas = [];
		$leng = count($red);
		for ($i = 0; $i < $leng; $i++) {
			$preguntas[$i] = new Pregunta($red[$i]);
		}
		return $preguntas;
	}
	//Mezcla los tests 
	public function mezclarTests($preguntas) {
		$leng = count($preguntas);
		for ($i = 0; $i < $leng; $i++) {
			$preguntas[$i]->shuffleAnswers();
		}
		shuffle($preguntas);
		return $preguntas;
	}
	//Crea los HTML con las preguntas randomizadas sobre el total y mezcladas
	public function evaluacionesSurtidas($preg, $cant, $test) {
		$examenes = [];
		$respuestas = $test;
		for ($i = 1; $i < $test + 1; $i++) {
			$red = $this->reduccion($preg, $cant);
			$preguntas = $this->yalmToPregunta($red);
			$preguntas = $this->mezclarTests($preguntas);
			$examenes = $this->crearEvaluacion($preguntas, $i, $respuestas, $examenes);
			$respuestas++;
		}
		return $examenes;
	}
	//Crea los HTML con las mismas preguntas pero solo cambiadas de lugar
	public function evaluacionesNoSurtidas($preg, $cant, $test) {
		$examenes = [];
		$respuestas = $test;
		$red = $this->reduccion($preg, $cant);
		for ($i = 1; $i < $test + 1; $i++) {
			$preguntas = $this->yalmToPregunta($red);
			$preguntas = $this->mezclarTests($preguntas);
			$examenes = $this->crearEvaluacion($preguntas, $i, $respuestas, $examenes);
			$respuestas++;
		}
		return $examenes;
	}

	public function crearEvaluacion($preguntas, $i, $respuestas, $examenes){
		$loader = new Twig_Loader_Filesystem('templates');
		$twig = new Twig_Environment($loader);
		$templateAlumn = $twig->load('alumno.html');
		$templateProf = $twig->load('profesor.html');
		//Render del HTML con las variables
		$examenes[$i - 1] = $templateAlumn->render(array('preguntas' => $preguntas, 'tema' => $tema));
		$examenes[$respuestas] = $templateProf->render(array('preguntas' => $preguntas, 'tema' => $tema));
		return $examenes;
	}
}
