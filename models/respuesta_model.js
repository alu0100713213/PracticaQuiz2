function Respuesta(input){
	this.input = input;
  if(typeof(this.input)==='string' || typeof(this.input)==='number'){
    return function(end){return end === this.input;};
  }

  else if(this.input instanceof RegExp){
    return function(end){return end.match(this.input);};
  }

 else if(this.input instanceof Array){
	return function(end){
		return end.match(this.input);
	};

/**    return function(end){
      if(this.input.length != end.length) return false;

      var resultado = true;

      for(var i=0; i<input.length; i++){
        if(input[i] != end[i]) resultado = false;
      }

      return resultado;
    };
  }

  else {
    return input;
  }*/
}
}

module.exports = Respuesta;
