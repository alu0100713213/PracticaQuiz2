function Respuesta(respuesta)
{
	this.respuesta = respuesta;

	if(typeof(this.respuesta) === 'string' || typeof(this.respuesta) === 'number') 
	{
	return function(x){return x === respuesta;};
	}
	else if(this.respuesta instanceof RegExp)
	{
		return function(x){ return x.match(respuesta); };
	}
	else if(this.respuesta && this.respuesta.constructor && this.respuesta.call && this.respuesta.apply)
	{
		return respuesta;
	}
	else
	{
		return typeof this.respuesta != 'undefined';
	}
}

module.exports = Respuesta;	
