function reloj(){
    var fecha = new Date();
    var horas=fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    var horario=horas+":"+minutos+":"+segundos;
    document.write(horario);
    document.close();  
    window.setTimeout(reloj,1000);
}
window.setTimeout(reloj,1000);
