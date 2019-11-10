function info(cadena) {

    var resultado = "La cadena \""+cadena+"\" ";
  
    // Comprobar mayúsculas y minúsculas
    if(cadena == cadena.toUpperCase()) {
      resultado += " esta formada solo por mayusculas";
    }
    else if(cadena == cadena.toLowerCase()) {
      resultado += " esta formada solo por minusculas";
    }
    else {
      resultado += " esta formada por mayusculas y minusculas";
    }
  
    return resultado;
  }
document.write(info("HOLA COMO ESTAS"));
