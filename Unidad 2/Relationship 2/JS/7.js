var numero1=20;
function descendiente(numero){
    document.write("<table border=1 height=50px width=50px><tr><td>");
    for(i=0;i<=numero;i++)
    {
        document.write(i+" ");
    }
    document.write("</td><tr><td>"+Math.sin(numero)+"</td></tr></table>");
}
descendiente(numero1);



