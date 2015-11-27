function Respuesta(x){

  if(typeof(x)==='string' || typeof(x)==='number'){
    return function(res){return res === x;};
  }

  else if(x instanceof RegExp){
    return function(res){return res.match(x);};
  }

  else if(x instanceof Array){
	var salida=0;
	return function(z){
	if(z.length==x.length)
	{
	    var tam=x.length
	    for(var i=0;i<tam;i++)
	    {
	      for(var j=0; j<tam;j++){
	          if (z[i]==x[j]) {
	            salida++;
    		  }
	      }
	    }
	    if (salida==tam){
	      respues=0;
	      return true;
	    }
	    else 
	      return false;
	}
	else 
	  return false;
	}
  }

  else {
    return x;
  }
}

module.exports = Respuesta;
