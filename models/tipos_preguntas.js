var Pregunta = require('../models/pregunta_model.js');

function PreguntaSimple(args, array_respuestas){
	Pregunta.call(this, args);
	this.args = args;
	this.arrayrespuestas = array_respuestas;
	var numero;
	this.view = "<select>"; 
	for(var i=0; i<array_respuestas.length; i++){
		this.view += "<option value='"+ this.arrayrespuestas[i] + "'>" + this.arrayrespuestas[i] + "</option>";

	}
	this.view += "</select>";

}

function PreguntaMultiple(args, array_respuestas) {
	Pregunta.call(this, args);
	this.args = args;
	this.arrayrespuestas = array_respuestas;
	this.view = "<input type='text' name='respuesta' placeholder='Responda aquí' autofocus=''>";

}

PreguntaMultiple.prototype = new Pregunta();
PreguntaSimple.prototype = new Pregunta();

PreguntaMultiple.prototype.constructor = PreguntaMultiple;
PreguntaSimple.prototype = new Pregunta();

module.exports = PreguntaMultiple;
module.exports = PreguntaSimple;
