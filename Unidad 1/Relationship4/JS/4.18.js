columnas=parseInt(prompt("Columnas"));
filas=parseInt(prompt("Filas"));
altura=parseInt(prompt("Altura"));
anchura=parseInt(prompt("Anchura"));
document.write("<table border=1>");
for(i=1;i<=filas;i++){
    document.write("<tr>");
    for(a=0;a<=columnas;a++){
        document.write("<td height="+altura+" width="+anchura+"></td>");
    }
    document.write("</tr>")

}

