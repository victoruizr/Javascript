var nColumns = parseInt(prompt("Introduce el número de columnas"));
var altura = parseInt(prompt("Introduce la altura en píxeles"));
var anchura = parseInt(prompt("Introduce la anchura en píxeles"));
document.write("<table border = \"0\" cellspacing= \"2\" bgcolor= \"black\" width=\"200\">");
document.write("<tr bgcolor=\"white\" height=\""+altura+"\">");
for (let i = 1; i <= nColumns; i++) {
	document.write("<td width= \""+anchura+"\"");
	if(i%2 != 0)
		document.write(" bgcolor=\"black\">"); 
	document.write("</td>");
}
