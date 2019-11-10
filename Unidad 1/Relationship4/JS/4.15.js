numero=ParseInt(prompt("Introduce un número"));
numero2= ParseInt(prompt("Introduce otro numero"));
if (numero2!=numero){
    while(numero2!=numero){
        alert("Numero incorrecto")
        numero2= ParseInt(prompt("Introduce otro numero"));  
    }
}
    document.write("Numero correcto");


//revisar