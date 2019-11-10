numero=ParseInt(prompt("Introduce un número"));
numero2= ParseInt(prompt("Introduce otro numero"));
do{
    alert("Numero incorrecto");
    numero2=ParseInt(prompt("Introduce otro numero"));           
}while(numero2!=numero)
document.write("Numero correcto");


//revisar