function volumen(){
    radio=prompt("Introduce un radio");
    volumen=((4*Math.PI*(Math.pow(radio,3)))/3);
    return volumen;
}
document.write(volumen());