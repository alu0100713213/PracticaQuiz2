var Respuesta = require('../models/respuesta_model.js');
var PreguntaCorta = require('../models/pregunta_corta.js');
var PreguntaLarga = require('../models/pregunta_larga.js');
var AbstractQuiz = require('../models/abstract_quiz_model.js');

function Quiz() {
  AbstractQuiz.call(this);
  this.q.push(

    { pregunta: new PreguntaCorta('¿Capital de Italia?'),
      respuesta: new Respuesta(/^\s*roma\s*$/i)
    },

    { pregunta: new PreguntaCorta('¿Dónde se encuentra la estatua de la libertad?'),
      respuesta: new Respuesta(/^\s*nueva york\s*$/i)
    },

    { pregunta: new PreguntaLarga('En la programación HTML la función de la etiqueta b es:'),
      respuesta: new Respuesta(function(x) {
        if (('Aplica negrita a un texto')||('negrita')||('Negrita')){
          return true;
        }
        else {
          return false;
        }
      }
    ) 
   },
    { pregunta: new PreguntaLarga('¿En qué equipo de la NBA juega Pau Gasol actualmente (2015)?'),
      respuesta: new Respuesta(function(x) {
        if ('Chicago Bulls')
	{
          return true;
        }
        else 
	{
          return false;
        }
      }
  	) 
   },

    { pregunta: new PreguntaLarga('Pregunta'),
      respuesta: new Respuesta('suso')
    },
    { pregunta: new PreguntaLarga('¿Quien reinaba en España cuando se descubrió América?'),
      respuesta: new Respuesta(/\b(Isabel\s+y?\s*Fernando)|(Fernando\s+[ey]?\s*Isabel)|(reyes\s+cat[oó]licos)\b/i)
    },

    { pregunta: new PreguntaLarga('Escriba una función JavaScript de nombre <tt>square</tt> '+
    'que recibe un número y devuelve el cuadrado'),
      respuesta: new Respuesta(function(x) {
        try {
          eval(x); /* DANGER DANGER DANGER */
          var z = Math.floor(Math.random()*100);
          return (square(z) == z*z);
        }catch(e) {
          return false;
        }
        return false;
      })
    }


  );


  // insertar unas cuantas preguntas sobre
  // la tabla de multiplicar
  var self  = this;
  for(var i = 0; i<3;i++) {
    (function() {
      var n1 = Math.randomInt(9)+1;
      // debug("n1 = "+n1);
      var n2 = Math.randomInt(9)+1;
      // debug("n2 = "+n2);
      self.q.push(
        { pregunta: new PreguntaCorta('¿ '+n1+'x'+n2+"= ?"),
          respuesta: new Respuesta(function(x) {
            // debug("n1 = "+n1);
            // debug("n2 = "+n2);
            return (x == n1*n2);
        })
      });
    })();
  }
}

Quiz.prototype = new AbstractQuiz();
Quiz.prototype.constructor = Quiz;

module.exports = Quiz;




