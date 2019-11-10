function apariciones(cadena1,cadena2){
    var palabra1 = cadena1.split(' ');
    var resultado = "";
    var palabra2 = cadena2.split(' ');
	for (var i = 0; i < palabra1.length; i++) {
        for (var z = 0; z < palabra2.length; z++) {
		    if (palabra2[z]==palabra1[i]) {
            resultado = ""+palabra1[i];
            document.write(""+resultado+" ")
		};
    }
    }
    return resultado;
}

apariciones("Hola como estas ","Hola señorita como estas");
