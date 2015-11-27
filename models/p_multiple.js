var Pregunta = require('../models/pregunta_model.js');

function PreguntaMultiple(args, array_respuestas) {
	Pregunta.call(this, args);
	this.args = args;
	this.arrayrespuestas = array_respuestas;
	var numero;
	this.view = "<select name='respuestamultiple' size=" + this.arrayrespuestas.length + " multiple>"; 
	for(var i=0; i<array_respuestas.length; i++){
		this.view += "<option value='"+ this.arrayrespuestas[i] + "'>" + this.arrayrespuestas[i] + "</option>";

	}
	this.view += "</select>";

}

PreguntaMultiple.prototype = new Pregunta();
PreguntaMultiple.prototype.constructor = PreguntaMultiple;
module.exports = PreguntaMultiple;


