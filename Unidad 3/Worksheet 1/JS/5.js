function volumen(){
    opcion=prompt("Volumen de una esfera o area de un circulo(volumen,area)");
    if(opcion=="volumen"){
        radio=prompt("Introduce un radio"); 
        volumen=((4*Math.PI*(Math.pow(radio,3)))/3);
        return volumen;
    }
    else if(opcion=="area"){
        radio=prompt("Introduce un radio");         
        area=Math.PI*Math.pow(radio,2);
    return area;}
}
document.write(volumen()) ;