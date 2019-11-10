var imagenes = new Array();
imagenes[0]="0.jpg";
imagenes[1]="1.jpg";
imagenes[2]="2.jpg";
var numero = Math.round(Math.random()*2);
document.write("<img src='" + imagenes[numero] + "' />");

