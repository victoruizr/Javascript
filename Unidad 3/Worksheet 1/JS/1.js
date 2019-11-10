function maximo(){
    max=0;
    for (var i=0;i<4;i++){
       var  numero=prompt("Dime un numero");
        if(numero>max){
           max=numero;
        }
    }
    return max;
}
document.write("El numero maximo de los numeros es "+maximo());