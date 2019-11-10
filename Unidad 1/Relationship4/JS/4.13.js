var columnas = parseInt(prompt("Introduce el número de columnas"));
var altura = parseInt(prompt("Introduce la altura en píxeles"));
var anchura = parseInt(prompt("Introduce la anchura en píxeles"));
document.write("<table border=1><tr>");
i=1;
    while(i<=columnas){
        document.write("<td height="+altura+" width="+anchura+"></td>");  
        i++;
    }

