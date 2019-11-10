function contadorPalabras(cadena){
    var palabra = cadena.split(' ');
	var resultado = "";
	var c=0;
	for (var i = 0; i < palabra.length; i++) {
		if (palabra[i]!=' ' && palabra[i+1]!='') {
            c=c+1;
		};
    };
    document.write(c);
}
contadorPalabras("Hola como estas pepe");