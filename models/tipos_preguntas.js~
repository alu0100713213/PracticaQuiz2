var Pregunta = require('../models/pregunta_model.js');

function PreguntaSimple(question, array_respuestas){
	Pregunta.call(this);
	this.pregunta = question;
	this.arrayrespuestas = array_respuestas;
}

function PreguntaMultiple(question, array_respuestas) {
	Pregunta.call(this);
	this.pregunta = question;
	this.arrayrespuestas = array_respuestas;
}

PreguntaMultiple.prototype = new Pregunta();
PreguntaSimple.prototype = new Pregunta();

PreguntaMultiple.prototype.constructor = PreguntaMultiple;
PreguntaSimple.prototype = new Pregunta();

PreguntaSimple.prototype.view = function () {
	var view = [];
	for (var i=0; i<this.arrayrespuestas ; i++){
		view[i] = "<option>" + this.arrayrespuestas[i] + "<\option>";
	}
	view.unshift("<select name='respuesta'>");
	view.push("</select>");
	return view;
}


PreguntaMultiple.prototype.view = function () {
	var view = [];
	for (var i=0; i<this.arrayrespuestas ; i++){
		view[i] = "<option>" + this.arrayrespuestas[i] + "<\option>";
	}
	view.unshift("<select name='respuesta[]' size=" + this.arrayrespuestas.length + " multiple>");
	view.push("<select>");
	return view;

}

PreguntaMultiple.prototype.get_pregunta = function() {
	return this.pregunta;
}

module.exports = PreguntaMultiple;
module.exports = PreguntaSimple;
