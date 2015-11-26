#  Práctica Quiz - Práctica 6 y 7 
## Subject: Sistemas y Tecnologías Web

## *Descripción de la Práctica 6*
#### Generación, Favicon, Layouts, Controladores, Modelos

+ Siguiendo las instrucciones en el Módulo VI: El proyecto Quiz y MVC construya paso a paso la aplicación del cuestionario.
+ Siga las instrucciones en el repositorio SYTW/basic-quiz para dotarlo de un modelo con múltiples preguntas. Este modelo no usa una base de datos sino que se describe mediante una clase JavaScript.
+ Añada una ruta /quizes/questions que liste todas las preguntas. En el listado cada enunciado de la pregunta es un enlace que te lleva a la formulación de la pregunta.
+ Añada rutas como /quizes/questions/5 que muestre la pregunta 5.
+ Despliegue en iaas.ull.es.[Link](http://iaas.ull.es)
+ No hace falta que despliegue la aplicación en Heroku
+ No hace falta que haga un diseño adaptativo.
+ No hace falta que haga pruebas.

---
## *Descripción de la Práctica 7*
#### Diseño Adaptativo, Despliegue en Heroku, Mejoras

+ Diseño adaptativo (véase CSS adaptable a móviles en YouTube)
+ Despliegue en Heroku (véase Despliegue en Heroku en YouTube)
+ Defina una clase o factoría Respuesta cuyo constructor/factoría admita como argumento:
	+ Una función
	+ Una expresión regular regexp (el constructor/factoría lo convierte internamente a formato función así: function(x) { return x.match(regexp); })
	+ Una cadena string o un número number (el constructor/factoría lo convierte a formato función así: function(x) { return x === 'string'; } o bien function(x) { return x === number; })
	+ Un objeto Respuesta es siempre una función que recibe un argumento con la respuesta escrita por el alumno y retorna true si y sólo si la respuesta es correcta.
+ Añada una clase Pregunta de la que heredan PreguntaCorta (que se representa en la vista mediante un input) y PreguntaLarga (que se representará mediante una textarea).

---
## 2. Instalación y ejecución


                      npm install
                      npm start

---
* Mi página personal [Link](http://alu0100713213.github.io)
---
* Despligue en el IAS (Sólo accesibe desde la red de la ULL) [Link](http://10.6.128.99:8081)
---
* Despligue en Heroku [Link](https://quiz-app1.herokuapp.com/)

