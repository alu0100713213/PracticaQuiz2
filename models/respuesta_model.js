function Respuesta(x){

  if(typeof(x)==='string' || typeof(x)==='number'){
    return function(res){return res === x;};
  }

  else if(x instanceof RegExp){
    return function(res){return res.match(x);};
  }

  else if(x instanceof Array){
    f = function(res){
      if(respuesta.length == res.length){ 
        var correcta = 0;
        for(var i = 0; i < respuesta.length; i++){
          if(res[i] === respuesta[i])
            correcta++;
        }
        if(correcta == respuesta.length)
          return true;
	else       
	 return false;
      }
      return true;
  }
}

  else {
    return x;
  }
}

module.exports = Respuesta;
