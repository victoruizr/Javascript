var a = parseInt(prompt("Introduce un coeficiente"));
var b = parseInt(prompt("Introduce un coeficiente"));
var c = parseInt(prompt("Introduce un coeficiente"));
 
resultado1 = ((-b) +(Math.sqrt((Math.pow(b,2) - (4*a*c))))/(2*a));
resultado2 = ((-b) -(Math.sqrt((Math.pow(b,2) - (4*a*c))))/(2*a));

document.write(resultado1+"<br>");
document.write(resultado2+"<br>");


