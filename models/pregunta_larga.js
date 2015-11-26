var Pregunta = require('../models/pregunta_model.js');

function PreguntaLarga(args){
	Pregunta.call(this,args);
	this.view = "<textarea name='PreguntaLarga' rows='3' cols='40' placeholder='Responda aquí(textarea)'></textarea>";
}

PreguntaLarga.prototype = new Pregunta();
PreguntaLarga.prototype.constructor = PreguntaLarga;
module.exports = PreguntaLarga;
