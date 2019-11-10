 function calculateAge(){
    var cumple=prompt("Año de su cumpleaños");
    var fecha = new Date();
    var ano = parseInt(fecha.getFullYear());
    //var actual =prompt("Año actual");
    if(cumple!=0){
        //document.write("You are either "+(actual-cumple)+" or "+(actual-cumple-1));
        document.write("You are either "+(ano-cumple)+" or "+(ano-cumple-1)+"<br>");}
    else    
        document.write(" Campo vacio<br>");
}

calculateAge();
calculateAge();
calculateAge();


