var Pregunta = require('../models/pregunta_model.js');

function PreguntaSimple(args, array_respuestas){
	Pregunta.call(this, args);
	this.args = args;
	this.arrayrespuestas = array_respuestas;
	var numero;
	this.view = "<select name='respuesta[]'>"; 
	for(var i=0; i<array_respuestas.length; i++){
		this.view += "<option value='"+ this.arrayrespuestas[i] + "'>" + this.arrayrespuestas[i] + "</option>";

	}
	this.view += "</select>";

}

PreguntaSimple.prototype = new Pregunta();
PreguntaSimple.prototype.constructor = PreguntaSimple;
module.exports = PreguntaSimple;


