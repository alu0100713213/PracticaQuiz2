var Pregunta = require('../models/pregunta_model.js');

function PreguntaSimple(args, array_respuestas){
	Pregunta.call(this, args);
	this.args = args;
	this.arrayrespuestas = array_respuestas;
}

function PreguntaMultiple(args, array_respuestas) {
	Pregunta.call(this, args);
	this.args = args;
	this.arrayrespuestas = array_respuestas;
}

PreguntaMultiple.prototype = new Pregunta();
PreguntaSimple.prototype = new Pregunta();

PreguntaMultiple.prototype.constructor = PreguntaMultiple;
PreguntaSimple.prototype = new Pregunta();

PreguntaSimple.prototype.view = function () {
	var array1 = [];
	for (var i=0; i<this.arrayrespuestas ; i++){
		array1[i] = "<option value=" + this.arrayrespuestas[i] + ">" + this.arrayrespuestas[i] + "<\option>";
	}


	this.view = "<textarea name='PreguntaLarga' rows='3' cols='40' placeholder='" + this.array1[0] + " Responda aquí(textarea)'></textarea>";

//	view.unshift("<select name='respuesta'>");
//	view.push("</select>");
	return view;
}


PreguntaMultiple.prototype.view = function () {
	var view = [];
	for (var i=0; i<this.arrayrespuestas.length ; i++){
		view[i] = "<option>" + this.arrayrespuestas[i] + "</option>";
		view.unshift("<select name='respuesta[]' size=" + this.view[i] + " multiple>");
		view.push("</select>");
	}
	return view;

}




PreguntaMultiple.prototype.get_pregunta = function() {
	return this.pregunta;
}

module.exports = PreguntaMultiple;
module.exports = PreguntaSimple;
