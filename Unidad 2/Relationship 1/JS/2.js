var fecha=new Date();
var dias = fecha.getDate();
var meses = (fecha.getMonth()+1);
var anio = fecha.getFullYear();
//fecha de hoy
var fechaHoy=fecha; 
document.write(fechaHoy+"<br>");

//suma de 85 dias
var diaActual=fechaHoy.getDate();
var diaFuturo=diaActual+85;
var fecha85=fechaHoy.setDate(diaFuturo);
document.write(fecha+"<br>");


//fecha -187 dias
var diaPasado=diaActual-187;
var fecha187=fechaHoy.setDate(diaPasado);
document.write(fecha+"<br>");

//Preguntar porque no empleo las variables
//var sumaAnio
var anioActual=fecha.getFullYear();
var anioFuturo=anioActual+2;
var sumaAnio=fecha.setFullYear(anioFuturo);
document.write(fecha+"<br>");
//var 24h
var horaActual=fecha.getHours();
var horaPasada=horaActual-24;
var horaFinal=fecha.setHours(horaPasada); 
document.write(fecha+"<br>");

//----------------------------
//var resto
var suma=fecha85-fecha187;
var diferencia = fecha.setDate(suma+"<br>");
document.write(suma);






