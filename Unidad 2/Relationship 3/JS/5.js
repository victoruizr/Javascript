function repetidos(cadena)
{
	var palabra = cadena.split(' ');
	var resultado = " ";
	var i=0;
	for (var i = 0; i < palabra.length; i++) {
              if(palabra[i]==palabra[i+1]){
                     resultado=(palabra[i]);
              }
       }
document.write(resultado);}

repetidos("abbbao");
