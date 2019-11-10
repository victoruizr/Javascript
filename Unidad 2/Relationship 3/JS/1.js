//-------------------------------------
function invierteCadena(cadena) {
	var x = cadena.length;
	var cadenaInvertida = "";
	while (x>=0) {
		cadenaInvertida = cadenaInvertida + cadena.charAt(x);
		x--;
	}
	
	return cadenaInvertida;
}
cadena = "Hola";
document.write("La cadena " + cadena + " invertida es " + invierteCadena(cadena)+"<br>");

//inviertePalabras
function inviertePalabras(cadena){
	cadena = cadena.split(" ");
	for(let i=cadena.length-1;i>=0;i--){
		document.write(cadena[i]+" ");
	}
	document.write("<br>");
}
inviertePalabras("Hola Adios");

// palabraMasLarga
function palabraMasLarga(texto) {
	var palabra = texto.split(' ');
	var resultado = "";
	var i=0;
	for (var i = 0; i < palabra.length; i++) {
		if (palabra[i].length > resultado.length) {
			resultado = palabra[i];
		};
    };
	  return resultado.length;
};
document.write("El resultado es "+palabraMasLarga("Hola Adios"));

//---------------------------------
function filtraPalabrasMasLargas(cadena,numero){
    var palabra = cadena.split(' ');
	var resultado = "";
	for (var i = 0; i < palabra.length; i++) {
		if (palabra[i].length >numero) {
            resultado = palabra[i];
            document.write("<br>"+resultado+" ")
		};
    };
}


filtraPalabrasMasLargas("Hola como estas",4);

//--------------------------------------
function cadenaBienFormada(cadena){
    document.write("<br>");
    return cadena.charAt(0).toUpperCase() + cadena.slice(1)+"<br>";
}

document.write(cadenaBienFormada("hola como estas"));
