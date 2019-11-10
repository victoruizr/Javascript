columnas=prompt("Numero de columnas");
altura=prompt("Numero de altura");
anchura=prompt("Numero de ancho");
document.write("<table border=1><tr>");
i=1;
    while(i<=columnas){
        document.write("<td width= \""+anchura+"\"");
        if(i%2 != 0)
            document.write(" bgcolor=\"black\">"); 
        document.write("</td>");    i++;}
document.write("</tr></table>");

