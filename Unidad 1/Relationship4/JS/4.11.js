columnas=prompt("Numero de columnas");
altura=prompt("Numero de altura");
anchura=prompt("Numero de ancho");
document.write("<table border=1><tr>");
    for(i=1;i<=columnas;i++){
      document.write("<td height="+altura+" width="+anchura+"></td>");  
    }
document.write("</tr></table>");